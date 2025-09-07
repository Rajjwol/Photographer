// resources/js/layouts/AppLayout.tsx
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Shared Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">{children}</main>

      {/* Optional Footer */}
      <Footer/>
    </div>
  );
}
