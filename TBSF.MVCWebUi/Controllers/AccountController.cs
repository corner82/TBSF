using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TBSF.MVCWebUi.Entities;
using TBSF.MVCWebUi.Models;

namespace TBSF.MVCWebUi.Controllers
{
    public class AccountController : Controller
    {
        private UserManager<CustomIdentityUser> _userManager;
        private RoleManager<CustomIdentityRole> _roleManager;
        private SignInManager<CustomIdentityUser> _signInManager;

        public AccountController(UserManager<CustomIdentityUser> userManager,
                                 RoleManager<CustomIdentityRole> roleManager,
                                 SignInManager<CustomIdentityUser> signInManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
        }

        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterViewModel registerViewModel)
        {
            if (ModelState.IsValid)
            {
                CustomIdentityUser user = new CustomIdentityUser
                {
                    UserName = registerViewModel.Email,
                    Email = registerViewModel.Email
                };

                IdentityResult result = _userManager.CreateAsync(user, registerViewModel.Password).Result;

                if (result.Succeeded)
                {
                    if (!_roleManager.RoleExistsAsync("Admin").Result)
                    {
                        CustomIdentityRole role = new CustomIdentityRole
                        {
                            Name = "Admin"
                        };

                        IdentityResult roleResult = _roleManager.CreateAsync(role).Result;

                        if (!roleResult.Succeeded)
                        {
                            ModelState.AddModelError("", "We can't add the role");
                            return View(registerViewModel);
                        };
                        //return View(registerViewModel);
                    }
                    // await roleManager.AddClaimAsync(adminRole, new Claim(CustomClaimTypes.Permission, "projects.view"));
                    await _userManager.AddClaimAsync(user, new Claim("claimtip", user.Email));
                    _userManager.AddToRoleAsync(user, "Admin").Wait();
                    return RedirectToAction("Index", "Home");
                }
            }
            return View(registerViewModel);
        }

        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(LoginViewModel loginViewModel)
        {
            if(ModelState.IsValid)
            {
                
                /*var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, loginViewModel.Email)
                };*/

                /*var userIdentity = new ClaimsIdentity(claims, "login");
                ClaimsPrincipal principal = new ClaimsPrincipal(userIdentity);*/

                var result = _signInManager.PasswordSignInAsync(loginViewModel.Email,
                                                                loginViewModel.Password,
                                                                loginViewModel.RememberMe,
                                                                false).Result;

                if(result.Succeeded)
                {
                    //System.Security.Claims.ClaimsPrincipal currentUser = this.User;
                    //_signInManager.CreateUserPrincipalAsync()
                    //var currentUser = await _userManager.GetUserAsync(HttpContext.User);
                    /*CustomIdentityUser user = new CustomIdentityUser
                    {
                        UserName = loginViewModel.Email,
                        Email = loginViewModel.Email
                    };*/
                    //await _userManager.AddClaimAsync(user, new Claim("claimtip", "deneme login test"));
                    return RedirectToAction("Index", "Home");
                }
                ModelState.AddModelError("", "Invalid login!");
            }
            return View(loginViewModel);
        }

        [HttpGet]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> LogOff()
        {
            await _signInManager.SignOutAsync();
            //return RedirectToAction(nameof(HomeController.Index), "Home");
            return RedirectToAction("Login");
            //return RedirectToAction("Index");

        }
    }

    
}
