using AutoMapper;
using Common.Helper;
using ItStuff.Model.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Model.Common.User;
using Service.Common.User;
using System;
using System.Threading.Tasks;

namespace ItStuff.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private IUserService userService;
        private IMapper mapper;

        public UserController(IUserService userService, IMapper mapper)
        {
            this.userService = userService;
            this.mapper = mapper;

        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateViewModel model)
        {
            var user = await userService.Authenticate(model.Username, model.Password);

            if (user == null)
            {
                return BadRequest(new { message = "Username or password is incorrect" });
            }

            user.Token = userService.GetToken(user);

            return Ok(mapper.Map<UserViewModel>(user));
        }

        [Authorize(Roles = Role.Admin)]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await userService.GetAllAsync();
            return Ok(users);
        }

        [Authorize(Roles = Role.Admin)]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var user = await userService.GetByIdAsync(id);
            return Ok(user);
        }

        [Authorize(Roles = Role.Admin)]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var deletedUser = await userService.DeleteAsync(id);
            return Ok(deletedUser);
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {
            try
            {
                var user = mapper.Map<IUserModel>(model);
                await userService.CreateAsync(user);
                return Ok();
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
