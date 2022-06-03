import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Menu, Space } from "antd";
import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { IconComponent } from "../../components";
import Router from "../../router/Router";
import "./style.less";
import logoOpen from "../../assets/side-open.svg";
import logoClose from "../../assets/side-close.svg";
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

const Sidebar = () => {
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
    if (key === "2") return;
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

  const handleLogOut = () => {
    cookies.remove("token", { path: "/" });
    cookies.remove("username", { path: "/" });

    setTimeout(() => {
      window.location.assign("/");
    }, 1500);
  };

  return (
    <BrowserRouter>
      <Layout
        style={{
          minHeight: "100vh",
        }}>
        <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            {collapsed ? (
              <img
                className="logo-img"
                src={logoClose}
                alt="Logo"
                style={{
                  width: 40,
                  height: 40,
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              />
            ) : (
              <img
                className="logo-img"
                src={logoOpen}
                alt="Logo"
                style={{ marginTop: "20px" }}
              />
            )}
          </div>

          <Menu
            onClick={onClick}
            theme="light"
            defaultSelectedKeys={[current]}
            mode="inline">
            <Menu.Item key="1">
              <IconComponent name={"ant-design:dashboard-filled"} />
              <span>Dashboard</span>
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
                  <Space className="labelName">
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
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Sidebar;
