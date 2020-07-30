using Model.Common.BaseModel;
using System;
using System.Collections.Generic;

namespace Model.Common.User
{
    public interface IUserModel : IBaseModel 
    {
        string FirstName { get; set; }
        string Email { get; set; }
        string LastName { get; set; }
        string UserName { get; set; }
        byte[] PasswordHash { get; set; }
        byte[] PasswordSalt { get; set; }
        string Address { get; set; }
        string City { get; set; }
        string Country { get; set; }
        string Zip { get; set; }
        string Gender { get; set; }
        DateTime BirthDate { get; set; }
        string Token { get; set; }
        string Password { get; set; }
        IUserRoleModel UserRole { get; set; }
        List<IProductModel> Products { get; set; }
    }
}
