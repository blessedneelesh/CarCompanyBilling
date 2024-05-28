import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";

const SingleEmployee = () => {
  const [singleEmployee, setSingleEmployee] = useState("");

  const { getSingleEmployee } = useData();

  const { employeeId } = useParams();

  const navigate = useNavigate();

  const getEmployee = async () => {
    var lst = await getSingleEmployee(employeeId);
    setSingleEmployee(lst);
    console.log(singleEmployee, "invoices", lst);
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <>
      <div style={{ margin: "10px" }}>
        <Button type="primary" onClick={() => navigate(-1)}>
          Back
        </Button>
        <h3>Employee Detail</h3>
        <div>
          EmployeeId: {singleEmployee.employeeId} <br></br>
          <br></br>
          Name: {singleEmployee.firstName + " " + singleEmployee.lastName}{" "}
          <br></br>
          <br></br>
          Social Security Number: {singleEmployee.socSecNo} <br></br>
          <br></br>
          Birth Date: {singleEmployee.birthDate} <br></br>
          <br></br>
          Salary: {singleEmployee.salary} <br></br>
          <br></br>
          bonus: {singleEmployee.bonus} <br></br>
          <br></br>
          Commission: {singleEmployee.commission} <br></br>
          <br></br>
          Hire Date: {singleEmployee.hireDate} <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default SingleEmployee;
