import Link from "next/link";

import { Button } from "@hackyard/ui/components/button";
import { HackYardLogo } from "@hackyard/ui/icons";
import { CirclesFourIcon } from "@phosphor-icons/react/dist/ssr";

import { ThemToggle } from "./theme-toggle";

const items = [
  { href: "/", name: "Home" },
  { href: "/", name: "Products" },
  { href: "/", name: "Pricing" },
  { href: "/", name: "About" },
] as const;

export const HomeNavbar = () => {
  return (
    <nav className="flex h-[7dvh] w-full">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-3">
        <div className="flex flex-row items-center gap-2">
          <HackYardLogo className="size-8" variant="primary" />
          <div className="font-bold text-xl">HackYard</div>
        </div>
        <div className="hidden flex-row items-center gap-1 md:flex">
          {items.map((item) => (
            <Link
              className="rounded-full px-3 py-1 font-semibold text-gray-600 transition-all duration-300 ease-in-out hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              href={item.href}
              key={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden flex-row items-center gap-4 sm:flex">
          <Button asChild={true} className="h-9 text-sm" variant="secondary">
            <Link href="/auth">Get Started</Link>
          </Button>
          <ThemToggle />
        </div>
        <Button className="flex sm:hidden" size="icon" variant="primary-link">
          <CirclesFourIcon
            className="size-7 text-gray-600 dark:text-gray-300"
            weight="bold"
          />
        </Button>
      </div>
    </nav>
  );
};
