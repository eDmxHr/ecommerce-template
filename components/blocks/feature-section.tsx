import { Truck, BadgeDollarSign, Lock, Phone } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description:
      "Dolor amet quis occaecat ullamco velit nostrud excepteur velit ea eiusmod duis excepteur occaecat.",
  },
  {
    icon: BadgeDollarSign,
    title: "Money-back",
    description:
      "Dolor amet quis occaecat ullamco velit nostrud excepteur velit ea eiusmod duis excepteur occaecat.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description:
      "Dolor amet quis occaecat ullamco velit nostrud excepteur velit ea eiusmod duis excepteur occaecat.",
  },
  {
    icon: Phone,
    title: "24/7 Supports",
    description:
      "Dolor amet quis occaecat ullamco velit nostrud excepteur velit ea eiusmod duis excepteur occaecat.",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 flex flex-col"
          >
            <Icon className="h-12 w-12 mb-6 stroke-[1.5]" />
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
