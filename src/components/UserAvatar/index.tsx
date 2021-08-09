import React from "react";
import { UserOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { getDefValue } from "../../utils/helper";

interface Props {
  size: number;
}

const Component = ({ size }: Props) => {
  const auth = useSelector((state: RootState) => state.auth);
  const avatar = getDefValue(auth.user?.avatar, "url");

  if (avatar !== "") {
    return (
      <Avatar
        size={size}
        src={
          avatar + "?updated_at=" + getDefValue(auth.user?.avatar, "updated_at")
        }
      />
    );
  }
  return <Avatar size={size} icon={<UserOutlined />} />;
};

export default Component;
