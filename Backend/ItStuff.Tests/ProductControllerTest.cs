using AutoMapper;
using ItStuff.Controllers;
using ItStuff.Model;
using Microsoft.AspNetCore.Mvc;
using Model;
using Model.Common;
using Model.Common.User;
using Moq;
using Service.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using Xunit;

namespace ItStuff.Tests
{
    public class ProductControllerTest
    {
        private readonly Mock<IProductService> mockProductService;
        //private readonly ProductController productController;
        private IMapper mapper;
        private WebAppProfiles myProfile;
        private MapperConfiguration configuration;

        public ProductControllerTest()
        {
            mockProductService = new Mock<IProductService>();
            myProfile = new WebAppProfiles();
            configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            mapper = new Mapper(configuration);
            //productController = new ProductController(mockProductService.Object, mapper);
        }

        //[Fact]
        //public async void Create_ShouldReturnNewProduct()
        //{
        //    //Arrange
        //    var id = Guid.NewGuid();
        //    var name = "Name 1";
        //    IProductModel newProduct = new ProductModel() { Id = id, Name = name, Description = "Desc 1", Price = 1 };
        //    var productViewModel = new ProductViewModel() { Title = "Name 1", Description = "Desc 1", Price = 1 };
        //    IProductModel tt = new ProductModel() { Name = name, Description = "Desc 1", Price = 1 };

        //    var mapperProduct = mapper.Map<IProductModel>(productViewModel);

        //    mockProductService.Setup(p => p.CreateAsync(mapperProduct)).ReturnsAsync(newProduct);
        //    var productController = new ProductController(mockProductService.Object, mapper);

        //    //Act
        //    var actionResult = await productController.Create(productViewModel);
        //    OkObjectResult okObjectResult = Assert.IsType<OkObjectResult>(actionResult);
        //    var model = Assert.IsType<ProductViewModel>(okObjectResult.Value);

        //    //Assert
        //    Assert.Same(productViewModel, model);
        //    Assert.Equal(name, model.Title);
        //}


        [Fact]
        public async void GetProduct_ShouldReturnProduct()
        {
            //Arrange
            var id = Guid.NewGuid();
            var name = "Name 1";
            IProductModel newProduct = new ProductModel() { Id = id, Name = name, Description = "Desc 1", Price = "1" };
            IProductModel tt = new ProductModel() { Name = name, Description = "Desc 1", Price = "1" };


            mockProductService.Setup(p => p.GetProductAsync(id)).ReturnsAsync(newProduct);
            var productController = new ProductController(mockProductService.Object, mapper);

            //Act
            var actionResult = await productController.GetProduct(id);
            OkObjectResult okObjectResult = Assert.IsType<OkObjectResult>(actionResult);
            var model = Assert.IsType<IProductModel>(okObjectResult.Value);

            //Assert
            Assert.Equal(id, model.Id);
        }
    }
}
