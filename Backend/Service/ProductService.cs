using AutoMapper;
using Common.Interface_Sort_Pag_Flt;
using Microsoft.AspNetCore.Http;
using Model;
using Model.Common;
using Repository.Common;
using Repository.Common.User;
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
        private IUserRepository userRepository;
        private IMapper mapper;

        public ProductService(IProductRepository productRepository, IMapper mapper, IUserRepository userRepository)
        {
            this.productRepository = productRepository;
            this.mapper = mapper;
            this.userRepository = userRepository;
        }
        public async Task<IProductModel> CreateAsync(IProductModel product, IList<IFormFile> formData)
        {
            var user = await userRepository.GetByIdAsync(product.UserId);

            product.Id = Guid.NewGuid();
            product.DateCreated = DateTime.Now;
            product.DateUpdated = DateTime.Now;
            product.Location = user.City;
            product.PhoneNumber = user.PhoneNumber;
            
            var newProduct = await productRepository.CreateAsync(product);

            foreach (var image in formData)
            {
                byte[] file = ConvertToBytes(image);

                var newImage = await productRepository.AddImagesAsync(file, product.Id);
                newProduct.Image = newImage;
            }


            return newProduct;
        }


        public async Task<IEnumerable<IProductModel>> GetAllAsync(IPaging paging, IFiltering filtering, ISorting sortObj, float fromPrice, float toPrice)
        {
            var result = await productRepository.GetAllAsync(paging, filtering, sortObj, fromPrice, toPrice);
            return mapper.Map<IEnumerable<IProductModel>>(result);
        }

        public byte[] ConvertToBytes(IFormFile image)
        {
            byte[] CoverImageBytes = null;
            BinaryReader reader = new BinaryReader(image.OpenReadStream());
            CoverImageBytes = reader.ReadBytes((int)image.Length);
            return CoverImageBytes;
        }

        public async Task<IProductModel> GetProductAsync(Guid productId)
        {
            return await productRepository.GetProductAsync(productId); 
        }

        public async Task<IEnumerable<IProductModel>> GetUserProductsAsync(Guid userId, IPaging paging)
        {
            var result = await productRepository.GetProductsByUser(userId, paging);
            return mapper.Map<IEnumerable<IProductModel>>(result);
        }

        public async Task<IProductModel> DeleteProductAsync(Guid productId)
        {
            return await productRepository.DeleteProductAsync(productId);
        }
    }
}
