using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DBRepository.Interfaces
{
    public interface IUserRepository
    {
        Task<User> Get(int userId);
        Task<IEnumerable<Post>> GetUserPosts(int userId);
        Task<User> GetByAccount(string login, string password);
    }
}
