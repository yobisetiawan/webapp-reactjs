import { useRef, useEffect } from "react";

export const useIsFirstRenderHook = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};
