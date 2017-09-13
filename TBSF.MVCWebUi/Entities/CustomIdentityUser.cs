using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;

namespace TBSF.MVCWebUi.Entities
{
    public class CustomIdentityUser : IdentityUser
    {
        //public string UserName { get; set; }
        //public string Email { get; set; }
        public static explicit operator CustomIdentityUser(ClaimsPrincipal v)
        {
            throw new NotImplementedException();
        }
    }
}
