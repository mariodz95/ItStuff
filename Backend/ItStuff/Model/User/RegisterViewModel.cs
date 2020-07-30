using System;
using System.ComponentModel.DataAnnotations;

namespace ItStuff.Model.User
{
    public class RegisterViewModel
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        [MinLength(5)]
        public string Password { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public string Zip { get; set; }

        public string Gender { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }
    }
}
