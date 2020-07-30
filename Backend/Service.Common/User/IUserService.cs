using Model.Common.User;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Common.User
{
    public interface IUserService
    {
        Task<IUserModel> Authenticate(string username, string password);
        Task<IEnumerable<IUserModel>> GetAllAsync();
        Task<IUserModel> GetByIdAsync(Guid id);
        Task<IUserModel> CreateAsync(IUserModel user);
        Task<IUserModel> DeleteAsync(Guid id);
        string GetToken(IUserModel user);
    }
}
