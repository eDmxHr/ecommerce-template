import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { StoreIcon } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 h-full", className)} {...props}>
      <div className="grid p-0 md:grid-cols-2 h-full min-h-[600px]">
        <div className="bg-muted relative hidden md:block h-full min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1726138388546-30955e45aaec?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image"
            fill
            priority
            className="object-cover rounded-2xl"
          />
        </div>
        <form className="p-6 md:p-8 flex flex-col justify-center items-center">
          <div className="mb-6">
            <StoreIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="w-full max-w-xs space-y-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Welcome back</h1>
              <p className="text-muted-foreground text-balance">
                Login to your account to continue
              </p>
            </div>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </Field>
            </FieldGroup>
          </div>
        </form>
      </div>
    </div>
  );
}
