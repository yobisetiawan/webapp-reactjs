import React from "react";
import { Tag, Space, Avatar } from "antd";

export const UserListColumns = (selectedUser: (rec: any) => void) => {
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: function Name(text: any, rec: any) {
        return (
          <a>
            {rec?.avatar?.url ? (
              <Avatar
                size={32}
                src={
                  rec?.avatar?.url + "?updated_at=" + rec?.avatar?.updated_at
                }
                className="me-2"
              />
            ) : (
              <Avatar size={32} className="me-2">
                {text[0].toUpperCase()}
              </Avatar>
            )}
            {text}
          </a>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Roles",
      key: "roles",
      dataIndex: "roles",
      render: function Roles(roles: any) {
        return (
          <>
            {roles.map((tag: any) => {
              return <Tag key={tag.id}>{tag.name.toUpperCase()}</Tag>;
            })}
          </>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: function Action(_: any, record: any) {
        return (
          <Space size="middle">
            <a
              onClick={() => {
                selectedUser(record);
              }}
            >
              View
            </a>
          </Space>
        );
      },
    },
  ];
};
