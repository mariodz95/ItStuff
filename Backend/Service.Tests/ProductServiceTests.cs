//using AutoMapper;
//using Model;
//using Model.Common;
//using Moq;
//using Repository;
//using Repository.Common;
//using System;
//using Xunit;

//namespace Service.Tests
//{
//    public class ProductServiceTests
//    {
//        private readonly ProductService productService;
//        private RepositoryProfile myProfile;
//        private MapperConfiguration configuration;
//        private IMapper mapper;
//        private Mock<IProductRepository> mockRepository;

//        public ProductServiceTests()
//        {
//            myProfile = new RepositoryProfile();
//            configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
//            mapper = new Mapper(configuration);
//            mockRepository = new Mock<IProductRepository>();
//            productService = new ProductService(mockRepository.Object, mapper);
//        }

//        [Fact]
//        public async void CreateAsync_ShouldReturnNewProduct()
//        {
//            //Arrange
//            var id = Guid.NewGuid();
//            var name = "Name 1";
//            IProductModel returnedProduct = new ProductModel() { Id = id, Name = name, Description = "Desc 1", Price = "1", Location = "Location 1" };
//            IProductModel newProduct = new ProductModel() { Name = name, Description = "Desc 1", Price = "1", Location = "Location 1" };

//            mockRepository.Setup(p => p.CreateAsync(newProduct)).ReturnsAsync(returnedProduct);

//            //Act
//            var product = await productService.CreateAsync(newProduct);

//            //Assert
//            Assert.Equal(name, product.Name);
//            Assert.Equal(id, product.Id);

//        }
//    }
//}
