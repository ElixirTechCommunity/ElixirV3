"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileNavModal from "./MobileNavModal";
import { HiMenu } from "react-icons/hi";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface Props {
  navItems: NavItem[];
  className?: string;
}

const FloatingNavbar: React.FC<Props> = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
        setIsScrolled(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        }
        setIsScrolled(true);
      }
    }
  });
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");
  const isAdminDashboard = pathname === "/dashboard/admin";

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] lg:top-10 top-5 inset-x-0 mx-auto px-8 py-5 rounded-lg border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between",
            className
          )}
          style={{
            ...(isScrolled
              ? {
                  backdropFilter: "blur(16px) saturate(180%)",
                  backgroundColor: "rgba(17, 25, 40, 0.75)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.125)",
                }
              : {}),
            willChange: "transform, opacity",
          }}
        >
        {/* Elixir text on the left */}
          <motion.div
            animate={{
              scale: isScrolled ? 0.95 : 1,
              x: isScrolled ? 10 : 0,
            marginRight: isScrolled ? 48 : 224,
            }}
            transition={{
              duration: 0.22,
              ease: [0.420, 0.000, 0.580, 1.000],
            }}
            className={cn(
              "flex items-center gap-2 text-white font-bold text-xl transition-all duration-400",
            isScrolled ? "mr-12" : "mr-56"
            )}
            style={{ willChange: "transform, opacity, margin-right" }}
          >
            <Image
              src="/Elixir-logo.png"
              alt="Elixir Logo"
              width={28}
              height={28}
              className="rounded-md mr-2"
              style={{ objectFit: "contain" }}
            />
            <span>Elixir</span>
          </motion.div>
          {/* Hamburger icon for mobile */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              aria-label="Open navigation menu"
              onClick={() => setMobileNavOpen(true)}
              className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <HiMenu size={28} />
            </button>
          </div>
          {/* Navigation items in the center (hidden on mobile) */}
          <motion.div
            animate={{
              scale: isScrolled ? 0.98 : 1,
              opacity: isScrolled ? 0.9 : 1,
            }}
            transition={{
              duration: 0.22,
              ease: [0.420, 0.000, 0.580, 1.000],
            }}
            className="hidden md:flex items-center space-x-4"
            style={{ willChange: "transform, opacity" }}
          >
            {navItems.map((navItem: any, idx: number) => (
              <motion.div
                key={`link=${idx}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: "transform, opacity" }}
              >
                <Link
                  href={navItem.link}
                  className={cn(
                    "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="text-sm !cursor-pointer">
                    {navItem.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          {/* Login button on the right (hidden on mobile) */}
          <motion.button
            animate={{
              scale: isScrolled ? 0.95 : 1,
              x: isScrolled ? -10 : 0,
              marginLeft: isScrolled ? 48 : 224,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.22,
              ease: [0.420, 0.000, 0.580, 1.000],
            }}
            className={cn(
              "hidden md:flex border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-400",
              isScrolled ? "ml-12" : "ml-56"
            )}
            style={{ willChange: "transform, opacity, margin-left" }}
          >
            <div className="flex items-center gap-4">
              {!isDashboard ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Login
                  </Link>
                </>
              ) : isAdminDashboard ? (
                <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  Admin
                </div>
              ) : (
                <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  User
                </div>
              )}
            </div>

            <motion.span
              animate={{
                scale: isScrolled ? 0.9 : 1,
                opacity: isScrolled ? 0.8 : 1,
              }}
              transition={{
                duration: 0.22,
                ease: [0.420, 0.000, 0.580, 1.000],
              }}
              className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"
              style={{ willChange: "transform, opacity" }}
            />
          </motion.button>
        </motion.div>
      </AnimatePresence>
      {/* Mobile Navigation Modal */}
      <MobileNavModal
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navItems={navItems}
      />
    </>
  );
};
export default FloatingNavbar;
