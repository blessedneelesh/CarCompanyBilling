﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace CarCompanyBilling.Models.DataLayer
{
    public partial class Car
    {
        public Car()
        {
            Inventories = new HashSet<Inventory>();
            Parts = new HashSet<Part>();
            SalesInvoices = new HashSet<SalesInvoice>();
        }

        public decimal CarId { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Color { get; set; }
        public decimal Height { get; set; }
        public string CarForSale { get; set; }
        public decimal CarLength { get; set; }
        public decimal Width { get; set; }
        public decimal EngineCc { get; set; }

        public virtual ICollection<Inventory> Inventories { get; set; }
        public virtual ICollection<Part> Parts { get; set; }
        public virtual ICollection<SalesInvoice> SalesInvoices { get; set; }
    }
}