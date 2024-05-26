import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table } from "antd";

const CustomerTop = () => {
  const [topCustomer, setTopCustomer] = useState("");

  const { getTopCustomer } = useData();

  const getTopCustomers = async () => {
    var lst = await getTopCustomer();
    setTopCustomer(lst);
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
      dataIndex: "customerName",
      key: "customerName",
    },

    {
      title: "Count",
      dataIndex: "count",
      key: "count",
    },
  ];

  useEffect(() => {
    getTopCustomers();
  }, []);

  return (
    <> {topCustomer && <Table dataSource={topCustomer} columns={columns} />}</>
  );
};

export default CustomerTop;
