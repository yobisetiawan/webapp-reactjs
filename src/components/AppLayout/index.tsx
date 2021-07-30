import React, { useState } from "react";
import { Layout, Menu, Dropdown } from "antd";
import {
  DesktopOutlined,
  HomeOutlined,
  UserOutlined,
  UnlockOutlined,
  PoweroffOutlined,
  CalendarOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { useHistory } from "react-router-dom";

import FooterPage from "../FooterPage";
import { IMAGE } from "../../configs";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
interface Props {
  children: React.ReactNode;
}

const Component = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const history = useHistory();

  const menu = (
    <Menu>
      <Menu.Item
        key="m-1"
        icon={<UserOutlined />}
        onClick={() => {
          history.push("/profile");
        }}
      >
        Profile
      </Menu.Item>
      <Menu.Item
        key="m-2"
        icon={<UnlockOutlined />}
        onClick={() => {
          history.push("/change-password");
        }}
      >
        Change Password
      </Menu.Item>
      <Menu.Item
        key="m-3"
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
        <div className="logo d-flex justify-content-center align-items-center">
          <img src={IMAGE.logo} alt="" style={{ height: "40px" }} />
          {!collapsed && (
            <span
              className="c-white ms-2"
              style={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Ant Design
            </span>
          )}
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="nv-1" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="nv-2" icon={<DesktopOutlined />}>
            Organization
          </Menu.Item>
          <Menu.Item key="nv-3" icon={<CalendarOutlined />}>
            Schedule
          </Menu.Item>
          <SubMenu key="nv-4" icon={<UserOutlined />} title="Campaign">
            <Menu.Item key="nv-4.1">Phone Call</Menu.Item>
            <Menu.Item key="nv-4.2">SMS</Menu.Item>
            <Menu.Item key="nv-4.3">Alex</Menu.Item>
          </SubMenu>
          <Menu.Item
            key="nv-5"
            icon={<UserOutlined />}
            onClick={() => {
              history.push("/users");
            }}
          >
            Users
          </Menu.Item>
          <Menu.Item key="nv-6" icon={<WalletOutlined />}>
            Billing
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
