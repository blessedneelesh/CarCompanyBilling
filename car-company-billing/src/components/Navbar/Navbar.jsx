import { Menu, Button } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [current, setCurrent] = useState("sub1");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={[current]}
        defaultOpenKeys={["sub5"]}
        mode="inline"
      >
        <Menu.Item key="sub1">
          {" "}
          <Link to="/invoice">Invoices</Link>
        </Menu.Item>
        <Menu.Item key="sub2">
          {" "}
          <Link to="/employee">Employees</Link>
        </Menu.Item>
        <Menu.Item key="sub3">
          {" "}
          <Link to="/customer">Customers</Link>
        </Menu.Item>
        <Menu.Item key="sub4">
          {" "}
          <Link to="/cars">Cars</Link>
        </Menu.Item>

        <Menu.SubMenu key="sub5" label="LINQ">
          <Menu.Item key="1">
            {" "}
            <Link to="/car-not-sold">Car NOT Sold</Link>
          </Menu.Item>
          <Menu.Item key="2">
            {" "}
            <Link to="/car-never-sold">Car NEVER Sold</Link>
          </Menu.Item>
          <Menu.Item key="3">
            {" "}
            <Link to="/car-inventory">Car Inventory</Link>
          </Menu.Item>
          <Menu.Item key="4">
            {" "}
            <Link to="/customer-orders">Customer Orders</Link>
          </Menu.Item>
          <Menu.Item key="5">
            {" "}
            <Link to="/customer-without-order">Customer WITHOUT Orders</Link>
          </Menu.Item>
          <Menu.Item key="6">
            {" "}
            <Link to="/top-customer">Top Customer</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  );
};
export default Navbar;
