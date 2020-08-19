using Model.Base.BaseModel;
using Model.Common;
using Model.Common.User;
using System;
using System.Collections.Generic;

namespace Model
{
    public class ProductModel : BaseModel, IProductModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string Location { get; set; }
        public string PhoneNumber { get; set; }
        public Guid UserId { get; set; }
        public IUserModel User { get; set; }
        public List<IProductImageModel> Images { get; set; }
        public IProductCategoryModel ProductCategory { get; set; }
    }
}
