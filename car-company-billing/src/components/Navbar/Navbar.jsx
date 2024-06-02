import { Menu, Button } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import "./Navbar.css";

const Navbar = () => {
  const [current, setCurrent] = useState("sub1");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 2,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      <Menu
        onClick={onClick}
        defaultSelectedKeys={[current]}
        defaultOpenKeys={["sub5"]}
        mode="inline"
        inlineCollapsed={collapsed}
        theme="dark"
        style={{
          height: "95vh",
        }}
      >
        <Menu.Item key="sub1" label="Invoices" icon={<AppstoreOutlined />}>
          {" "}
          <Link to="/invoice">Invoices</Link>
        </Menu.Item>
        <Menu.Item key="sub2" label="Employees" icon={<ContainerOutlined />}>
          {" "}
          <Link to="/employee">Employees</Link>
        </Menu.Item>
        <Menu.Item key="sub3" label="Customers" icon={<DesktopOutlined />}>
          {" "}
          <Link to="/customer">Customers</Link>
        </Menu.Item>
        <Menu.Item key="sub4" label="Cars" icon={<PieChartOutlined />}>
          {" "}
          <Link to="/cars">Cars</Link>
        </Menu.Item>

        <Menu.SubMenu key="sub5" title="More LINQ " icon={<AppstoreOutlined />}>
          <Menu.Item key="1">
            {" "}
            <Link to="/car-not-sold">Car NOT Sold</Link>
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
