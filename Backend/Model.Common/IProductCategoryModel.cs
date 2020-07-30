using Model.Common.BaseModel;
using System;

namespace Model.Common
{
    public interface IProductCategoryModel : IBaseModel
    {
        string Name { get; set; }
        Guid ProductId { get; set; }
        IProductModel Product { get; set; }
    }
}
