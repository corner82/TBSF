using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Caching.Distributed;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TBSF.Core.Services.RemoteAddressServices;
using TBSF.MVCWebUi.Entities;

namespace TBSF.WebAPITest.Middlewares
{
    

    public class HMACMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly RemoteAddressService _remoteAddressUtil;
        private readonly UserManager<CustomIdentityUser> _userManager;
        private readonly IDistributedCache _distributedCache;

        public HMACMiddleware(RequestDelegate next, 
                              UserManager<CustomIdentityUser> userManager, 
                              RemoteAddressService remoteAddressUtil,
                              IDistributedCache distributedCache)
        {
            _next = next;
            _remoteAddressUtil = remoteAddressUtil;
            _userManager = userManager;
            _distributedCache = distributedCache;
        }

        public  Task  Invoke(HttpContext context)
        {
            try
            {
                var reguestIp = _remoteAddressUtil.GetRequestIP();
                var requestBrowser = context.Request.Headers["User-Agent"].ToString();
                var user =  _userManager.FindByIdAsync("3b65d53e-4f82-425e-a87a-d0e5a64987ae");
                var user2 =  _userManager.FindByEmailAsync("411corner82@gmail.com");
                //HttpContextAccessor accessor = context.Request.HttpContext.Connection.
                //var ipFinder = new RemoteAddressUtil();
                //var requestBase = context.Request;
                try
                {
                    var valueFromRedis22 = _distributedCache.GetString("helloFromRedis");
                } catch(Exception ex)
                {
                    
                }
                
                
                //var valueFromRedis23 = await _distributedCache.GetStringAsync("helloFromRedis");
                var valueFromRedis = default(byte[]);
                //context.Session.TryGetValue("TestProperty", out valueFromRedis);
                if (context.Session.TryGetValue("TestProperty", out valueFromRedis))
                {
                    var valueToDisplay = Encoding.UTF8.GetString(valueFromRedis);
                }

                /*HttpRequestBase request = actionContext.RequestContext.HttpContext.Request;
                string token = requestBase.Params[_securityToken];
                return HMACUtil.IsTokenValid(token, CommonManager.GetIP(request), request.UserAgent);*/
            }
            catch (Exception)
            {
                return  this._next(context);
            }


            // Call the next delegate/middleware in the pipeline
            return this._next(context);
        }
    }
}
