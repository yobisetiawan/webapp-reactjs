import React, { memo } from "react";
import { Card } from "antd";

import { DocumentTitle } from "../../hooks";

import s from "./style.module.scss";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Component = ({ children, title }: Props) => {
  DocumentTitle(title);
  
  return (
    <div className={s.AppContent}>
      <div className="p-3">
        <Card>
          <div className="inner-content">
            <h1>{title}</h1>
          </div>
          {children}
        </Card>
      </div>
    </div>
  );
};

export default memo(Component);
