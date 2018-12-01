using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DBRepository.Interfaces
{
    interface IPostRepository
    {
        Task<Post> GetPost(int postId);
        Task<IEnumerable<Post>> GetPostsByUserId(int userId);
    }
}
