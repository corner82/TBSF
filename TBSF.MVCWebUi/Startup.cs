using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using TBSF.Refdata.Business.Abstract;
using TBSF.Refdata.Business.Concrete;
using TBSF.Refdata.DataAccess.Abstract;
using TBSF.Refdata.DataAccess.Concrete.EntityFramework;
using TBSF.MVCWebUi.Middlewares;
using TBSF.Refdata.Entities.Concrete;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TBSF.MVCWebUi.Entities;
using Microsoft.AspNetCore.Http;
using StackExchange.Redis;
using NLog.Web;
using NLog.Extensions.Logging;

namespace TBSF.MVCWebUi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            //env.ConfigureNLog("nlog.config");
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
            
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDbContext<CustomIdentityDbContext>(options =>
                    options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<CustomIdentityUser, CustomIdentityRole>()
                            .AddEntityFrameworkStores<CustomIdentityDbContext>()
                            .AddDefaultTokenProviders();

            // Add framework services.
            services.AddScoped<IRefService, RefManager>();
            services.AddScoped<IRefDal, EfRefDal>();

            //string connect = "185.86.4.73:6379,abortConnect=false,ssl=false,password=aaal123";
            /*string connect = "localhost";
            var redis = ConnectionMultiplexer.Connect(connect);
            services.AddSingleton(options => redis.GetDatabase());
            var cache = redis.GetDatabase();
            var expiresIn = new TimeSpan(0, 10, 0);
            cache.StringSetAsync("data:counter", 50 , expiresIn).ConfigureAwait(false);
            var cachedStr = cache.StringGetAsync("data:counter");*/

            services.AddSession();
            services.AddDistributedRedisCache(options =>
            {
                options.InstanceName = Configuration.GetConnectionString("RedisInstanceName");
                //options.Configuration = "185.86.4.73:6379,password=aaal123";
                options.Configuration = Configuration.GetConnectionString("RedisServer");

                //options.Configuration = "localhost";
            });
            

            services.AddMvc();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            /*loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            //loggerFactory.AddProvider()
            loggerFactory.AddDebug();*/

            
            //add NLog to ASP.NET Core
            loggerFactory.AddNLog();
            //Enable ASP.NET Core features (NLog.web) - only needed for ASP.NET Core users
            app.AddNLogWeb();
            //needed for non-NETSTANDARD platforms: configure nlog.config in your project root. NB: you need NLog.Web.AspNetCore package for this. 
            env.ConfigureNLog("nlog.config");



            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseSession();

            app.UseIdentity();

            //custom middleware extension  
            //app.UseFileServer();
            //app.UseNodeModules(env.ContentRootPath);
            app.UseStaticFiles();

            

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
