import React from "react";
import { Table, Tag, Space } from "antd";

import { AppContent } from "../../components";

const Page = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: function Name(text: any) {
        return <a>{text}</a>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: function Tags(tags: any) {
        return (
          <>
            {tags.map((tag: any) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: function Action(text: any, record: any) {
        return (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <AppContent title="Users">
      <div className="pt-3">
        <Table columns={columns} dataSource={data} />
      </div>
    </AppContent>
  );
};

export default Page;