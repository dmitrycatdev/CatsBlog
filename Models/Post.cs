using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Body { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsEdited { get; set; }
        public int AuthorId { get; set; }
        public List<Comment> Comments { get; set; }
    }
}
