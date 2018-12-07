using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CatsBlog.Controllers
{
    [Route("api/[controller]")]
    public class PostController : Controller
    {
        #region fields
        IPostRepository _postRepository;
        #endregion

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [Route("{id}")]
        [HttpGet]
        public async Task<Post> GetPost(int postId)
        {
            return await _postRepository.GetPost(postId);
        }
    }
}
