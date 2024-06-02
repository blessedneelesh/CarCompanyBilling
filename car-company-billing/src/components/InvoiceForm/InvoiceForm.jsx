import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Select,
} from "antd";
import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const InvoiceForm = () => {
  const [car, setCar] = useState("");
  const [employee, setEmployee] = useState("");
  const [customer, setCustomer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [date, setDate] = useState("");
  const [carId, setCarId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [vin, setVin] = useState("");
  const [price, setPrice] = useState("");
  const [onRoadPrice, setOnRoadPrice] = useState("");

  const onDateChange = (date, dateString) => {
    setDate(dateString);
  };

  const [form] = Form.useForm();

  const { getEmployees, getCustomer, getCars, insertSalesInvoice } =
    useData("");

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 48,
      },
      sm: {
        span: 12,
      },
    },
    wrapperCol: {
      xs: {
        span: 48,
      },
      sm: {
        span: 32,
      },
    },
  };

  const navigate = useNavigate();

  const getAllCar = async () => {
    let car = await getCars();
    setCar(car);
    console.log(car);
  };

  const getAllEmployee = async () => {
    let employee = await getEmployees();
    setEmployee(employee);
    console.log(employee);
  };

  const getAllCustomer = async () => {
    let customer = await getCustomer();
    setCustomer(customer);
    console.log(customer);
  };

  const createSalesInvoice = async (data) => {
    setIsLoading(true);

    let res = await insertSalesInvoice(data);

    setIsLoading(false);
    console.log(res);
    if (res.status == 201) {
      message.success("Successfully created!");
      form.resetFields();
    } else if (res.status == 400) {
      message.error("Duplicate VIN number!");
    } else {
      message.error("Cannot create invoice! Try Again");
    }
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return (
      moment().add(-1, "days") >= current
      // || moment().add(1, "month") <= current
    );
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    var obj = {
      date: date,
      price: price,
      vinNumber: vin,
      onRoadPrice: onRoadPrice,
      carId: carId,
      customerId: customerId,
      salespersonId: employeeId,
    };
    createSalesInvoice(obj);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    getAllCar();
    getAllEmployee();
    getAllCustomer();
  }, []);

  return (
    <>
      <div style={{ margin: "10px" }}>
        <Button type="primary" onClick={() => navigate(-1)}>
          Back
        </Button>

        <Form
          form={form}
          {...formItemLayout}
          style={{
            maxWidth: 1000,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker
              onChange={onDateChange}
              disabledDate={disabledDate}
              style={{
                width: 200,
              }}
            />
          </Form.Item>

          {car && (
            <Form.Item
              label="Car"
              name="car_id"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Select
                placeholder="Select Car"
                style={{
                  width: 200,
                }}
                onChange={(value) => setCarId(value)}
              >
                {car.map((c) => (
                  <Select.Option value={c.carId}>
                    {c.make + " " + c.model}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          )}

          {employee && (
            <Form.Item
              label="Sales Person"
              name="employee_id"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Select
                onChange={(value) => setEmployeeId(value)}
                placeholder="Select Salesperson"
                style={{
                  width: 200,
                }}
              >
                {" "}
                {employee.map((e) => (
                  <Select.Option value={e.employeeId}>
                    {e.firstName.charAt(0).toUpperCase() +
                      e.firstName.slice(1) +
                      " " +
                      e.lastName.charAt(0).toUpperCase() +
                      e.lastName.slice(1)}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          )}

          {customer && (
            <Form.Item
              label="Customer"
              name="customer_id"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Select
                onChange={(value) => setCustomerId(value)}
                placeholder="Select Customer"
                style={{
                  width: 200,
                }}
              >
                {" "}
                {customer.map((c) => (
                  <Select.Option value={c.customerId}>
                    {c.firstName.charAt(0).toUpperCase() +
                      c.firstName.slice(1) +
                      " " +
                      c.lastName.charAt(0).toUpperCase() +
                      c.lastName.slice(1)}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          )}
          <Form.Item
            label="VIN"
            name="vin"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
              {
                pattern: /^[A-Z0-9]{17}$/,
                message:
                  "Please enter 17 character (digits and Capital letters) VIN number.",
              },
            ]}
          >
            <Input
              style={{
                width: 200,
              }}
              value={vin}
              onChange={(e) => setVin(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber
              style={{
                width: 200,
              }}
              onChange={(value) => setPrice(value)}
            />
          </Form.Item>

          <Form.Item
            label="On Road Price"
            name="onRoadPrice"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  // from 'getFieldValue("fieldName")' we can get the current value of that field.
                  if (value < getFieldValue("price")) {
                    // value = currentValue of this field. with that we can do validations with other values in form fields
                    return Promise.reject(
                      "On Road Price must be greater than price"
                    ); // The validator should always return a promise on both success and error
                  } else if (value === getFieldValue("price")) {
                    return Promise.reject(
                      "On Road Price cannot be same as price"
                    );
                  } else {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
          >
            <InputNumber
              onChange={(value) => setOnRoadPrice(value)}
              style={{
                width: 200,
              }}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 20,
              span: 20,
            }}
          >
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default InvoiceForm;
