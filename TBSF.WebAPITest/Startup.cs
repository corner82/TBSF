using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using TBSF.WebAPITest.Middlewares;
using Microsoft.AspNetCore.Http;
using Microsoft.ApplicationInsights.Extensibility.Implementation.Tracing;
using Microsoft.AspNetCore.HttpOverrides;
using TBSF.Core.Services.RemoteAddressServices;
using TBSF.MVCWebUi.Entities;
using Microsoft.EntityFrameworkCore;

namespace TBSF.WebAPITest
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
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
            services.AddCors(options => {
                options.AddPolicy("AllowAll",
                        builder => {
                            builder.AllowAnyOrigin()
                                   .AllowAnyMethod()
                                   .AllowAnyHeader()
                                   .AllowCredentials();
                        });
            });

            //services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();

            services.AddDbContext<CustomIdentityDbContext>(options =>
                    options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<CustomIdentityUser, CustomIdentityRole>()
                            .AddEntityFrameworkStores<CustomIdentityDbContext>()
                            .AddDefaultTokenProviders();

            services.AddSession();
            services.AddDistributedRedisCache(options =>
            {
                options.InstanceName = Configuration.GetConnectionString("RedisInstanceName");
                //options.Configuration = "185.86.4.73:6379,password=aaal123";
                options.Configuration = Configuration.GetConnectionString("RedisServer");

                //options.Configuration = "localhost";
            });

            // Add framework services.
            services.AddMvc();
            services.AddSingleton<Microsoft.AspNetCore.Http.IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton<RemoteAddressService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            /*IHttpContextAccessor httpContextAccessor = app.ApplicationServices.GetRequiredService<IHttpContextAccessor>();
            Extensions.Context.Configure(httpContextAccessor);*/

            // use here to get ip adress of client on kestrel or nginx production servers
            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });

            app.UseSession();
            app.UseIdentity();

            // extended middleware for HMC calculation
            app.UseHMACModules();

            app.UseCors("AllowAll");
            app.UseMvc();
        }
    }
}
