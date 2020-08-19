using AutoMapper;
using DAL;
using DAL.Entities;
using Model.Common;
using Repository.Common;
using System;
using System.Threading.Tasks;

namespace Repository
{
    public class ProductRepository : IProductRepository
    {
        private ApplicationDbContext context;
        private IMapper mapper;

        public ProductRepository(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<IProductModel> CreateAsync(IProductModel product)
        {
            var newProduct = mapper.Map<ProductEntity>(product);
            await context.Product.AddAsync(newProduct);
            await context.SaveChangesAsync();
            return product;
        }

        public async Task<IProductImageModel> AddImagesAsync(byte[] file, Guid id)
        {
            var image = new ProductImageEntity();
            image.Id = Guid.NewGuid();
            image.ProductId = id; 
            image.ImageData = file;
            await context.ProductImage.AddAsync(image);
            await context.SaveChangesAsync();
            return mapper.Map<IProductImageModel>(image);
        }
    }
}
