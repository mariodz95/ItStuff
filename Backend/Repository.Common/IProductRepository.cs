using Common.Interface_Sort_Pag_Flt;
using DAL.Entities;
using Model.Common;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repository.Common
{
    public interface IProductRepository
    {
        Task<IProductModel> CreateAsync(IProductModel product);
        Task<IProductImageModel> AddImagesAsync(byte[] file, Guid id);
        Task<IProductModel> GetProductAsync(Guid productId);
        //Task<IEnumerable<ProductEntity>> GetAllAsync(IPaging paging, IFiltering filtering, ISorting sortObj);
    }
}
