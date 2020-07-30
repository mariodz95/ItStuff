using Model.Common;
using System.Threading.Tasks;

namespace Repository.Common
{
    public interface IProductRepository
    {
        Task<IProductModel> CreateAsync(IProductModel product);
    }
}
