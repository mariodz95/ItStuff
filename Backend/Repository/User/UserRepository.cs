using AutoMapper;
using DAL;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Model.Common.User;
using Repository.Common.User;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repository.User
{
    public class UserRepository : IUserRepository
    {
        private ApplicationDbContext context;
        private IMapper mapper;

        public UserRepository(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<IUserModel> GetUserAsync(string username)
        {
            var user = await context.Users.AsNoTracking().FirstOrDefaultAsync(x => x.UserName == username);
            user.UserRole = await context.UserRole.AsNoTracking().FirstOrDefaultAsync(u => u.UserId == user.Id);
            return mapper.Map<IUserModel>(user);
        }

        public async Task<IUserModel> CreateAsync(IUserModel user)
        {
            var newUser = mapper.Map<UserEntity>(user);
            await context.Users.AddAsync(newUser);
            await context.SaveChangesAsync();
            return user;
        }

        public async Task<UserEntity> GetByIdAsync(Guid id)
        {
            var user = await context.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<bool> CheckIfExistAsync(string name)
        {
            var exist = await context.Users.AnyAsync(u => u.UserName == name);
            return exist;
        }

        public async Task<IEnumerable<IUserModel>> GetAllAsync()
        {
            var allUsers = await context.Users.ToListAsync();
            return mapper.Map<IEnumerable<IUserModel>>(allUsers);
        }

        public async Task<IUserModel> DeleteAsync(Guid id)
        {
            var deleteUser = await context.Users.FindAsync(id);

            if (deleteUser == null)
            {
                return null;
            }

            context.Users.Remove(deleteUser);
            await context.SaveChangesAsync();
            return mapper.Map<IUserModel>(deleteUser);
        }
    }
}