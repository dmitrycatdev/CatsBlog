using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models
{
    public class UserType
    {
        public int Id { get; set; }
        public string Value { get; set; }
    }

    public enum UserTypesEnum
    {
        User = 1,
        Moderator = 2,
        Adminictrator = 3
    }
}
