import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table, Button } from "antd";

const Employee = () => {
  const [employees, setEmployees] = useState("");

  const { getEmployees } = useData();

  const getEmployee = async () => {
    var lst = await getEmployees();
    setEmployees(lst);
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
    <> {employees && <Table dataSource={employees} columns={columns} />}</>
  );
};

export default Employee;
