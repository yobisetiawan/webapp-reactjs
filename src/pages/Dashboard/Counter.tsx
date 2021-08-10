import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Space } from "antd";

import { RootState } from "../../redux/store";

import { DashboardService } from "./Service";

const Component = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counter.value}</h1>
      <Space>
        <Button
          onClick={() => {
            DashboardService.increment(dispatch);
          }}
        >
          Increment
        </Button>
        <Button
          onClick={() => {
            DashboardService.decrement(dispatch);
          }}
        >
          Decrement
        </Button>
      </Space>
    </div>
  );
};

export default Component;
