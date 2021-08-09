import React, { memo } from "react";

import { IMAGE } from "../../configs";

const Component = () => {
  return (
    <div className="text-center mb-4 d-flex align-items-center yb-w-100 ">
      <img src={IMAGE.logo} alt="" style={{ height: "60px" }} />{" "}
      <h1 className="ps-2 m-0 yb-fz-1">Project</h1>
    </div>
  );
};

export default memo(Component);
