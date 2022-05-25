import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { IconComponent } from "../../components";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    "Option 1",
    "1",
    <IconComponent name={"ant-design:dashboard-filled"} />
  ),
  getItem("Option 2", "2", <DesktopOutlined />),
  // getItem("User", "sub1", <UserOutlined />, [
  //   getItem("Tom", "3"),
  //   getItem("Bill", "4"),
  //   getItem("Alex", "5"),
  // ]),
  // getItem("Team", "sub2", <TeamOutlined />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
  getItem("Files", "9", <FileOutlined />),
];

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed((prevcollapse) => !prevcollapse);
  };

  return (
    <>
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
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}>
            <Button
              type="primary"
              onClick={onCollapse}
              style={{
                marginBottom: 16,
              }}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </Header>

          <Content
            style={{
              margin: "0 16px",
            }}>
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}>
              <h1>Home Page</h1>
            </div>
          </Content>
          {/* <Footer
            style={{
              textAlign: "center",
            }}>
            PT.Markindo - Portal GA
          </Footer> */}
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
