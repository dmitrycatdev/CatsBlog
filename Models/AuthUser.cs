using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class AuthUser : User
    {
        public string Token { get; set; }
    }
}
