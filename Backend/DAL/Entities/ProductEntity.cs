using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class ProductEntity : BaseEntity
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Price { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Category { get; set; }
        public Guid UserId { get; set; }
        public UserEntity User { get; set; }
        public List<ProductImageEntity> Images { get; set; }
    }
}
