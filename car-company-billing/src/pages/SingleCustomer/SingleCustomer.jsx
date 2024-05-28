import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";

const SingleCustomer = () => {
  const [singleCustomer, setSingleCustomer] = useState("");

  const { getSingleCustomer } = useData();

  const { custId } = useParams();

  const navigate = useNavigate();

  const getEmployee = async () => {
    var lst = await getSingleCustomer(custId);
    setSingleCustomer(lst);
    console.log(singleCustomer, "invoices", lst);
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
        <h3>Customer Detail</h3>
        <div>
          Id: {singleCustomer.customerId} <br></br>
          <br></br>
          Name: {singleCustomer.firstName + " " + singleCustomer.lastName}{" "}
          <br></br>
          <br></br>
          Address: {singleCustomer.address} <br></br>
          <br></br>
          Phone Number: {singleCustomer.phoneNumber} <br></br>
          <br></br>
          Zip: {singleCustomer.zip} <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default SingleCustomer;
