import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { Spinner } from "../../components";

const SingleEmployee = () => {
  const [singleEmployee, setSingleEmployee] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { getSingleEmployee } = useData();

  const { employeeId } = useParams();

  const navigate = useNavigate();

  const getEmployee = async () => {
    setIsLoading(true);
    var lst = await getSingleEmployee(employeeId);
    setSingleEmployee(lst);
    setIsLoading(false);
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
        {isLoading || !singleEmployee ? (
          <Spinner />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "7px",
              margin: "5px",
            }}
          >
            <div> EmployeeId: {singleEmployee.employeeId}</div>
            <div>
              Name:{" "}
              {singleEmployee.firstName[0].toUpperCase() +
                singleEmployee.firstName.slice(1) +
                " " +
                singleEmployee.lastName[0].toUpperCase() +
                singleEmployee.lastName.slice(1)}
            </div>

            <div> Social Insurance Number: {singleEmployee.socSecNo}</div>
            <div>Birth Date: {singleEmployee.birthDate} </div>
            <div>Salary: {singleEmployee.salary}</div>
            <div>bonus: {singleEmployee.bonus}</div>
            <div>Commission: {singleEmployee.commission}</div>
            <div> Hire Date: {singleEmployee.hireDate} </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleEmployee;
