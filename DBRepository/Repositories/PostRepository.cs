using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBRepository
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(string connectionString, IRepositoryContextFactory contextFactory) 
            : base(connectionString, contextFactory) { }

        public async Task<Post> GetPost(int postId)
        {
            var result = new Post();
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Posts.AsQueryable();
                result = await query.Where(p => p.Id == postId).SingleAsync();
            }
            return result;
        }

        public async Task<IEnumerable<Post>> GetPostsByUserId(int userId)
        {
            IEnumerable<Post> result;
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Posts.AsQueryable();
                result = await query.Where(p => p.Id == userId).ToListAsync();
            }
            return result;
        }
    }
}
