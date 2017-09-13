using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TBSF.Refdata.Business.Abstract;
using TBSF.MVCWebUi.Models;
using Microsoft.AspNetCore.Identity;
using TBSF.MVCWebUi.Entities;
using System.Text;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;

namespace TBSF.MVCWebUi.Controllers
{
    public class HomeController : Controller
    {
        private IRefService _refService;
        private UserManager<CustomIdentityUser> _userManager;
        private readonly IDistributedCache _distributedCache;
        private readonly ILogger<HomeController> _logger;

        //[ViewLayout("_CleanLayout")]
        public HomeController( IRefService refService,
                               UserManager<CustomIdentityUser> userManager,
                               IDistributedCache distributedCache,
                               ILogger<HomeController> logger)
        {
            _refService = refService;
            _userManager = userManager;
            _distributedCache = distributedCache;
            _logger = logger;
        }

        public async Task<IActionResult> Index(/*[FromServices] IRefService refService*/)
        {
            _logger.LogInformation("Index page says hello");
            CustomIdentityUser user = await _userManager.GetUserAsync(HttpContext.User);
            var refs = await _refService.GetAll();
            RefListViewModel model = new RefListViewModel
            {
                Refs = refs,

            };
            try{
                _distributedCache.SetString("helloFromRedis", "world");
                var valueFromRedis22 = _distributedCache.GetString("helloFromRedis");
            }
            catch (Exception ex)
            {

            }
            

            var bytes2 = Encoding.UTF8.GetBytes("345");
            HttpContext.Session.Set("UserID", bytes2);
            var valueFromRedis2 = default(byte[]);
            if (HttpContext.Session.TryGetValue("UserID", out valueFromRedis2)) {
                var valueToDisplay2 = Encoding.UTF8.GetString(valueFromRedis2);
            }
            

            var valueToStoreInRedis = Encoding.UTF8.GetBytes("This is a cached value from Redis");
            HttpContext.Session.Set("TestProperty", valueToStoreInRedis);
            
            var valueFromRedis = default(byte[]);
            if (HttpContext.Session.TryGetValue("TestProperty", out valueFromRedis))
            {
                var valueToDisplay = Encoding.UTF8.GetString(valueFromRedis);
            }

            var valueToStoreInRedis2 = Encoding.UTF8.GetBytes("test zeynel");
            HttpContext.Session.Set("TestZeynel", valueToStoreInRedis2);

            var valueFromRedisZeynel = default(byte[]);
            if (HttpContext.Session.TryGetValue("TestZeynel", out valueFromRedisZeynel))
            {
                var valueToDisplay = Encoding.UTF8.GetString(valueFromRedisZeynel);
            }

            return View(model);
        }

        public IActionResult Login()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
