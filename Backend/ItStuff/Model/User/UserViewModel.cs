using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItStuff.Model.User
{
    public class UserViewModel
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Zip { get; set; }
        public string Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public UserRoleViewModel UserRole { get; set; }
    }
}
