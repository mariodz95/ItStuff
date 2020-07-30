using AutoMapper;
using DAL;
using DAL.Entities;
using Model.Common;
using Repository.Common;
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
    }
}
