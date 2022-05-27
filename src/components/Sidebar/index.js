import {
  DownOutlined,
  SmileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Dropdown, Space, Avatar } from "antd";
import React, { useState } from "react";
import { IconComponent } from "../../components";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "../../router/Router";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const userName = cookies.get("username");

const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem(
//     "Option 1",
//     "1",
//     <IconComponent name={"ant-design:dashboard-filled"} />
//   ),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("Files", "9", <FileOutlined />),
// ];

// const items = [
//   { label: "item 1", key: "item-1" }, // remember to pass the key prop
//   { label: "item 2", key: "item-2" }, // which is required
// ];

const Sidebar = ({ page }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("1");
  const onCollapse = () => {
    setCollapsed((prevcollapse) => !prevcollapse);
  };

  const onClick = (e) => {
    setCurrent(e.key);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getFirstLetter(string) {
    var matches = string.match(/\b(\w)/g);
    var acronym = matches.join("").toUpperCase();
    return acronym;
  }

  const clickTopbar = ({ key }) => {
    if (key === "1") return alert("profile");
    if (key === "2") return alert("logout");
  };

  const menu = (
    <Menu
      onClick={clickTopbar}
      items={[
        {
          key: "1",
          label: "Profile",
        },
        {
          key: "2",
          danger: true,
          label: "Log Out",
        },
      ]}
    />
  );

  return (
    <BrowserRouter>
      <Layout
        style={{
          minHeight: "100vh",
        }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div
            className="logo"
            style={{
              width: 100,
              height: 100,
              color: "white",
              margin: "auto",
            }}>
            Logo
          </div>

          <Menu
            onClick={onClick}
            theme="dark"
            defaultSelectedKeys={[current]}
            mode="inline">
            <Menu.Item key="1">
              <IconComponent name={"ant-design:dashboard-filled"} />
              <span>Home</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <IconComponent name={"bxs:report"} />
              <span>Report</span>
              <Link to="/report" />
            </Menu.Item>
          </Menu>

          {/* <Menu
            onClick={onClick}
            theme="dark"
            defaultSelectedKeys={[current]}
            mode="inline"
            items={items}
          /> */}
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}>
            <Space>
              <Button
                type="text"
                onClick={onCollapse}
                style={{
                  marginBottom: 16,
                  color: "white",
                }}>
                {collapsed ? (
                  <MenuUnfoldOutlined style={{ fontSize: 20 }} />
                ) : (
                  <MenuFoldOutlined style={{ fontSize: 20 }} />
                )}
              </Button>
            </Space>
            <Space style={{ float: "right", marginRight: "20px" }}>
              <Avatar>{getFirstLetter(userName)}</Avatar>
              <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    {capitalizeFirstLetter(userName)}
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Space>
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}>
            <Router />
          </Content>

          {/* {page} */}
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Sidebar;
