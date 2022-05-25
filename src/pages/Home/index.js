import { Breadcrumb, Layout } from "antd";
import React from "react";
import { Sidebar } from "../../components";
const { Content } = Layout;

const Home = () => {
  return (
    <>
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
    </>
  );
};

// const Home = () => {
//   return <Sidebar page={<MainContent />} />;
// };

export default Home;
