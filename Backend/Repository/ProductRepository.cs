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
            await context.Products.AddAsync(newProduct);
            await context.SaveChangesAsync();
            return product;
        }

        public async Task<IProductImageModel> AddImagesAsync(byte[] file, Guid id)
        {
            var image = new ProductImageEntity();
            image.Id = Guid.NewGuid();
            image.ProductId = id;
            image.ImageData = file;
            image.DateCreated = DateTime.Now;
            image.DateUpdated = DateTime.Now;
            await context.ProductImages.AddAsync(image);
            await context.SaveChangesAsync();
            return mapper.Map<IProductImageModel>(image);
        }

        public async Task<IProductModel> GetProductAsync(Guid productId)
        {
            var product = await context.Products.Include(product => product.Images).FirstOrDefaultAsync(p => p.Id == productId);

            return mapper.Map<IProductModel>(product);
        }

        public async Task<IEnumerable<ProductEntity>> GetAllAsync(IPaging paging, IFiltering filtering, ISorting sortObj, float fromPrice, float toPrice)
        {
            bool pagingEnabled = paging.PageSize > 0;
            IQueryable<ProductEntity> query = context.Products.Include(pi => pi.Images).Include(u => u.User);

            if (filtering.FilterValue != null)
            {
                if (filtering.FilterValue.Contains("name: "))
                {
                    var searchValue = filtering.FilterValue.Remove(0, filtering.FilterValue.IndexOf(' ') + 1);
                    query = query.Where(p => p.Name.Contains(searchValue));
                }
                else
                {
                    query = query.Where(p => p.Category == filtering.FilterValue);
                }
            }

            if(fromPrice != 0)
            {
                query = query.Where(p => p.Price >= fromPrice);
            }

            if (toPrice != 0)
            {
                query = query.Where(p => p.Price <= toPrice);
            }

            if (pagingEnabled)
            {
                paging.TotalPages = (int)Math.Ceiling((decimal)query.Count() / (decimal)paging.PageSize);
            }
            else
            {
                paging.TotalPages = 1;
            }

            if (pagingEnabled)
            {
                return await query.AsNoTracking().Skip((paging.PageNumber - 1) * paging.PageSize).Take(paging.PageSize).OrderByDescending(x => x.DateCreated).ToListAsync();
            }
            else
            {
                return await query.AsNoTracking().ToListAsync();
            }
        }

        public async Task<IEnumerable<ProductEntity>> GetProductsByUser(Guid userId, IPaging paging)
        {
            bool pagingEnabled = paging.PageSize > 0;

            IQueryable<ProductEntity> query = context.Products.Include(pi => pi.Images).Where(p => p.UserId == userId);

            if (pagingEnabled)
            {
                paging.TotalPages = (int)Math.Ceiling((decimal)query.Count() / (decimal)paging.PageSize);
            }
            else
            {
                paging.TotalPages = 1;
            }

            if (pagingEnabled)
            {
                return await query.AsNoTracking().Skip((paging.PageNumber - 1) * paging.PageSize).Take(paging.PageSize).OrderByDescending(x => x.DateCreated).ToListAsync();
            }
            else
            {
                return await query.AsNoTracking().ToListAsync();
            }
        }
    }
}
