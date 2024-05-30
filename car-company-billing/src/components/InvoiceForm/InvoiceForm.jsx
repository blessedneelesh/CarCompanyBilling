import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const InvoiceForm = () => {
  const [car, setCar] = useState("");
  const [employee, setEmployee] = useState("");
  const [customer, setCustomer] = useState("");

  const { getEmployees, getCustomer, getCars } = useData("");

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

  const disabledDate = (current) => {
    // Can not select days before today and today
    return (
      moment().add(-1, "days") >= current
      // || moment().add(1, "month") <= current
    );
  };

  const onFinish = (values) => {
    console.log("Success:", values);
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
                defaultValue="Select"
                style={{
                  width: 200,
                }}
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
                defaultValue="Select"
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
                defaultValue="Select"
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
                pattern: /^[A-Z0-9]{13}$/,
                message:
                  "Please enter 13 character (digits and Capital letters) VIN number.",
              },
            ]}
          >
            <Input
              style={{
                width: 200,
              }}
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default InvoiceForm;
