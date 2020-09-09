using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class ProductImageEntity : BaseEntity
    {
        [Required]
        public byte[] ImageData { set; get; }

        public Guid ProductId { get; set; }
        public ProductEntity Product { get; set; }

    }
}
