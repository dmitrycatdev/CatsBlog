using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class UserType
    {
        public int UserTypeId { get; set; }
        public UserTypesEnum Value { get; set; }
    }

    public enum UserTypesEnum
    {
        User = 1,
        Moderator = 2,
        Adminictrator = 3
    }
}
