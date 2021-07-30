import React, { useState } from "react";
import { Layout, Menu, Dropdown } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  UnlockOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import FooterPage from "../FooterPage";
import Avatar from "antd/lib/avatar/avatar";
import { useHistory } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}

const Component = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const history = useHistory();

  const menu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />}>Profile</Menu.Item>
      <Menu.Item icon={<UnlockOutlined />}>Change Password</Menu.Item>
      <Menu.Item
        icon={<PoweroffOutlined />}
        onClick={() => {
          history.push("/login");
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => {
          setCollapsed(!collapsed);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="d-flex justify-content-between">
            <div></div>
            <div className="pe-3">
              <Dropdown overlay={menu} trigger={["click"]}>
                <a href="#" className="d-block">
                  <Avatar size={32} icon={<UserOutlined />} />
                </a>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          <FooterPage />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Component;
