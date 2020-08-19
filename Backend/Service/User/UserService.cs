using AutoMapper;
using Common.Helper;
using ItStuff.Helper;
using ItStuff.Model.User;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Model.Common.User;
using Model.User;
using Repository.Common.User;
using Service.Common.User;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Service.User
{
    public class UserService : IUserService
    {
        private IUserRepository userRepository;
        private IMapper mapper;
        private readonly AppSettings appSettings;

        public UserService(IUserRepository userRepository, IMapper mapper, IOptions<AppSettings> appSettings)
        {
            this.userRepository = userRepository;
            this.mapper = mapper;
            this.appSettings = appSettings.Value;
        }

        public async Task<IUserModel> Authenticate(string email, string password)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            {
                return null;
            }

            var user = await userRepository.GetUserAsync(email);

            if (user == null)
            {
                return null;
            }

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return null;
            }

            return mapper.Map<IUserModel>(user);
        }

        public string GetToken(IUserModel user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()),
                    new Claim(ClaimTypes.Role, user.UserRole.Name),
                }),
                Expires = DateTime.UtcNow.AddHours(9),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }

        public async Task<IEnumerable<IUserModel>> GetAllAsync()
        {
            return await userRepository.GetAllAsync();
        }

        public async Task<IUserModel> GetByIdAsync(Guid id)
        {
            var user = await userRepository.GetByIdAsync(id);
            return mapper.Map<IUserModel>(user);
        }

        public async Task<IUserModel> CreateAsync(IUserModel user)
        {

            if (string.IsNullOrWhiteSpace(user.Password))
            {
                throw new AppException("Password is required");
            }

            if (await userRepository.CheckIfExistAsync(user.UserName, user.Email))
            {
                throw new AppException("Username \"" + user.UserName + "\" is already taken");
            }

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(user.Password, out passwordHash, out passwordSalt);

            user.Id = Guid.NewGuid();
            user.DateCreated = DateTime.Now;
            user.DateUpdated = DateTime.Now;
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            var userRole = new UserRoleModel
            {
                Id = Guid.NewGuid(),
                DateUpdated = DateTime.Now,
                DateCreated = DateTime.Now,
                Name = Role.User,
                UserId = user.Id,
            };

            user.UserRole = userRole;
            await userRepository.CreateAsync(user);

            return user;
        }

        public async Task<IUserModel> DeleteAsync(Guid id)
        {
            return await userRepository.DeleteAsync(id);
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }

            return true;
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
