import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);
    return () => removeEventListener("click", handleClick, listenCapturing);
  }, [listenCapturing, handler]);
  return { ref };
}

export default useOutsideClick;
