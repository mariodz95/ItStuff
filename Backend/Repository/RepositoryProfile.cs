using AutoMapper;
using DAL.Entities;
using Model.Common;
using Model.Common.User;

namespace Repository
{
    public class RepositoryProfile : Profile
    {
        public RepositoryProfile()
        {
            CreateMap<UserEntity, IUserModel>().ReverseMap();
            CreateMap<UserRoleEntity, IUserRoleModel>().ReverseMap();
            CreateMap<ProductEntity, IProductModel>().ReverseMap();
            CreateMap<ProductImageEntity, IProductImageModel>().ReverseMap();
        }
    }
}
