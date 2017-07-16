using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace TBSF.MVCWebUi.Extensions
{
    public static class UserAuthenticationInfo
    {
        public static bool IsUserAuthenticated(this ClaimsPrincipal user)
        {
            //var _user = user;
            if (user.Identity.IsAuthenticated)
            {
                return true;
                //return "User authenticated";
                 //return user.Claims.FirstOrDefault(v => v.Type == ClaimTypes.Email).value;
            }
            return false;
            //return "User not authenticated!!!";
        }
    }
}
