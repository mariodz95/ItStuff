using ItStuff.Model.User;
using Microsoft.AspNetCore.Authentication;
using System;
using System.Collections.Generic;

namespace ItStuff.Model
{
    public class ProductViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public string Location { get; set; }
        public string PhoneNumber { get; set; }
        public string Category { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }

        public List<ProductImageViewModel> Images { get; set; }
        public UserViewModel User { get; set; }
    }
}
