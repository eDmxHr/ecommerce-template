import React from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      {children}
    </div>
  );
}
