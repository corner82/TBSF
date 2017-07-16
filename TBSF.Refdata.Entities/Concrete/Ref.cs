using System;
using System.Collections.Generic;
using System.Text;
using TBSF.Core.Entities;

namespace TBSF.Refdata.Entities.Concrete
{
    public class Ref : IEntity
    {
        public int RefID { get; set; }
        public DateTime RefDate { get; set; }
        public int RefCityID  { get; set; }
        public int RefRegionID { get; set; }
        public int RefUserID { get; set; }


    }
}
