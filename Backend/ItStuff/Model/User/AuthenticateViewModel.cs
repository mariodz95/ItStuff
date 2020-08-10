using System.ComponentModel.DataAnnotations;

namespace ItStuff.Model.User
{
    public class AuthenticateViewModel
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
