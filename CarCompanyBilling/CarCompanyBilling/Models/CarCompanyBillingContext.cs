﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CarCompanyBilling.Models
{
    public partial class CarCompanyBillingContext : DbContext
    {
        public CarCompanyBillingContext()
        {
        }

        public CarCompanyBillingContext(DbContextOptions<CarCompanyBillingContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Car> Cars { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Inventory> Inventories { get; set; }
        public virtual DbSet<Job> Jobs { get; set; }
        public virtual DbSet<Part> Parts { get; set; }
        public virtual DbSet<SalesInvoice> SalesInvoices { get; set; }
        public virtual DbSet<Vendor> Vendors { get; set; }
        public virtual DbSet<Warehouse> Warehouses { get; set; }
        public virtual DbSet<Zip> Zips { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Car>(entity =>
            {
                entity.ToTable("car");

                entity.Property(e => e.CarId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("car_id");

                entity.Property(e => e.CarForSale)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasColumnName("car_for_sale")
                    .HasDefaultValueSql("('N')");

                entity.Property(e => e.CarLength)
                    .HasColumnType("decimal(5, 0)")
                    .HasColumnName("car_length");

                entity.Property(e => e.Color)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("color");

                entity.Property(e => e.EngineCc)
                    .HasColumnType("decimal(5, 0)")
                    .HasColumnName("engine_cc");

                entity.Property(e => e.Height)
                    .HasColumnType("decimal(5, 0)")
                    .HasColumnName("height");

                entity.Property(e => e.Make)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("make");

                entity.Property(e => e.Model)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("model");

                entity.Property(e => e.Width)
                    .HasColumnType("decimal(5, 0)")
                    .HasColumnName("width");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("customer");

                entity.HasIndex(e => e.PhoneNumber, "customer_phone_number")
                    .IsUnique();

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("first_name");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("last_name");

                entity.Property(e => e.PhoneNumber)
                    .HasColumnType("decimal(10, 0)")
                    .HasColumnName("phone_number");

                entity.Property(e => e.Zip)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false)
                    .HasColumnName("zip");

                entity.HasOne(d => d.ZipNavigation)
                    .WithMany(p => p.Customers)
                    .HasForeignKey(d => d.Zip)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("customer_zip_fk");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("department");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("numeric(2, 0)")
                    .HasColumnName("department_id");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("department_name");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.ToTable("employee");

                entity.HasIndex(e => e.SocSecNo, "employee_soc_sec_no_uk")
                    .IsUnique();

                entity.Property(e => e.EmployeeId)
                    .HasColumnType("decimal(3, 0)")
                    .HasColumnName("employee_id");

                entity.Property(e => e.BirthDate)
                    .HasColumnType("date")
                    .HasColumnName("birth_date");

                entity.Property(e => e.Bonus)
                    .HasColumnType("numeric(7, 2)")
                    .HasColumnName("bonus");

                entity.Property(e => e.Commission)
                    .HasColumnType("numeric(7, 2)")
                    .HasColumnName("commission");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("first_name");

                entity.Property(e => e.HireDate)
                    .HasColumnType("date")
                    .HasColumnName("hire_date")
                    .HasDefaultValueSql("(CONVERT([date],getdate()))");

                entity.Property(e => e.JobId)
                    .HasColumnType("numeric(2, 0)")
                    .HasColumnName("job_id");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("last_name");

                entity.Property(e => e.MiddleInitial)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasColumnName("middle_initial");

                entity.Property(e => e.Salary)
                    .HasColumnType("numeric(6, 0)")
                    .HasColumnName("salary");

                entity.Property(e => e.SocSecNo)
                    .HasColumnType("decimal(9, 0)")
                    .HasColumnName("soc_sec_no");

                entity.Property(e => e.WorkDeptId)
                    .HasColumnType("numeric(2, 0)")
                    .HasColumnName("work_dept_id");

                entity.HasOne(d => d.Job)
                    .WithMany(p => p.Employees)
                    .HasForeignKey(d => d.JobId)
                    .HasConstraintName("employee_job_id_fk");

                entity.HasOne(d => d.WorkDept)
                    .WithMany(p => p.Employees)
                    .HasForeignKey(d => d.WorkDeptId)
                    .HasConstraintName("employee_work_dept_id_fk");
            });

            modelBuilder.Entity<Inventory>(entity =>
            {
                entity.HasKey(e => new { e.CarId, e.WarehouseId })
                    .HasName("inventory_pk");

                entity.ToTable("inventory");

                entity.Property(e => e.CarId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("car_id");

                entity.Property(e => e.WarehouseId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("warehouse_id");

                entity.Property(e => e.Availability)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasColumnName("availability")
                    .HasDefaultValueSql("('Y')");

                entity.HasOne(d => d.Car)
                    .WithMany(p => p.Inventories)
                    .HasForeignKey(d => d.CarId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("inventory_car_id_fk");

                entity.HasOne(d => d.Warehouse)
                    .WithMany(p => p.Inventories)
                    .HasForeignKey(d => d.WarehouseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("inventory_warehouse_id_fk");
            });

            modelBuilder.Entity<Job>(entity =>
            {
                entity.ToTable("job");

                entity.Property(e => e.JobId)
                    .HasColumnType("numeric(2, 0)")
                    .HasColumnName("job_id");

                entity.Property(e => e.JobTitle)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("job_title")
                    .IsFixedLength();

                entity.Property(e => e.MaxSalary)
                    .HasColumnType("numeric(6, 0)")
                    .HasColumnName("max_salary");

                entity.Property(e => e.MinSalary)
                    .HasColumnType("numeric(5, 0)")
                    .HasColumnName("min_salary");
            });

            modelBuilder.Entity<Part>(entity =>
            {
                entity.HasKey(e => new { e.CarId, e.VendorId })
                    .HasName("part_pk");

                entity.ToTable("part");

                entity.Property(e => e.CarId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("car_id");

                entity.Property(e => e.VendorId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("vendor_id");

                entity.Property(e => e.PartCost)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("part_cost");

                entity.Property(e => e.PartDescription)
                    .HasColumnType("text")
                    .HasColumnName("part_description");

                entity.HasOne(d => d.Car)
                    .WithMany(p => p.Parts)
                    .HasForeignKey(d => d.CarId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("part_car_id_fk");

                entity.HasOne(d => d.Vendor)
                    .WithMany(p => p.Parts)
                    .HasForeignKey(d => d.VendorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("part_vendor_id_fk");
            });

            modelBuilder.Entity<SalesInvoice>(entity =>
            {
                entity.HasKey(e => e.InvoiceId)
                    .HasName("PK__sales_in__F58DFD490D64C82E");

                entity.ToTable("sales_invoice");

                entity.HasIndex(e => e.VinNumber, "UQ__sales_in__37F2DBC704C7C561")
                    .IsUnique();

                entity.Property(e => e.InvoiceId).HasColumnName("invoice_id");

                entity.Property(e => e.CarId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("car_id");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date")
                    .HasDefaultValueSql("(CONVERT([date],getdate()))");

                entity.Property(e => e.OnRoadPrice)
                    .HasColumnType("decimal(8, 0)")
                    .HasColumnName("on_road_price");

                entity.Property(e => e.Price)
                    .HasColumnType("decimal(8, 0)")
                    .HasColumnName("price");

                entity.Property(e => e.SalespersonId)
                    .HasColumnType("decimal(3, 0)")
                    .HasColumnName("salesperson_id");

                entity.Property(e => e.VinNumber)
                    .IsRequired()
                    .HasMaxLength(17)
                    .IsUnicode(false)
                    .HasColumnName("vin_number");

                entity.HasOne(d => d.Car)
                    .WithMany(p => p.SalesInvoices)
                    .HasForeignKey(d => d.CarId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sales_invoice_car_id_fk");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.SalesInvoices)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sales_invoice_customer_id_fk");

                entity.HasOne(d => d.Salesperson)
                    .WithMany(p => p.SalesInvoices)
                    .HasForeignKey(d => d.SalespersonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sales_invoice_salesperson_id_fk");
            });

            modelBuilder.Entity<Vendor>(entity =>
            {
                entity.ToTable("vendor");

                entity.Property(e => e.VendorId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("vendor_id");

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("company_name");

                entity.Property(e => e.ContactPerson)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("contact_person");
            });

            modelBuilder.Entity<Warehouse>(entity =>
            {
                entity.ToTable("warehouse");

                entity.Property(e => e.WarehouseId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("warehouse_id");

                entity.Property(e => e.Location)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("location");

                entity.Property(e => e.WarehouseName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("warehouse_name");
            });

            modelBuilder.Entity<Zip>(entity =>
            {
                entity.HasKey(e => e.Zip1)
                    .HasName("PK__zip__30B369C4F80CECAD");

                entity.ToTable("zip");

                entity.Property(e => e.Zip1)
                    .HasMaxLength(6)
                    .IsUnicode(false)
                    .HasColumnName("zip");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("city");

                entity.Property(e => e.Province)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("province");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}