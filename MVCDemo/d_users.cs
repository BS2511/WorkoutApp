//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MVCDemo
{
    using System;
    using System.Collections.Generic;
    
    public partial class d_users
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public d_users()
        {
            this.f_user_data = new HashSet<f_user_data>();
        }
    
        public int d_user_id { get; set; }
        public string d_user_first_name_st { get; set; }
        public string d_user_last_name_st { get; set; }
        public string d_user_email_st { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<f_user_data> f_user_data { get; set; }
    }
}
