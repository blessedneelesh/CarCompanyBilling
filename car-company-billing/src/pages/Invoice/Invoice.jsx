import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
const Invoice = () => {
  const [invoices, setInvoices] = useState("");

  const { getSalesInvoice } = useData();

  const getInvoice = async () => {
    var lst = await getSalesInvoice();
    setInvoices(lst);
    console.log(invoices, "invoices", lst);
  };

  const columns = [
    {
      title: "Invoice Id",
      dataIndex: "invoice_id",
      key: "invoice_id",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Road price",
      dataIndex: "on_road_price",
      key: "on_road_price",
    },
    {
      title: "VIN",
      dataIndex: "vin_number",
      key: "vin_number",
    },
    {
      title: "Car Id",
      render: (rec) => (
        <>
          <Link to={"/car/" + rec.car_id}>{rec.car_id}</Link>
        </>
      ),
      key: "car_id",
    },
    {
      title: "SalesPerson Id",
      // dataIndex: "salesperson_id",
      render: (rec) => (
        <>
          <Link to={"/employee/" + rec.salesperson_id}>
            {rec.salesperson_id}
          </Link>
        </>
      ),
      key: "salesperson_id",
    },
    {
      title: "Customer Id",
      render: (rec) => (
        <>
          <Link to={"/customer/" + rec.customer_id}>{rec.customer_id}</Link>
        </>
      ),
      key: "customer_id",
    },
  ];

  useEffect(() => {
    getInvoice();
  }, []);
  return (
    <div>
      <Button type="primary">Create</Button>
      {invoices && <Table dataSource={invoices} columns={columns} />}
    </div>
  );
};

export default Invoice;
