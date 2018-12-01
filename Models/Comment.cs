using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Body { get; set; }
        public int PostId { get; set; }
        public int AuthorId { get; set; }
    }
}
