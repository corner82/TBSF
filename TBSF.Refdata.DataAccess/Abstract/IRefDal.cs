using System;
using System.Collections.Generic;
using System.Text;
using TBSF.Core.DataAccess;
using TBSF.Refdata.Entities.Concrete;

namespace TBSF.Refdata.DataAccess.Abstract
{
    public interface IRefDal:IEntityRepository<Ref>
    {
    }
}
