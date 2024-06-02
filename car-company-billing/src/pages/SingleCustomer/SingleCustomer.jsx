import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { Spinner } from "../../components";

const SingleCustomer = () => {
  const [singleCustomer, setSingleCustomer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { getSingleCustomer } = useData();

  const { custId } = useParams();

  const navigate = useNavigate();

  const getEmployee = async () => {
    setIsLoading(true);
    var lst = await getSingleCustomer(custId);
    setSingleCustomer(lst);
    setIsLoading(false);
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
        {isLoading || !singleCustomer ? (
          <Spinner />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "7px",
              margin: "5px",
            }}
          >
            <div> Id: {singleCustomer.customerId} </div>
            <div>
              Name: {singleCustomer.firstName + " " + singleCustomer.lastName}{" "}
            </div>
            <div>Address: {singleCustomer.address} </div>
            <div>Phone Number: {singleCustomer.phoneNumber} </div>
            <div> Zip: {singleCustomer.zip} </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleCustomer;
