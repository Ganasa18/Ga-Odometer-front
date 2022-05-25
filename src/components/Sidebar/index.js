import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import React, { useState } from "react";
import { IconComponent } from "../../components";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "../../router/Router";
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
              <IconComponent name={"ant-design:dashboard-filled"} />
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
