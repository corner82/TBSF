using System;
using System.Collections.Generic;
using System.Text;
using TBSF.Core.Entities;

namespace TBSF.Refdata.Entities.Concrete
{
    class Ref : IEntity
    {
        public int RefId { get; set; }
        public DateTime RefStartDate { get; set; }
        public int CityId  { get; set; }


    }
}
