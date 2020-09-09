using Model.Common.User;
using System;
using Model.Base.BaseModel;
using System.Collections.Generic;
using Model.Common;

namespace Model.User
{
    public class UserModel : BaseModel, IUserModel
    {
        public string FirstName { get; set; }
        public string Email { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Zip { get; set; }
        public string Gender { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime BirthDate { get; set; }
        public string Token { get; set; }
        public string Password { get; set; }
        public IUserRoleModel UserRole { get; set; }
        public List<IProductModel> Products { get; set; }
    }
}
