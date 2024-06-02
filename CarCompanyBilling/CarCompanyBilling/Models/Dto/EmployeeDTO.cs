namespace CarCompanyBilling.Models.Dto
{
    public class EmployeeDTO
    {
        public decimal EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string MiddleInitial { get; set; }
        public string LastName { get; set; }
        public string? BirthDate { get; set; }
        public decimal SocSecNo { get; set; }
        public string HireDate { get; set; }
        public decimal? WorkDeptId { get; set; }
        public decimal? JobId { get; set; }
        public decimal? Salary { get; set; }
        public decimal? Bonus { get; set; }
        public decimal? Commission { get; set; }
    }
}
