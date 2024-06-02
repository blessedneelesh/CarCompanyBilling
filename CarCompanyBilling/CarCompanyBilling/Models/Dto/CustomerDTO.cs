namespace CarCompanyBilling.Models.Dto
{
    public class CustomerDTO
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public decimal PhoneNumber { get; set; }
        public string Address { get; set; }
        public string Zip { get; set; }
    }
}
