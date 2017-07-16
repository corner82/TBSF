using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TBSF.Refdata.Business.Abstract;
using TBSF.MVCWebUi.Models;
using Microsoft.AspNetCore.Identity;
using TBSF.MVCWebUi.Entities;

namespace TBSF.MVCWebUi.Controllers
{
    public class HomeController : Controller
    {
        private IRefService _refService;
        private UserManager<CustomIdentityUser> _userManager;

        //[ViewLayout("_CleanLayout")]
        public HomeController( IRefService refService,
                               UserManager<CustomIdentityUser> userManager)
        {
            _refService = refService;
            _userManager = userManager;
        }

        public async Task<IActionResult> Index(/*[FromServices] IRefService refService*/)
        {
            CustomIdentityUser user = await _userManager.GetUserAsync(HttpContext.User);
            var refs = await _refService.GetAll();
            RefListViewModel model = new RefListViewModel
            {
                Refs = refs,

            };
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
