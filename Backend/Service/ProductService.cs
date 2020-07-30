using AutoMapper;
using Model.Common;
using Repository.Common;
using Service.Common;
using System;
using System.Threading.Tasks;

namespace Service
{
    public class ProductService : IProductService
    {
        private IProductRepository productRepository;
        private IMapper mapper;

        public ProductService(IProductRepository productRepository, IMapper mapper)
        {
            this.productRepository = productRepository;
            this.mapper = mapper;
        }
        public async Task<IProductModel> CreateAsync(IProductModel product)
        {
            product.Id = Guid.NewGuid();
            product.DateCreated = DateTime.Now;
            product.DateUpdated = DateTime.Now;
            return await productRepository.CreateAsync(product);
        }
    }
}
