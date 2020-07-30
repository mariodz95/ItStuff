using AutoMapper;
using ItStuff.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model.Common;
using Service.Common;
using System.Threading.Tasks;

namespace ItStuff.Controllers
{
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
        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] ProductViewModel product)
        {
            var mappedProduct = mapper.Map<IProductModel>(product);
            var newProduct = await productService.CreateAsync(mappedProduct);
            var result = mapper.Map<ProductViewModel>(newProduct);
            return Ok(result);
        }
    }
}
