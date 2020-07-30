using System;
using System.Collections.Generic;

namespace DAL.Entities
{
    public class UserEntity : BaseEntity
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
        public DateTime BirthDate { get; set; }
        public string Token { get; set; }
        public UserRoleEntity UserRole { get; set; }
        public List<ProductEntity> Products { get; set; }
    }
}
