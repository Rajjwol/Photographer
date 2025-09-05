// resources/js/layouts/AppLayout.tsx
import { ReactNode } from "react";
import Header from "@/components/Header";

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
      <footer className="bg-gray-900 text-gray-400 text-center py-4">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
