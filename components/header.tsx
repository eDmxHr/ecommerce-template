import React from "react";

type HeaderProps = {
  title: string;
  description?: string;
};

export default function Header({ title, description }: HeaderProps) {
  return (
    <div className="flex flex-col gap-y-2 mb-2">
      <h1 className="text-5xl font-medium">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
