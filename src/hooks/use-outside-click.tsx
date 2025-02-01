/* eslint-disable @typescript-eslint/no-unused-vars */
type Handler = (event: MouseEvent | TouchEvent) => void;
import { useEffect } from "react";
const useOutsideClick = (ref: React.RefObject<HTMLElement>, handler: Handler) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOutsideClick;