using DAL.Entities;
using Model.Common.User;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repository.Common.User
{
    public interface IUserRepository
    {
        Task<IUserModel> GetUserAsync(string username);
        Task<UserEntity> GetByIdAsync(Guid id);
        Task<bool> CheckIfExistAsync(string name);
        Task<IUserModel> CreateAsync(IUserModel user);
        Task<IEnumerable<IUserModel>> GetAllAsync();
        Task<IUserModel> DeleteAsync(Guid id);
    }
}
