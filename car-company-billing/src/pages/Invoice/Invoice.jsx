import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table, Button, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { PDFFile, Spinner } from "../../components";
const Invoice = () => {
  const [invoices, setInvoices] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { getSalesInvoice } = useData();

  const navigate = useNavigate();

  const getInvoice = async () => {
    setIsLoading(true);
    var lst = await getSalesInvoice();
    setInvoices(lst);
    setIsLoading(false);
    console.log(invoices, "invoices", lst);
  };

  const onClickCreate = () => {
    navigate("/invoice/create");
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
      title: "Car",
      render: (rec) => (
        <>
          <Link to={"/car/" + rec.car_id}>{rec.make}</Link>
        </>
      ),
      key: "car_id",
    },
    {
      title: "SalesPerson",
      // dataIndex: "salesperson_id",
      render: (rec) => (
        <>
          <Link to={"/employee/" + rec.salesperson_id}>
            {capitalizeWords(rec.salesperson_name)}
          </Link>
        </>
      ),
      key: "salesperson_id",
    },
    {
      title: "Customer",
      render: (rec) => (
        <>
          <Link to={"/customer/" + rec.customer_id}>
            {capitalizeWords(rec.customer_name)}
          </Link>
        </>
      ),
      key: "customer_id",
    },
    {
      title: "PDF",
      render: (rec) => (
        <>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            loading={isLoading}
            size="small"
          >
            <PDFDownloadLink
              document={
                <PDFFile invoice={rec} capitalizeWords={capitalizeWords} />
              }
              fileName="Invoice"
            >
              Download
            </PDFDownloadLink>
          </Button>
        </>
      ),
      key: "pdf",
    },
  ];
  useEffect(() => {
    getInvoice();
  }, []);
  return (
    <div style={{ margin: "5px" }}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontWeight: "600", fontSize: "18px" }}>
              Invoice Table
            </div>
            <div>
              <Button type="primary" onClick={() => onClickCreate()}>
                Create
              </Button>
            </div>
          </div>

          <div style={{ marginTop: "5px" }}>
            <Table
              rowClassName={(record, index) =>
                index % 2 === 0 ? "light" : "dark"
              }
              size="medium"
              dataSource={invoices}
              columns={columns}
              loading={isLoading}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Invoice;