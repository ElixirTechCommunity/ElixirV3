"use client";
import dynamic from "next/dynamic";
import BackDrop from "@/components/BackDrop/BackDrop";
import ClientWrapperLayout from "../Client/ClientWrapperLayout";
import FloatingNavbar from "@/components/ui/FloatingNavbar";
import { navItems } from "@/constants/constants";
import { usePathname } from "next/navigation";
import MinFooter from "@/components/MinFooter";

const Footer = dynamic(() => import("@/components/Footer"));

type ServerWrapperLayoutProps = {
  children: React.ReactNode;
};

export default function ServerWrapperLayout({
  children,
}: ServerWrapperLayoutProps) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <section className="flex flex-col min-h-screen items-center relative overflow-hidden bg-black-100">
      <nav className="h-20 w-full flex items-center justify-center">
        <FloatingNavbar navItems={navItems} />
      </nav>
      <ClientWrapperLayout>{children}</ClientWrapperLayout>
      {!isDashboard ? <Footer /> : <MinFooter />}
      <BackDrop />
    </section>
  );
}
