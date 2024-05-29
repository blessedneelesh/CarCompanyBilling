import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table, Button, Spin } from "antd";
import { Spinner } from "../../components";

const Employee = () => {
  const [employees, setEmployees] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { getEmployees } = useData();

  const getEmployee = async () => {
    setIsLoading(true);
    var lst = await getEmployees();
    setEmployees(lst);
    setIsLoading(false);
    console.log(employees, "invoices", lst);
  };

  const columns = [
    {
      title: "Employee Id",
      dataIndex: "employeeId",
      key: "employeeId",
    },
    {
      title: "Name",
      key: "name",
      render: (rec) => <>{rec.firstName + " " + rec.lastName}</>,
    },
    {
      title: "Birthday",
      dataIndex: "birthDate",
      key: "birthDate",
    },
    {
      title: "SIN",
      dataIndex: "socSecNo",
      key: "socSecNo",
    },
    {
      title: "Hire Date",
      dataIndex: "hireDate",
      key: "hireDate",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Bonus",
      dataIndex: "bonus",
      key: "bonus",
    },
    {
      title: "Commission",
      dataIndex: "commission",
      key: "commission",
    },
  ];
  useEffect(() => {
    getEmployee();
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <Spinner />
      ) : (
        <Table dataSource={employees} columns={columns} />
      )}
    </>
  );
};

export default Employee;
