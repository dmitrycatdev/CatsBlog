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
    public class UserController : Controller
    {
        IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [Route("{id}")]
        [HttpGet]
        public async Task<User> GetUser(int userId)
        {
            return await _userRepository.GetUser(userId);
        }
    }
}
