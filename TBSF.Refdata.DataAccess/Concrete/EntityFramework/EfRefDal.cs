using System;
using System.Collections.Generic;
using System.Text;
using TBSF.Core.DataAccess.EntityFramework;
using TBSF.Refdata.DataAccess.Abstract;
using TBSF.Refdata.Entities.Concrete;

namespace TBSF.Refdata.DataAccess.Concrete.EntityFramework
{
    public class EfRefDal:EfEntityRepositoryBase<Ref, TRFContext>, IRefDal
    {
    }
}
