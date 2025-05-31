import { headers } from "next/headers";
import { useDispatch, useSelector } from "react-redux";
import { setAppData } from "@/store/slices/appDataSlice";

export const getServerDeviceInfo = async () => {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";

  // Check if mobile device
  const isMobileDevice = () => {
    const ua = userAgent.toLowerCase();
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      ua
    );
  };

  return {
    isMobile: isMobileDevice(),
  };
};

// For client-side components that need reactivity
export const useIsMobile = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: any) => state.appData.isMobile);

  const updateDeviceInfo = () => {
    const info = getServerDeviceInfo();
    dispatch(setAppData(info));
  };

  return {
    isMobile,
    isDesktop: !isMobile,
    updateDeviceInfo,
  };
};
