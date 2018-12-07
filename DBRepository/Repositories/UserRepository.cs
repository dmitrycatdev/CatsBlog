using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBRepository.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(string connectionString, IRepositoryContextFactory contextFactory)
            : base(connectionString, contextFactory)
        {   }

        public async Task<User> GetUser(int userId)
        {
            var result = new User();

            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Users.AsQueryable();
                result = await query.Where(u => u.Id==userId).SingleAsync();
            }
            return result;
        }
        public async Task<IEnumerable<Post>> GetUsersPosts(int userId)
        {
            IEnumerable<Post> result;
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Posts.AsQueryable();
                result = await query.Where(p => p.AuthorId == userId).ToListAsync();
            }
            return result;
        }
    }
}
