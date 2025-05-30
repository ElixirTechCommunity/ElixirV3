"use client";
import { Spotlight } from "@/components/ui/Spotlight";
import { Provider } from "react-redux";
import appStore from "@/store/store";

import { navItems } from "@/data";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"));
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar"));

function BackDrop() {
  return (
    <>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='h-[80vh] w-[50vw] top-10 left-full' fill='purple' />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='purple' />
      </div>
      <div
        className='w-full bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center'
      >
        <div
          className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
        />
      </div>
    </>
  );
}
export default function ClientAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={appStore}>
      <FloatingNav navItems={navItems} />
      <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
        <div className='max-w-7xl w-full mt-10'>
          {children}
          <Footer />
          <BackDrop />
        </div>
      </main>
    </Provider>
  );
}
