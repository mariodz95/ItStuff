using AutoMapper;
using ItStuff.Model;
using ItStuff.Model.User;
using Model.Common;
using Model.Common.User;

namespace ItStuff.Controllers
{
    public class WebAppProfiles : Profile
    {
        public WebAppProfiles()
        {
            CreateMap<RegisterViewModel, IUserModel>().ReverseMap();
            CreateMap<UserViewModel, IUserModel>().ReverseMap();
            CreateMap<UserRoleViewModel, IUserRoleModel>().ReverseMap();

            CreateMap<ProductViewModel, IProductModel>().ReverseMap();
        }
    }
}
