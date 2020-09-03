using AutoMapper;
using Common.Interface_Sort_Pag_Flt;
using DAL;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Model.Common;
using Repository.Common;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<IProductImageModel> AddImagesAsync(byte[] file, Guid id)
        {
            var image = new ProductImageEntity();
            image.Id = Guid.NewGuid();
            image.ProductId = id;
            image.ImageData = file;
            await context.ProductImage.AddAsync(image);
            await context.SaveChangesAsync();
            return mapper.Map<IProductImageModel>(image);
        }

        public async Task<IProductModel> GetProductAsync(Guid productId)
        {
            var product = await context.Product.Include(product => product.Images).FirstOrDefaultAsync(p => p.Id == productId);
     
            return mapper.Map<IProductModel>(product);
        }

        public async Task<IEnumerable<ProductEntity>> GetAllAsync(IPaging paging, IFiltering filtering, ISorting sortObj)
        {
            bool pagingEnabled = paging.PageSize > 0;
            IQueryable<ProductEntity> query = context.Product.Include(pi => pi.Images);

            if (pagingEnabled)
            {
                paging.TotalPages = (int)Math.Ceiling((decimal)query.Count() / (decimal)paging.PageSize);
            }
            else
            {
                paging.TotalPages = 1;
            }

            if (filtering.FilterValue != null)
            {
                query = query.Where(p => p.Category == filtering.FilterValue);
            }

            if (pagingEnabled)
            {
                return await query.Skip((paging.PageNumber - 1) * paging.PageSize).Take(paging.PageSize).ToListAsync();
            }
            else
            {
                return await query.AsNoTracking().ToListAsync();
            }
        }
    }
}
