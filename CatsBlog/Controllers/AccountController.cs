using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using CatsBlog.Services;
using Microsoft.AspNetCore.Http;
using Models;
using System.Threading.Tasks;
using System.Security.Claims;
using DBRepository.Interfaces;

namespace CatsBlog.Controllers
{
    [Authorize]
    [Route("api/auth")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private IAccountService _accountService;
        IUserRepository _userRepository;

        public AccountController(IAccountService accountService, IUserRepository userRepository)
        {
            _accountService = accountService;
            _userRepository = userRepository;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]User userParam)
        {
            var user = await _accountService.Authenticate(userParam.Login, userParam.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });
            return Ok(new {
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserId = user.Id,
                Token = user.Token
            });
        }

        [HttpGet("me")]
        public async Task<IActionResult> GetCurrentUser()
        {
            int userId = int.Parse(User.Identity.Name);
            var user = await _userRepository.Get(userId);

            return Ok(user);
        }
    }
}