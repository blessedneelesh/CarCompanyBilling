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

  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  function capitalizeWords(sentence) {
    const words = sentence.split(" ");
    const capitalizedWords = words.map((word) => capitalizeFirstLetter(word));
    const reassembed = capitalizedWords.join(" ");
    return reassembed;
  }

  const columns = [
    {
      title: "Employee Id",
      dataIndex: "employeeId",
      key: "employeeId",
    },
    {
      title: "Name",
      key: "name",
      render: (rec) => (
        <>
          {rec.firstName.charAt(0).toUpperCase() +
            rec.firstName.slice(1) +
            " " +
            rec.lastName.charAt(0).toUpperCase() +
            rec.lastName.slice(1)}
        </>
      ),
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
      <div style={{ margin: "5px" }}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div style={{ fontWeight: "600", fontSize: "18px" }}>
              Employee Table
            </div>
            <div style={{ marginTop: "10px" }}>
              <Table
                dataSource={employees}
                columns={columns}
                loading={isLoading}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Employee;
