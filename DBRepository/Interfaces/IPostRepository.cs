﻿using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DBRepository.Interfaces
{
    public interface IPostRepository
    {
        Task<Post> GetPost(int postId);
    }
}
