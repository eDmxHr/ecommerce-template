import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function Section({
  title,
  children,
  viewAllHref = "#",
}: {
  title: string;
  children: React.ReactNode;
  viewAllHref?: string;
}) {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-3xl  tracking-tight md:text-4xl">{title}</h2>
        <Link
          href={viewAllHref}
          className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          View all
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <ScrollArea className="w-full  whitespace-nowrap">
        <div className="flex w-max space-x-4">{children}</div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
