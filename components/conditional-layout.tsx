"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define routes that should NOT have navbar and footer
  const authRoutes = ["/login", "/register", "/forgot-password"];
  const isAuthRoute = authRoutes.includes(pathname);

  if (isAuthRoute) {
    // Auth pages: no navbar/footer
    return <>{children}</>;
  }

  // Regular pages: with navbar/footer
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
