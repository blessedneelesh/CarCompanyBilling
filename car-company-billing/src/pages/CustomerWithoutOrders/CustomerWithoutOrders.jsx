import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table } from "antd";

const CustomerWithoutOrders = () => {
  const [customerWithoutOrders, setCustomerWithoutOrders] = useState("");

  const { getCustomerWithoutOrders } = useData();

  const CustomerOrdersWithOrders = async () => {
    var lst = await getCustomerWithoutOrders();
    setCustomerWithoutOrders(lst);
    console.log(lst, "invoices", lst);
  };

  const columns = [
    {
      title: "Customer Id",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Customer Name",
      key: "customerFullName",
      render: (rec) => <>{rec.firstName + " " + rec.lastName}</>,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Zip",
      dataIndex: "zip",
      key: "zip",
    },
  ];
  
  useEffect(() => {
    CustomerOrdersWithOrders();
  }, []);

  return (
    <>
      {" "}
      {customerWithoutOrders && (
        <Table dataSource={customerWithoutOrders} columns={columns} />
      )}
    </>
  );
};

export default CustomerWithoutOrders;
