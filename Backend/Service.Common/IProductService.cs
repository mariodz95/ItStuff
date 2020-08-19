using Microsoft.AspNetCore.Http;
using Model.Common;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Common
{
    public interface IProductService
    {
        Task<IProductModel> CreateAsync(IProductModel product, IList<IFormFile> formData);
    }
}
