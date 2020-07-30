using Model.Common.User;
using Model.Base.BaseModel;
using System;

namespace Model.User
{
    public class UserRoleModel : BaseModel, IUserRoleModel
    {
        public string Name { get; set; }
        public Guid UserId { get; set; }
    }
}
