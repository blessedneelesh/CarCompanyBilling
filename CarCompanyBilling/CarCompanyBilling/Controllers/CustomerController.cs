﻿using CarCompanyBilling.Models.Doa;
using CarCompanyBilling.Models.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarCompanyBilling.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerDoa _customerDoa;
        public CustomerController(CustomerDoa customerDoa)
        {
            _customerDoa = customerDoa;
        }

        [HttpGet]
        public ActionResult<List<CustomerDTO>> GetCustomer() //ActionResult gives flexibility to return NotFound()
        {
            var customer = _customerDoa.GetAllCustomer();
            return Ok(customer);
        }

        [HttpGet]
        public ActionResult<List<CustomerOrdersWithProductsDTO>> GetCustomerOrdersWithProducts() //ActionResult gives flexibility to return NotFound()
        {
            var customer = _customerDoa.GetAllCustomerOrdersWithProducts();
            return Ok(customer);
        }

        [HttpGet]
        public ActionResult<List<CustomerDTO>> GetCustomerWithoutOrders() //ActionResult gives flexibility to return NotFound()
        {
            var customer = _customerDoa.GetAllCustomerWithoutOrders();
            return Ok(customer);
        }

        [HttpGet]
        public ActionResult<List<TopCustomerDTO>> GetTopCustomers() //ActionResult gives flexibility to return NotFound()
        {
            var customer = _customerDoa.GetTopCustomer();
            return Ok(customer);
        }

        [HttpGet]
        public ActionResult<CustomerDTO> GetCustomerById([FromQuery] int custId)
        {
            var customer = _customerDoa.getCustomerById(custId);
            if (customer == null)
            {
                return NotFound();
            }
            
            return Ok(customer);
        }
    }
}
