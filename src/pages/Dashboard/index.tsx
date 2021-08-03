import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppContent } from "../../components";
import { RootState } from "../../redux/store";

import { DashboardService } from "./Service";

const Page = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <AppContent title="Dashboard">
      <div className="pt-3">
        <p>This is Content page</p>
        <h1>{counter.value}</h1>

        <button
          aria-label="Increment value"
          onClick={() => {
            DashboardService.increment(dispatch);
          }}
        >
          Increment
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => {
            DashboardService.decrement(dispatch);
          }}
        >
          Decrement
        </button>
      </div>
    </AppContent>
  );
};

export default Page;
