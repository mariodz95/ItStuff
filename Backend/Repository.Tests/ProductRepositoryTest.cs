using AutoMapper;
using DAL;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Model;
using Model.Common;
using System;
using System.Linq;
using Xunit;
using System.Drawing;
using System.IO;

namespace Repository.Tests
{
    public class ProductRepositoryTest
    {
        #region Seeding
        private RepositoryProfile myProfile;
        private MapperConfiguration configuration;
        private IMapper mapper;
        Guid id = Guid.NewGuid();
        Guid userId = Guid.NewGuid();

        protected DbContextOptions<ApplicationDbContext> ContextOptions { get; }


        public ProductRepositoryTest(DbContextOptions<ApplicationDbContext> contextOptions)
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

                context.Products.Add(new ProductEntity { Id = id, Name = "Name 1", Description = "Descp 1", Price = "1", Location = "Loc 1", PhoneNumber = "Phone 1", UserId = userId });
                context.Products.Add(new ProductEntity { Id = Guid.NewGuid(), Name = "Name 2", Description = "Descp 2", Price = "1", Location = "Loc 2", PhoneNumber = "Phone 2", UserId = userId });
                context.Products.Add(new ProductEntity { Id = Guid.NewGuid(), Name = "Name 3", Description = "Descp 3", Price = "1", Location = "Loc 3", PhoneNumber = "Phone 3", UserId = userId });

                context.SaveChanges();
            }
        }
        #endregion

        [Fact]
        public async void CreateAsync_ShouldReturnNewProduct()
        {
            using (var context = new ApplicationDbContext(ContextOptions))
            {
                IProductModel product = new ProductModel() { Id = Guid.NewGuid(), Name = "Name 4", Description = "Descp 4", Price = "4", Location = "Loc 4", PhoneNumber = "Phone 4", UserId = userId };
                var productRepository = new ProductRepository(context, mapper);

                var newProduct = await productRepository.CreateAsync(product);

                Assert.Equal("Name 4", newProduct.Name);
                Assert.Equal("Descp 4", newProduct.Description);
                Assert.Equal("4", newProduct.Price);
            }

            using (var context = new ApplicationDbContext(ContextOptions))
            {
                var user = context.Set<ProductEntity>().Single(u => u.Name == "Name 4");

                Assert.Equal("Name 4", user.Name);
            }
        }


        [Fact]
        public async void GetProductAsync_ShouldReturnProduct()
        {
            using (var context = new ApplicationDbContext(ContextOptions))
            {
                var productRepository = new ProductRepository(context, mapper);

                var product = await productRepository.GetProductAsync(id);

                Assert.Equal("Name 1", product.Name);
                Assert.Equal("Descp 1", product.Description);
                Assert.Equal("1", product.Price);
            }
        }
    }
}
