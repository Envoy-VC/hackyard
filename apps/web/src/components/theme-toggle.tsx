"use client";

import { useCallback, useMemo, useRef } from "react";
import { flushSync } from "react-dom";

import { cn } from "@hackyard/ui/lib/utils";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

type Props = {
  className?: string;
};

export const ThemToggle = ({ className }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { setTheme, theme } = useTheme();

  const isDark = useMemo(() => theme === "dark", [theme]);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top),
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  }, [theme, setTheme]);

  return (
    <button
      className={cn(
        "size-8 rounded-full transition-all duration-300 active:scale-95",
        isDark
          ? "bg-background text-foreground"
          : "bg-foreground text-background",
        className,
      )}
      onClick={toggleTheme}
      ref={buttonRef}
      type="button"
    >
      <svg
        aria-hidden="true"
        fill="currentColor"
        strokeLinecap="round"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/** biome-ignore lint/correctness/useUniqueElementIds: safe */}
        <clipPath id="skiper-btn-2">
          <motion.path
            animate={{ x: isDark ? -12 : 0, y: isDark ? 10 : 0 }}
            d="M0-5h30a1 1 0 0 0 9 13v24H0Z"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        </clipPath>
        <g clipPath="url(#skiper-btn-2)">
          <motion.circle
            animate={{ r: isDark ? 10 : 8 }}
            cx="16"
            cy="16"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
          <motion.g
            animate={{
              opacity: isDark ? 0 : 1,
              rotate: isDark ? -100 : 0,
              scale: isDark ? 0.5 : 1,
            }}
            stroke="currentColor"
            strokeWidth="1.5"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <path d="M16 5.5v-4" />
            <path d="M16 30.5v-4" />
            <path d="M1.5 16h4" />
            <path d="M26.5 16h4" />
            <path d="m23.4 8.6 2.8-2.8" />
            <path d="m5.7 26.3 2.9-2.9" />
            <path d="m5.8 5.8 2.8 2.8" />
            <path d="m23.4 23.4 2.9 2.9" />
          </motion.g>
        </g>
      </svg>
    </button>
  );
};
