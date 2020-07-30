﻿using Model.Common.BaseModel;
using Model.Common.User;
using System;
using System.Collections.Generic;

namespace Model.Common
{
    public interface IProductModel : IBaseModel
    {
        string Name { get; set; }
        string Description { get; set; }
        float Price { get; set; }
        string Location { get; set; }
        string PhoneNumber { get; set; }
        Guid UserId { get; set; }
        IUserModel User { get; set; }
        List<IProductImageModel> Images { get; set; }
        IProductCategoryModel ProductCategory { get; set; }
    }
}