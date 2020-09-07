using Model.Common.BaseModel;
using Model.Common.User;
using System;
using System.Collections.Generic;

namespace Model.Common
{
    public interface IProductModel : IBaseModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string Location { get; set; }
        public string PhoneNumber { get; set; }
        public string Category { get; set; }
        public Guid UserId { get; set; }
        public IUserModel User { get; set; }
        public IProductImageModel Image { get; set; }
        public IList<IProductImageModel> Images { get; set; }
    }
}
