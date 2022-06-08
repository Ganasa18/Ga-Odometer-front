import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Menu, Space, Grid } from "antd";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { IconComponent } from "../../components";
import Router from "../../router/Router";
import "./style.less";
import logoOpen from "../../assets/side-open.svg";
import logoClose from "../../assets/side-close.svg";
const cookies = new Cookies();
const userName = cookies.get("username");
const { useBreakpoint } = Grid;

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

const items = [
  {
    key: 1,
    label: "Dashboard",
    icon: <IconComponent name={"ant-design:dashboard-filled"} />,
    url: "/",
  },
  {
    key: 2,
    label: "Report",
    icon: <IconComponent name={"bxs:report"} />,
    url: "/report",
  },
  {
    key: 3,
    label: "Import Odoo",
    icon: <IconComponent name={"bxs:report"} />,
    url: "/import-odoo",
  },
  {
    key: 4,
    label: "Master Location",
    icon: <IconComponent name={"bxs:report"} />,
    url: "/location",
  },
  {
    key: 5,
    label: "Master Car",
    icon: <IconComponent name={"bxs:report"} />,
    url: "/cars",
  },
  {
    key: 6,
    label: "Master User",
    icon: <IconComponent name={"bxs:report"} />,
    url: "/users",
  },
  {
    key: 7,
    label: "Master Departement",
    icon: <IconComponent name={"bxs:report"} />,
    url: "/departement",
  },
  {
    key: 8,
    label: "Master Area",
    icon: <IconComponent name={"bxs:report"} />,
    url: "/area",
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(null);
  const screensCheck = useBreakpoint();

  // console.log(activeItem.key, window.location.pathname, current);

  const onCollapse = () => {
    setCollapsed((prevcollapse) => !prevcollapse);
  };

  const onClick = (e) => {
    const activeItem = items.find((item) => item.key === e.key);
    setCurrent(activeItem);
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
    if (key === "2") alert("logout");
    handleLogOut();
    return;
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
        <Sider
          breakpoint="lg"
          {...(screensCheck.xs && { collapsedWidth: "0" })}
          // collapsedWidth={screensCheck.xs ? "0" : null}
          className="sidebar-style"
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={220}>
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
                style={{
                  marginTop: "20px",
                  marginLeft: "20px",
                  width: "150px",
                  height: "60px",
                }}
              />
            )}
          </div>

          <Menu
            onClick={onClick}
            theme="light"
            defaultSelectedKeys={[current]}
            mode="inline">
            {items.map((item, index) => (
              <Menu.Item key={item.key}>
                {item.icon}
                <span>{item.label}</span>
                <Link to={item.url} />
              </Menu.Item>
            ))}
          </Menu>
          {/* 
          <Menu
            onClick={onClick}
            theme="light"
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
