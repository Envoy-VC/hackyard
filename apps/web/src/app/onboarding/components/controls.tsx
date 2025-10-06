"use client";

import { Button } from "@hackyard/ui/components/button";
import { cn } from "@hackyard/ui/lib/utils";
import { ChevronLeftIcon } from "lucide-react";

import { useOnboarding } from "@/hooks";

import { OnboardingSubmit } from "./submit";

export const OnboardingFormControls = () => {
  const {
    canGoToNextStep,
    canGoToPreviousStep,
    totalSteps,
    step,
    onNext,
    onPrevious,
  } = useOnboarding();

  return (
    <div className="absolute right-0 bottom-0 flex w-full flex-row items-center justify-between px-4">
      <div className="flex w-full max-w-[8rem] flex-row items-center gap-2 sm:max-w-[8rem] md:max-w-[10rem]">
        {Array.from({ length: totalSteps }).map((_, i) => {
          return (
            <div
              className={cn(
                "h-2 w-full rounded-full bg-gray-200",
                step >= i && "bg-secondary",
              )}
              key={`onboarding-control-${i.toString()}`}
            ></div>
          );
        })}
      </div>
      <div className="flex flex-row items-center gap-2">
        {canGoToPreviousStep() && (
          <Button
            onClick={() => onPrevious()}
            type="button"
            variant="primary-link"
          >
            <ChevronLeftIcon className="size-6" />
            Back
          </Button>
        )}
        {canGoToNextStep() && (
          <Button onClick={() => onNext()} type="button" variant="secondary">
            Continue
          </Button>
        )}
        {step === totalSteps - 1 && <OnboardingSubmit />}
      </div>
    </div>
  );
};
