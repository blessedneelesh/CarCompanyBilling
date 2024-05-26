import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table } from "antd";

const CustomerWithOrders = () => {
  const [customerWithOrders, setCustomerWithOrders] = useState("");

  const { getCustomerOrdersWithOrders } = useData();

  const CustomerOrdersWithOrders = async () => {
    var lst = await getCustomerOrdersWithOrders();
    setCustomerWithOrders(lst);
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
      dataIndex: "customerFullName",
      key: "customerFullName",
    },
    {
      title: "Invoice Num",
      dataIndex: "orderNum",
      key: "orderNum",
    },
    {
      title: "Car Id",
      dataIndex: "carId",
      key: "carId",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Make",
      dataIndex: "make",
      key: "make",
    },
  ];
  useEffect(() => {
    CustomerOrdersWithOrders();
  }, []);
  return (
    <>
      {" "}
      {customerWithOrders && (
        <Table dataSource={customerWithOrders} columns={columns} />
      )}
    </>
  );
};

export default CustomerWithOrders;
