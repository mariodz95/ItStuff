using System;

namespace Model.Common.User
{
    public interface IUserRoleModel
    {
        string Name { get; set; }
        Guid UserId { get; set; }
    }
}
