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
        public string Price { get; set; }
        public string Location { get; set; }
        public int PhoneNumber { get; set; }
    }
}
