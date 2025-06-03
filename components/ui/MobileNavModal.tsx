import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HiX, HiArrowRight } from "react-icons/hi";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface MobileNavModalProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const MobileNavModal: React.FC<MobileNavModalProps> = ({
  open,
  onClose,
  navItems,
}) => {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");
  const isAdminDashboard = pathname === "/dashboard/admin";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-[8px]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            transition={{ duration: 0.18 }}
            onClick={onClose}
          />
          {/* Modal */}
          <motion.div
            className="fixed z-[10000] left-0 right-0 bottom-0 mx-auto w-full max-w-md rounded-t-2xl bg-[rgba(28,32,44,0.82)] border border-white/10 backdrop-blur-xl shadow-xl px-5 pt-5 pb-7 flex flex-col items-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            style={{
              boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.10)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {/* Logo/brand and close button row */}
            <div className="w-full flex items-center justify-between mb-4 mt-1 select-none">
              <div className="flex items-center gap-2">
                <Image
                  src="/Elixir-logo.png"
                  alt="Elixir Logo"
                  width={28}
                  height={28}
                  className="rounded-md"
                  style={{ objectFit: "contain" }}
                />
                <span className="text-white font-semibold text-lg tracking-tight">
                  Elixir
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 z-10 transition"
                aria-label="Close navigation menu"
              >
                <HiX size={22} />
              </button>
            </div>
            {/* Nav items */}
            <nav className="w-full flex flex-col divide-y divide-white/8 mb-7 bg-white/0 rounded-xl overflow-hidden shadow-none">
              {navItems.map((item, idx) => (
                <Link
                  key={item.link + idx}
                  href={item.link}
                  className={cn(
                    "flex items-center gap-3 text-base font-medium text-white/90 hover:text-white transition-colors px-4 py-3 w-full bg-transparent hover:bg-white/5 active:scale-[0.99] focus:outline-none focus:ring-1 focus:ring-blue-400",
                    idx === 0 ? "rounded-t-xl" : "",
                    idx === navItems.length - 1 ? "rounded-b-xl" : ""
                  )}
                  onClick={onClose}
                  style={{
                    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  }}
                >
                  {item.icon && (
                    <span className="text-lg opacity-80">{item.icon}</span>
                  )}
                  <span className="flex-1 text-left">{item.name}</span>
                </Link>
              ))}
            </nav>
            {/* Login/Dashboard button */}
            <div className="w-full flex flex-col gap-2">
              {!isDashboard ? (
                <Link
                  href="/dashboard"
                  className="relative w-full py-2.5 rounded-full border border-white/40 bg-transparent text-white/90 text-md flex items-center justify-center transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-blue-300 overflow-hidden"
                  onClick={onClose}
                  style={{
                    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  }}
                >
                  Login
                  <HiArrowRight size={15} className="ml-1" />
                  {/* Blue highlight at the bottom center */}
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-80" />
                </Link>
              ) : isAdminDashboard ? (
                <div className="w-full py-2.5 rounded-full border border-white/15 bg-transparent text-white/90 font-medium text-xl flex items-center justify-center text-center select-none cursor-default relative overflow-hidden">
                  Admin
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-80" />
                </div>
              ) : (
                <div className="w-full py-2.5 rounded-full border border-white/15 bg-transparent text-white/90 font-medium text-xl flex items-center justify-center text-center select-none cursor-default relative overflow-hidden">
                  User
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-80" />
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNavModal;
