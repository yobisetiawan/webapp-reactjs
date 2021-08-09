import React from "react";
import { Badge } from "antd";

export function getListData(value: any) {
  let listData;
  switch (value.date()) {
  case 8:
    listData = [
      { type: "warning", content: "This is warning event." },
      { type: "success", content: "This is usual event." },
    ];
    break;
  case 10:
    listData = [
      { type: "warning", content: "This is warning event." },
      { type: "success", content: "This is usual event." },
      { type: "error", content: "This is error event." },
    ];
    break;
  case 15:
    listData = [
      { type: "warning", content: "This is warning event" },
      { type: "success", content: "This is very long usual event。。...." },
      { type: "error", content: "This is error event 1." },
      { type: "error", content: "This is error event 2." },
      { type: "error", content: "This is error event 3." },
      { type: "error", content: "This is error event 4." },
    ];
    break;
  default:
  }
  return listData || [];
}

export function dateCellRender(value: any) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item: any) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

export function getMonthData(value: any) {
  if (value.month() === 8) {
    return 1394;
  }
}

export function monthCellRender(value: any) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}
