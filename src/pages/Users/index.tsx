import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Modal from "antd/lib/modal/Modal";

import { AppContent } from "../../components";
import { RootState } from "../../redux/store";

import { UserListServices } from "./Service";
import { UserListColumns } from "./Helper";

const Page = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: RootState) => state.userList);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const selectedUser = (rec: any) => {
    UserListServices.setSelected(dispatch, rec);
    setIsModalVisible(true);
  };

  useEffect(() => {
    UserListServices.getList(dispatch);
  }, []);

  return (
    <AppContent title="Users">
      <div className="pt-3">
        <Table
          columns={UserListColumns(selectedUser)}
          dataSource={userList.list}
          loading={userList.loading}
        />

        <Modal
          title="User Details"
          visible={isModalVisible}
          footer={null}
          onCancel={() => {
            setIsModalVisible(false);
          }}
        >
          {userList.selected && (
            <div>
              <p>{userList.selected.name}</p>
              <p>{userList.selected.email}</p>
            </div>
          )}
        </Modal>
      </div>
    </AppContent>
  );
};

export default Page;
