using AutoMapper;
using ItStuff.Controllers;
using Microsoft.AspNetCore.Mvc;
using Model.Common.User;
using Model.User;
using Moq;
using Service.Common.User;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace ItStuff.Tests
{
    public class UserControllerTest
    {
        private readonly Mock<IUserService> mockService;
        private readonly UserController controller;
        private readonly Mock<IMapper> mockMapper;

        public UserControllerTest()
        {
            mockService = new Mock<IUserService>();
            mockMapper = new Mock<IMapper>();
            controller = new UserController(mockService.Object, mockMapper.Object);
        }


        [Fact]
        public async void GetAll_ShouldReturnAllUsers()
        {
            //Arrange
            List<UserModel> userList = new List<UserModel>() { new UserModel { Id = new Guid(), FirstName = "ime", Address = "adresa", Email = "email@test.com" } };

            mockService.Setup(x => x.GetAllAsync()).ReturnsAsync(userList);

            //Act
            var actionResult = await controller.GetAll();
            OkObjectResult okObjectResult = Assert.IsType<OkObjectResult>(actionResult);
            var model = Assert.IsType<List<UserModel>>(okObjectResult.Value);

            //Assert
            Assert.Same(userList, model);
            Assert.Equal(1, model.Count());
        }

        [Fact]
        public async void GetById_ShouldReturnUserById()
        {
            //Arrange
            var id = Guid.NewGuid();
            var firstName = "a";
            IUserModel user = new UserModel { Id = id, FirstName = firstName };

            mockService.Setup(u => u.GetByIdAsync(id)).ReturnsAsync(user);

            //Act
            var actionResult = await controller.GetById(id);
            OkObjectResult okObjectResult = Assert.IsType<OkObjectResult>(actionResult);
            var model = Assert.IsType<UserModel>(okObjectResult.Value);

            //Assert
            Assert.Same(user, model);
            Assert.Equal(id, model.Id);
            Assert.Equal(firstName, model.FirstName);
        }
    }
}
