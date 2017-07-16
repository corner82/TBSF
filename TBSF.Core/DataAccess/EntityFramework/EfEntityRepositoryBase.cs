using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TBSF.Core.Entities;

namespace TBSF.Core.DataAccess.EntityFramework
{
    public class EfEntityRepositoryBase<TEntity, TContext> : IEntityRepository<TEntity> where TEntity : class, IEntity, new()
                                                                                        where TContext : DbContext, new()
    {
        public async void Add(TEntity entity)
        {
            using (var context = new TContext())
            {
                var addedContext = context.Entry(entity);
                addedContext.State = EntityState.Added;
                await context.SaveChangesAsync();
            }
        }

        public async void Delete(TEntity entity)
        {
            using (var context = new TContext())
            {
                var deletedContext = context.Entry(entity);
                deletedContext.State = EntityState.Deleted;
                await context.SaveChangesAsync();
            }
        }

        public async Task<TEntity>  Get(Expression<Func<TEntity, bool>> filter)
        {
            using (var context = new TContext())
            {
                return await context.Set<TEntity>().SingleOrDefaultAsync(filter);
            }
        }

        public async Task<List<TEntity>> GetList(Expression<Func<TEntity, bool>> filter = null)
        {
            using (var context = new TContext())
            {
                if(filter== null)
                {
                    return await context.Set<TEntity>().ToListAsync();
                } else
                {
                    return await context.Set<TEntity>().Where(filter).ToListAsync();
                }
            }
        }

        public async void Update(TEntity entity)
        {
            using (var context = new TContext())
            {
                var updatedContext = context.Entry(entity);
                updatedContext.State = EntityState.Modified;
                await context.SaveChangesAsync();
            }
        }
    }
}
