using System;

namespace Model.Common.BaseModel
{
    public interface IBaseModel
    {
        Guid Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
    }
}
