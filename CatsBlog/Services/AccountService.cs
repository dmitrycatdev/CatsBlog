﻿using CatsBlog.Helpers;
using DBRepository.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace CatsBlog.Services
{
    public interface IAccountService
    {
        Task<AuthUser> Authenticate(string username, string password);
    }

    public class AccountService : IAccountService
    {
        private readonly AppSettings _appSettings;
        private IUserRepository _userRepository;

        public AccountService(IOptions<AppSettings> appSettings, IUserRepository userRepository)
        {
            _appSettings = appSettings.Value;
            _userRepository = userRepository;
        }

        public async Task<AuthUser> Authenticate(string login, string password)
        {
            var user = await _userRepository.GetByAccount(login, password);
            if (user == null)
                return null;
            var result = new AuthUser()
            {
                Id = user.Id,
                Login = user.Login,
                UserTypeId = user.UserTypeId,
                FirstName = user.FirstName,
                LastName = user.LastName
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, result.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            result.Token = tokenHandler.WriteToken(token);

            user.Password = null;

            return result;
        }
    }
}
