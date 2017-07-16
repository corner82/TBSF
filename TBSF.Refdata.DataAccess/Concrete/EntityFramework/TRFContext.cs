using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TBSF.Refdata.Entities.Concrete;

namespace TBSF.Refdata.DataAccess.Concrete.EntityFramework
{
    public class TRFContext:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(@"Server = 185.86.4.73; Port = 5432; Database = TRF; User Id = postgres; Password = 1Qaaal123");
            //optionsBuilder.UseSqlServer(@"Data Source=.\SQLEXPRESS; Initial Catalog=TRF; User Instance=False; Integrated Security=True;");
            //optionsBuilder.UseSqlServer(@"Data Source=.\SQLEXPRESS; Integrated Security=True; MultipleActiveResultSets=True");
            //optionsBuilder.UseSqlite("Data Source=blog.db");
        }
        public DbSet<Ref> Refs { get; set; }
        //public DbSet<User> Users { get; set; }
    }
}
