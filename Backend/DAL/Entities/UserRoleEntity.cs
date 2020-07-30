using System;

namespace DAL.Entities
{
    public class UserRoleEntity : BaseEntity
    {
        public string Name { get; set; }
        public Guid UserId { get; set; }
        public UserEntity User { get; set; }
    }
}
