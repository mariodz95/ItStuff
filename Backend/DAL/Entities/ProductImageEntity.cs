using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities
{
    public class ProductImageEntity : BaseEntity
    {
        public string Name{ get; set; }
        public byte[] ImageData { set; get; }

        public Guid ProductId { get; set; }
        public ProductEntity Product { get; set; }

    }
}
