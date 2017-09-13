using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using TBSF.MVCWebUi.Entities;

namespace TBSF.HMAC.Controllers
{
    [Route("api/[controller]")]
    public  class ValuesController : Controller
    {

        private UserManager<CustomIdentityUser> _userManager; 

        public ValuesController(UserManager<CustomIdentityUser> userManager)
        {
            _userManager = userManager;
        }

        // GET api/values
        [HttpGet]
        public async Task<IEnumerable<string>> Get()
        {
            var user = await _userManager.FindByIdAsync("3b65d53e-4f82-425e-a87a-d0e5a64987ae");
            var user2 = await _userManager.FindByEmailAsync("311corner82@gmail.com");
            //user.Claims.All<>();
            var roleUser2 = user2.Roles.SingleOrDefault();
            //var user3 = await _userManager.GetUserAsync(HttpContext.User);
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
