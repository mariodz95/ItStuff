using Model.Base.BaseModel;
using Model.Common;
using System;

namespace Model
{
    public class ProductImageModel : BaseModel, IProductImageModel
    {
        public string Name { get; set; }
        public byte[] ImageData { get; set; }
        public Guid ProductId { get; set; }
        public IProductModel Product { get; set; }
    }
}
