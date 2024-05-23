namespace CarCompanyBilling.Models.Dto
{
    public class CustomerOrdersWithProductsDTO
    {
        public int CustomerId { get; set; }
        public string CustomerFullName { get; set; } // firstname + lastname
        public decimal CarId { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int OrderNum { get; set; } //invoice number
    }
}
