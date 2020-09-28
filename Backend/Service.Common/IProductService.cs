using Common.Interface_Sort_Pag_Flt;
using Microsoft.AspNetCore.Http;
using Model.Common;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Common
{
    public interface IProductService
    {
        Task<IProductModel> CreateAsync(IProductModel product, IList<IFormFile> formData);
        Task<IProductModel> GetProductAsync(Guid productId);
        Task<IEnumerable<IProductModel>> GetAllAsync(IPaging paging, IFiltering filtering, ISorting sortObj, float fromPrice, float toPrice);
        Task<IEnumerable<IProductModel>> GetUserProductsAsync(Guid userId, IPaging paging);
        Task<IProductModel> DeleteProductAsync(Guid productId);
    }
}
