using System;

namespace DAL.Entities
{
    public class ProductCategoryEntity : BaseEntity
    {
        public string Name { get; set; }
        public Guid ProductId { get; set; }
        public ProductEntity Product { get; set; }
    }
}
