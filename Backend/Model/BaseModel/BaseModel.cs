using Model.Common.BaseModel;
using System;

namespace Model.Base.BaseModel
{
    public class BaseModel : IBaseModel
    {
        public Guid Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
    }
}
