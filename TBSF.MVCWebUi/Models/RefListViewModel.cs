using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TBSF.Refdata.Entities.Concrete;

namespace TBSF.MVCWebUi.Models
{
    public class RefListViewModel
    {
        public List<Ref> Refs { get; internal set; }
    }
}
