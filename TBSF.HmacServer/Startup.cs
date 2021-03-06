﻿using System;
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
using TBSF.MVCWebUi.Entities;
using Microsoft.EntityFrameworkCore;

namespace TBSF.HmacServer
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
           /* services.AddDbContext<CustomIdentityDbContext>(options =>
                   options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<CustomIdentityUser, CustomIdentityRole>()
                            .AddEntityFrameworkStores<CustomIdentityDbContext>()
                            .AddDefaultTokenProviders();*/
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseMvc();
        }
    }
}
