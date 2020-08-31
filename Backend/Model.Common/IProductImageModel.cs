using Model.Common.BaseModel;
using System;

namespace Model.Common
{
    public interface IProductImageModel : IBaseModel
    {
        string Name { get; set; }
        byte[] ImageData { set; get; }

        Guid ProductId { get; set; }
    }
}
