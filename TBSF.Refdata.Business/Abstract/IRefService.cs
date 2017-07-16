using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TBSF.Refdata.Entities.Concrete;

namespace TBSF.Refdata.Business.Abstract
{
    public interface IRefService
    {
        Task<List<Ref>> GetAll();
        Task<List<Ref>> GetByUser(int userID);
        void Add(Ref referee);
        void Update(Ref referee);
        void Delete(int refID);
    }
}
