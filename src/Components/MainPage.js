import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DashboardOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Typography } from 'antd';
import DashboardData from './DashboardData';
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '1', <DashboardOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];
const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" >
        <img src="logo192.png" height="50px" width="50px" style={{padding:"15"}} />
        </div>
        <br></br>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >   <Title level={3}>Cold Rush UI</Title></Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 20,
              minHeight: "100%",
            }}
          >
            <DashboardData />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            fontWeight: "bold",
          }}
        >
          <a href="https://smartiam.in/" target="_blank"> © IAM 2022. All rights reserved Integreted Active Monitoring</a>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainPage;