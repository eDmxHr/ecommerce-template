import React from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto my-10">{children}</div>;
}
