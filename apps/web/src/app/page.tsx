"use client";

import { CheckoutLink } from "@convex-dev/polar/react";
import { api } from "@hackyard/backend/src/_generated/api";
import { Button } from "@hackyard/ui/components/button";
import { Authenticated } from "convex/react";

import { ThemToggle } from "@/components";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      {/* <Button variant="primary">Primary</Button>
      <Button variant="primary-ghost">Primary Ghost</Button>
      <Button variant="primary-outline">Primary Outline</Button>
      <Button variant="primary-link">Primary Link</Button> */}

      {/* <Button variant="secondary">Secondary</Button>
      <Button variant="secondary-ghost">Secondary Ghost</Button>
      <Button variant="secondary-outline">Secondary Outline</Button>
      <Button variant="secondary-link">Secondary Link</Button> */}

      {/* <Button variant="destructive">Destructive</Button>
      <Button variant="destructive-ghost">Destructive Ghost</Button>
      <Button variant="destructive-outline">Destructive Outline</Button>
      <Button variant="destructive-link">Destructive Link</Button> */}

      {/* <Button variant="warning">Warning</Button>
      <Button variant="warning-ghost">Warning Ghost</Button>
      <Button variant="warning-outline">Warning Outline</Button>
      <Button variant="warning-link">Warning Link</Button>

      <Button variant="success">Success</Button>
      <Button variant="success-ghost">Success Ghost</Button>
      <Button variant="success-outline">Success Outline</Button>
      <Button variant="success-link">Success Link</Button>
      <div className="bg-muted p-4 font-medium text-muted-foreground shadow-2xl">
        This is Muted text foreground on Muted Background
      </div>
      <HackYardLogo className="size-8" variant="primary" />
      <HackYardLogo className="size-8" variant="white" />
      <HackYardLogo className="size-8" variant="black" /> */}
      <Authenticated>
        <Button asChild={true}>
          <CheckoutLink
            embed={false}
            polarApi={api.polar}
            productIds={["b6cbb1ce-ce8d-402b-94c5-e5c9f1dfa776"]}
          >
            Upgrade to Premium
          </CheckoutLink>
        </Button>
      </Authenticated>

      <ThemToggle />
    </div>
  );
};

export default Home;
