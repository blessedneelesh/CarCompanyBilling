using CarCompanyBilling.Models.DataLayer;
using CarCompanyBilling.Models.Dto;

namespace CarCompanyBilling.Models.Doa
{
    public class EmployeeDoa
    {
        private readonly CarCompanyBillingContext _billingContext;
        public EmployeeDoa(CarCompanyBillingContext billingContext) {
            _billingContext = billingContext;
        }
        public List<EmployeeDTO> GetAllEmployee()
        {
            var EmployeeLst = _billingContext.Employees.Select(n => new EmployeeDTO
            {
                EmployeeId = n.EmployeeId,
                FirstName = n.FirstName,
                LastName = n.LastName,
                MiddleInitial=n.MiddleInitial,
                BirthDate =n.BirthDate,
                SocSecNo =n.SocSecNo,
                HireDate =n.HireDate,
                WorkDeptId =n.WorkDeptId,
                JobId =n.JobId,
                Salary =n.Salary,
                Bonus =n.Bonus,
                Commission =n.Commission

            }).ToList();

            return EmployeeLst;
        }
    }
}
