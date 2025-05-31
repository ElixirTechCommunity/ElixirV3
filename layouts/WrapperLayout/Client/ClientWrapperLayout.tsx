"use client";
import { createStore } from "@/store/store";
import { Provider } from "react-redux";

interface ClientWrapperLayoutProps {
  children: React.ReactNode;
}

export default function ClientWrapperLayout({
  children,
}: ClientWrapperLayoutProps) {
  const store = createStore({});
  return (
    <main className="flex justify-center w-full p-8 ">
      <Provider store={store}>{children}</Provider>
    </main>
  );
}
