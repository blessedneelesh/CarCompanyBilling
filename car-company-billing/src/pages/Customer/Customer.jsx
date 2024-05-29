import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table, Button } from "antd";
import { Spinner } from "../../components";

const Customer = () => {
  const [customer, setCustomer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { getCustomer } = useData();

  const getCustomers = async () => {
    var lst = await getCustomer();
    setCustomer(lst);
    console.log(lst, "invoices", lst);
  };

  const columns = [
    {
      title: "Customer Id",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Name",
      key: "name",
      render: (rec) => <>{rec.firstName + " " + rec.lastName}</>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Zip",
      dataIndex: "zip",
      key: "zip",
    },
  ];
  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <Spinner />
      ) : (
        <Table dataSource={customer} columns={columns} />
      )}
    </>
  );
};

export default Customer;
