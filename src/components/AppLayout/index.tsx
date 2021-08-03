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
  AlertOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import FooterPage from "../FooterPage";
import { IMAGE } from "../../configs";

import { LogoutService } from "./Service";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
interface Props {
  children: React.ReactNode;
}

const Component = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const onLogout = () => {
    history.push("/login");
  };

  const menu = (
    <Menu
      onClick={({ key }) => {
        if (key === "/logout") {
          LogoutService.run(dispatch, onLogout);
          return false;
        }
        history.push(key);
      }}
    >
      <Menu.Item key="/profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="/change-password" icon={<UnlockOutlined />}>
        Change Password
      </Menu.Item>
      <Menu.Item key="/logout" icon={<PoweroffOutlined />}>
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
        <div className="yb-logo d-flex justify-content-center align-items-center">
          <img src={IMAGE.logo} alt="" style={{ height: "40px" }} />
          {!collapsed && (
            <span
              className="yb-c-white ms-2"
              style={{ fontSize: "14px", fontWeight: "bold" }}
            >
              Project Starter
            </span>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={({ key }) => {
            history.push(key);
          }}
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="/organization" icon={<DesktopOutlined />}>
            Organization
          </Menu.Item>
          <Menu.Item key="/schedule" icon={<CalendarOutlined />}>
            Schedule
          </Menu.Item>
          <SubMenu key="nv-4" icon={<AlertOutlined />} title="Campaign">
            <Menu.Item key="/campaigns/phone">Phone Call</Menu.Item>
            <Menu.Item key="/campaigns/sms">SMS</Menu.Item>
          </SubMenu>
          <Menu.Item key="/users" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="/billing" icon={<WalletOutlined />}>
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
