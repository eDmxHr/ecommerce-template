"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Store, StoreIcon } from "lucide-react";
import { Spin } from "hamburger-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="w-full mx-auto container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <Spin toggled={isOpen} toggle={setOpen} />
          </div>
          <Store
            className="w-8 h-8 text-primary hidden md:block"
            strokeWidth={1.5}
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-primary hover:text-muted-foreground font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/brands"
            className="text-primary hover:text-muted-foreground font-medium transition-colors"
          >
            Brands
          </Link>
          <Link
            href="/products"
            className="text-primary hover:text-muted-foreground font-medium transition-colors"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="text-primary hover:text-muted-foreground font-medium transition-colors"
          >
            Contact us
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            asChild
            className="text-primary hover:text-muted-foreground hover:bg-muted-foreground/10 px-6"
          >
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild className="text-white hover:bg-gray-900 px-6">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Sheet onOpenChange={setOpen} open={isOpen}>
        <SheetContent className="w-[300px] sm:w-[400px]" side="left">
          <SheetHeader>
            <SheetTitle className="text-left text-3xl font-bold text-black mb-8">
              <StoreIcon className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col space-y-8 mt-4">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 pl-6">
              <Link
                href="/"
                className="text-2xl font-normal text-black hover:text-gray-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/brands"
                className="text-2xl font-normal text-black hover:text-gray-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                Brands
              </Link>
              <Link
                href="/products"
                className="text-2xl font-normal text-black hover:text-gray-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="text-2xl font-normal text-black hover:text-gray-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                Contact us
              </Link>
            </div>

            {/* Auth Button */}
            <div className="p-6">
              <Button
                asChild
                className="w-full h-14 text-lg font-medium bg-black text-white hover:bg-gray-800 rounded-lg"
              >
                <Link href="/login" onClick={() => setOpen(false)}>
                  Log In
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
