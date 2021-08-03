import { useEffect } from "react";

export const DocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  });
};
