import { useEffect, useState } from "react";

export default function useWindowSize() {
  const windowSize = window.innerWidth;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (windowSize >= 360 && windowSize <= 480) {
      setIsMobile(true);
    }
  }, [windowSize]);

  return { isMobile };
}
