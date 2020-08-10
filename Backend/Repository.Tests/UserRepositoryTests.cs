using AutoMapper;
using DAL;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Model.Common.User;
using Model.User;
using Repository.User;
using System;
using System.Linq;
using Xunit;

namespace Repository.Tests
{
    public class UserRepositoryTests
    {
        #region Seeding
        private RepositoryProfile myProfile;
        private MapperConfiguration configuration;
        private IMapper mapper;
        Guid id = Guid.NewGuid();

        protected DbContextOptions<ApplicationDbContext> ContextOptions { get; }


        public UserRepositoryTests(DbContextOptions<ApplicationDbContext> contextOptions)
        {

            myProfile = new RepositoryProfile();
            configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            mapper = new Mapper(configuration);
            ContextOptions = contextOptions;
            Seed();
        }

        private void Seed()
        {
            using (var context = new ApplicationDbContext(ContextOptions))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                var user1 = new UserEntity { Id = id, FirstName = "Name 1", LastName = "LastName 1" };
                user1.UserRole = new UserRoleEntity { Id = Guid.NewGuid(), Name = "Admin", UserId = id };

                context.Users.Add(user1);
                context.Users.Add(new UserEntity { Id = Guid.NewGuid(), FirstName = "Name 2", LastName = "LastName 2" });
                context.Users.Add(new UserEntity { Id = Guid.NewGuid(), FirstName = "Name 3", LastName = "LastName 3" });

                context.SaveChanges();
            }
        }
        #endregion

        [Fact]
        public async void GetAll_ShouldReturnListOfUsers()
        {
            using (var context = new ApplicationDbContext(ContextOptions))
            {
                var userRepository = new UserRepository(context, mapper);
                var users = await userRepository.GetAllAsync();

                Assert.Equal(3, users.Count());
            }
        }

        [Fact]
        public async void GetByIdAsync_ShouldReturnUserById()
        {
            using (var context = new ApplicationDbContext(ContextOptions))
            {
                var userRepository = new UserRepository(context, mapper);
                var user = await userRepository.GetByIdAsync(id);

                Assert.Equal("Name 1", user.FirstName);
            }
        }

        [Fact]
        public async void CreateAsync_ShouldReturnNewUser()
        {
            using (var context = new ApplicationDbContext(ContextOptions))
            {
                IUserModel uu = new UserModel() { Id = Guid.NewGuid(), FirstName = "Name 4", LastName = "Last 4" };
                var userRepository = new UserRepository(context, mapper);

                var newUser = await userRepository.CreateAsync(uu);

                Assert.Equal("Name 4", newUser.FirstName);
            }

            using (var context = new ApplicationDbContext(ContextOptions))
            {
                var user = context.Set<UserEntity>().Include(ur => ur.UserRole).Single(u => u.FirstName == "Name 4");

                Assert.Equal("Name 4", user.FirstName);
            }
        }

        [Fact]
        public async void CheckIfExistAsync_ReturnTrueIfExists()
        {
            using (var context = new ApplicationDbContext(ContextOptions))
            {
                var userRepository = new UserRepository(context, mapper);

                var user = await userRepository.CheckIfExistAsync("Name 1", "email");

                Assert.NotNull(user);
            }
        }
        [Fact]
        public async void DeleteAsync_ReturnDeletedUser()
        {
            using (var context = new ApplicationDbContext(ContextOptions))
            {
                var userRepository = new UserRepository(context, mapper);

                var user = await userRepository.DeleteAsync(id);

                Assert.False(context.Set<UserEntity>().Any(u => u.Id == id));
            }
        }

    }
}
