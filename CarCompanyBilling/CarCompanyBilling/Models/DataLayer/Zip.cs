﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace CarCompanyBilling.Models.DataLayer
{
    public partial class Zip
    {
        public Zip()
        {
            Customers = new HashSet<Customer>();
        }

        public string Zip1 { get; set; }
        public string Province { get; set; }
        public string City { get; set; }

        public virtual ICollection<Customer> Customers { get; set; }
    }
}