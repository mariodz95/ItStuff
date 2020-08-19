using AutoMapper;
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
        [AllowAnonymous]
        [HttpPost("[action]")]
        public async Task<IActionResult> Create(IFormCollection data, [FromForm(Name = "body")] IList<IFormFile> formData)
        {

            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;

            var product = new ProductModel();
            product.Name = Regex.Replace(data["title"], @"(\[|""|\])", "");
            product.Description = Regex.Replace(data["description"], @"(\[|""|\])", "");
            product.Price = Regex.Replace(data["price"], @"(\[|""|\])", "");
            product.UserId = new Guid(userId);

            var newProduct = await productService.CreateAsync(product, formData);

            return Ok(mapper.Map<ProductViewModel>(newProduct));
        }

    }
}
