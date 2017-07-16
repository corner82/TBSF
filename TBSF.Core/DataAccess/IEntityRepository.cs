using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TBSF.Core.Entities;

namespace TBSF.Core.DataAccess
{
    public interface IEntityRepository<T> where T:class, IEntity, new()
    {
        Task<T> Get(Expression<Func<T, bool>> filter=null);
        Task<List<T>> GetList(Expression<Func<T, bool>> filter=null);
        void  Add(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
