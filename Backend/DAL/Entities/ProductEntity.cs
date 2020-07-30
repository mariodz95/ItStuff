using System;
using System.Collections.Generic;

namespace DAL.Entities
{
    public class ProductEntity : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public string Location { get; set; }
        public string PhoneNumber { get; set; }
        public Guid UserId { get; set; }
        public UserEntity User { get; set; }
        public List<ProductImageEntity> Images { get; set; }
        public ProductCategoryEntity ProductCategory { get; set; }
    }
}
