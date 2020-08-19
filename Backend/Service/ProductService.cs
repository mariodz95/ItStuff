using AutoMapper;
using Microsoft.AspNetCore.Http;
using Model.Common;
using Repository.Common;
using Service.Common;
using System;
using System.Collections.Generic;
using System.IO;
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
        public async Task<IProductModel> CreateAsync(IProductModel product, IList<IFormFile> formData)
        {
            product.Id = Guid.NewGuid();
            product.DateCreated = DateTime.Now;
            product.DateUpdated = DateTime.Now;

            var newProduct = await productRepository.CreateAsync(product);

            foreach (var image in formData)
            {
                byte[] file = ConvertToBytes(image);
                await productRepository.AddImagesAsync(file, product.Id);
            }

            return newProduct;
        }

        public byte[] ConvertToBytes(IFormFile image)
        {
            byte[] CoverImageBytes = null;
            BinaryReader reader = new BinaryReader(image.OpenReadStream());
            CoverImageBytes = reader.ReadBytes((int)image.Length);
            return CoverImageBytes;
        }
    }
}
