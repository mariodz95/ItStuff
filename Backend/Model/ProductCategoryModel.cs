using Model.Base.BaseModel;
using Model.Common;
using System;

namespace Model
{
    public class ProductCategoryModel : BaseModel, IProductCategoryModel
    {
        public string Name { get; set; }
        public Guid ProductId { get; set; }
        public IProductModel Product { get; set; }
    }
}
