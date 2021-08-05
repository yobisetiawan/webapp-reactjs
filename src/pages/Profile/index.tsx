import React from "react";
import { useSelector } from "react-redux";

import { AppContent } from "../../components";
import { RootState } from "../../redux/store";

const Page = () => {
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <AppContent title="Profile">
      <div className="pt-3">
        <p>
          <span className="d-inline-block" style={{ minWidth: "50px" }}>
            Name
          </span>{" "}
          : {auth.user.name}
        </p>
        <p>
          <span className="d-inline-block" style={{ minWidth: "50px" }}>
            Email
          </span>{" "}
          : {auth.user.email}
        </p>
      </div>
    </AppContent>
  );
};

export default Page;
