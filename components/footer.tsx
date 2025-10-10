import Image from "next/image";
import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Brands", href: "/brands" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
  ],
  info: [
    { name: "Shipping Info", href: "/shipping-info" },
    { name: "Returns & Refund", href: "/return" },
    { name: "Support", href: "/support" },
    { name: "FAQs", href: "/faqs" },
  ],
  social: [
    { name: "Facebook", href: "https://facebook.com", icon: "/facebook.svg" },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: "/instagram.svg",
    },
    { name: "Whatsapp", href: "https://whatsapp.com", icon: "/whatsapp.svg" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="px-4 pb-4 pt-8 mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left text-white pb-8">
          <div className="p-2 space-y-4">
            <h6 className="font-semibold text-xl">Ecommerce Platform</h6>
            <p className="font-normal text-base text-muted-foreground">
              All in one
            </p>
            <div className="flex items-center w-8 h-8 gap-4">
              {navigation.social.map((item) => (
                <Link
                  className="text-muted-foreground"
                  href={item.href}
                  key={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white rounded-full h-8 w-8 p-1 hover:scale-110 transition-transform">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={30}
                      height={30}
                      priority
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="p-2 space-y-4">
            <h6 className="font-semibold text-xl">Quick Links</h6>
            <div className="flex flex-col gap-2">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="p-2 space-y-4">
            <h6 className="font-semibold text-xl">Info</h6>
            <div className="flex flex-col gap-2">
              {navigation.info.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="p-2 space-y-4">
            <h6 className="font-semibold text-xl">Office</h6>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <p>M. Faaroshige</p>
              <p>Orchid Magu, Male'</p>
              <p>Maldives</p>
              <p>+960 3326969</p>
            </div>
          </div>
        </div>
        <div className="border-t border-muted-foreground/30 px-4 pb-4 pt-8 space-y-4">
          <p className="text-muted-foreground text-xs text-center md:text-left">
            Copyright © 2025 Ecommerce. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
