using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TBSF.WebAPITest.Middlewares
{
    public static class HMACMiddlewareExtensions
    {
        public static IApplicationBuilder UseHMACModules(this IApplicationBuilder app)
        {
            return app.UseMiddleware<HMACMiddleware>();
        }
    }
}
