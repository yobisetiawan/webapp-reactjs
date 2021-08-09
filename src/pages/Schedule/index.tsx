import { Calendar } from "antd";
import React from "react";

import { AppContent } from "../../components";

import { dateCellRender, monthCellRender } from "./Calendar";

const Page = () => {
  return (
    <AppContent title="Schedule">
      <div className="pt-3">
        <Calendar
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
        />
        ,
      </div>
    </AppContent>
  );
};

export default Page;
