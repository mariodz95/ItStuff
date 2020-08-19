using Model.Common;
using System;
using System.Threading.Tasks;

namespace Repository.Common
{
    public interface IProductRepository
    {
        Task<IProductModel> CreateAsync(IProductModel product);
        Task<IProductImageModel> AddImagesAsync(byte[] file, Guid id);
    }
}
