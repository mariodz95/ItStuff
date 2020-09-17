using AutoMapper;
using Common.Interface_Sort_Pag_Flt;
using Common.Sort_Pag_Flt;
using ItStuff.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;
using Service.Common;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ItStuff.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private IProductService productService;
        private IMapper mapper;

        public ProductController(IProductService productService, IMapper mapper)
        {
            this.productService = productService;
            this.mapper = mapper;
        }

        [Authorize(Roles = "User,Admin")]
        [HttpPost("[action]")]
        public async Task<IActionResult> Create(IFormCollection data, [FromForm(Name = "body")] IList<IFormFile> formData)
        {

            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;

            var product = new ProductModel();
            product.Name = Regex.Replace(data["title"], @"(\[|""|\])", "");
            product.Description = Regex.Replace(data["description"], @"(\[|""|\])", "");
            product.Price = Regex.Replace(data["price"], @"(\[|""|\])", "");
            product.Category = Regex.Replace(data["category"], @"(\[|""|\])", "");
            product.UserId = new Guid(userId);

            var newProduct = await productService.CreateAsync(product, formData);

            return Ok(mapper.Map<ProductViewModel>(newProduct));
        }

        [AllowAnonymous]
        [HttpGet("getproduct/{productId}")]
        public async Task<IActionResult> GetProduct(Guid productId)
        {
            var product = await productService.GetProductAsync(productId);

            return Ok(product);
        }

        [AllowAnonymous]
        [HttpGet("getall/{pageNumber}&{pageSize}/{search?}/{fromPrice?}/{toPrice?}")]
        public async Task<IActionResult> GetAll(int pageNumber = 0, int pageSize = 10, string search = null, float fromPrice = 0, float toPrice = 0, string sort = null )
       {
            IFiltering filtering = new Filtering
            {
                FilterValue = search,
            };

            ISorting sorting = new Sorting
            {
                SortOrder = sort
            };

            IPaging paging = new Paging
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalPages = 0
            };

            var products = await productService.GetAllAsync(paging, filtering, sorting, fromPrice, toPrice);

            var mappedproducts = mapper.Map<IEnumerable<ProductViewModel>>(products);
    
            return Ok(new { products = mappedproducts, totalPages = paging.TotalPages }); ;
        }
    }
}
