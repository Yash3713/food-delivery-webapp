import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStaus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  return onlineStaus;
};
export default useOnlineStatus;
