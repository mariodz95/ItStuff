using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Interface_Sort_Pag_Flt
{
    public interface IPaging
    {
        int PageNumber { get; set; }
        int PageSize { get; set; }
        int TotalPages { get; set; }
    }
}
