﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace CarCompanyBilling.Models
{
    public partial class Inventory
    {
        public decimal CarId { get; set; }
        public decimal WarehouseId { get; set; }
        public string Availability { get; set; }

        public virtual Car Car { get; set; }
        public virtual Warehouse Warehouse { get; set; }
    }
}