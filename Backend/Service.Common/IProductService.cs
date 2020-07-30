using Model.Common;
using System.Threading.Tasks;

namespace Service.Common
{
    public interface IProductService
    {
        Task<IProductModel> CreateAsync(IProductModel product);
    }
}
