using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TBSF.Refdata.Business.Abstract;
using TBSF.Refdata.DataAccess.Abstract;
using TBSF.Refdata.Entities.Concrete;

namespace TBSF.Refdata.Business.Concrete
{
    public class RefManager : IRefService
    {
        private IRefDal _refDal;

        public RefManager(IRefDal refDal)
        {
            _refDal = refDal;
        }

        public void Add(Ref referee)
        {
            _refDal.Add(referee);

        }

        public void Delete(int refID)
        {
            //_refDal.Delete()
        }

        public async Task<List<Ref>> GetAll()
        {
            return await _refDal.GetList();
        }

        public async Task<List<Ref>> GetByUser(int userID)
        {
            return await _refDal.GetList(r => r.RefUserID == userID);
        }

        public void Update(Ref referee)
        {
            throw new NotImplementedException();
        }
    }
}
