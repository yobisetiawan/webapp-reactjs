import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SyncOutlined } from "@ant-design/icons";

import { GetCurrentUserService } from "./Service";

const Component = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    GetCurrentUserService.run(dispatch);
  }, []);
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="text-center d-flex justify-content-center align-items-center"
    >
      <SyncOutlined spin style={{ fontSize: "40px" }} />
    </div>
  );
};

export default Component;
