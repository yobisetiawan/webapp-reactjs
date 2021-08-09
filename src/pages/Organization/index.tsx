import React from "react";
import { Table } from "antd";

import { AppContent } from "../../components";

const Page = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
  ];

  return (
    <AppContent title="Organization">
      <div className="pt-3">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </AppContent>
  );
};

export default Page;
