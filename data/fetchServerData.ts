import { headers } from "next/headers";

// Separate function for device info to allow parallel fetching
export async function getDeviceInfo() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  return {
    isMobile:
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent.toLowerCase()
      ),
  };
}
