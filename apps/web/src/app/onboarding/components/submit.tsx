import { Button } from "@hackyard/ui/components/button";
import {
  ArrowRightIcon,
  CircleNotchIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useFormContext } from "react-hook-form";

import { useOnboarding } from "@/hooks";
import type { OnboardingFormType } from "@/lib/schema";

export const OnboardingSubmit = () => {
  const form = useFormContext<OnboardingFormType>();
  const { availabilityStatus } = useOnboarding();
  return (
    <Button
      className="!px-5"
      disabled={
        availabilityStatus === "unavailable" ||
        availabilityStatus === "checking" ||
        form.formState.isSubmitting
      }
      type="submit"
      variant="secondary"
    >
      Finish
      {form.formState.isSubmitting ? (
        <CircleNotchIcon
          className="size-5 animate-spin fill-secondary-foreground"
          weight="bold"
        />
      ) : (
        <ArrowRightIcon
          className="size-5 fill-secondary-foreground"
          weight="bold"
        />
      )}
    </Button>
  );
};
