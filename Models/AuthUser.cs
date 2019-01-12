using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class AuthUser
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public int UserTypeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Token { get; set; }
    }
}
