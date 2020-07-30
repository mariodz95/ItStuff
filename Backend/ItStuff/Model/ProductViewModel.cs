using System;
using System.Collections.Generic;

namespace ItStuff.Model
{
    public class ProductViewModel
    {
        public Guid Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public string Location { get; set; }
        public int PhoneNumber { get; set; }
        public Guid UserId { get; set; }
        public string ProductCategory { get; set; }
    }
}
