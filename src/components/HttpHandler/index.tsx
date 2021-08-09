import React from "react";
import { notification } from "antd";

import { http } from "../../utils/http";

const Component = () => {
  http.interceptors.response.use(
    (ress) => {
      return ress;
    },
    (error: any) => {
      if (error && error.config && error.response) {
        if (error.response.status !== 422) {
          notification["error"]({
            message: "Error " + error.response.status,
            description: error.response?.data?.message || "",
          });
        }
      } else {
        notification["error"]({
          message: "Network Error ",
          description:
            "Something is temporarily wrong with your network connection. Please make sure you are connected to the internet and then reload your browser",
        });
      }
      return Promise.reject(error);
    }
  );

  return <></>;
};

export default Component;
