import { useEffect } from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@hackyard/ui/components/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@hackyard/ui/components/input-group";
import { cn } from "@hackyard/ui/lib/utils";
import {
  CheckCircleIcon,
  CircleNotchIcon,
  UserIcon,
  XCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useFormContext } from "react-hook-form";
import { useDebounceValue } from "usehooks-ts";

import { onboardingQuestions } from "@/data";
import { useOnboarding } from "@/hooks";
import type { OnboardingFormType } from "@/lib/schema";
import type { AvailabilityStatus } from "@/lib/stores";

export const OnboardingFormOptions = () => {
  const { step } = useOnboarding();

  if (step === 0) {
    return <Question1Options />;
  }

  if (step === 1) {
    return <Question2Options />;
  }

  if (step === 2) {
    return <Question3Options />;
  }

  if (step === 3) {
    return <Question4Options />;
  }
  return null;
};

export const Question1Options = () => {
  const form = useFormContext<OnboardingFormType>();

  const answer = form.watch("answers.question1");

  return (
    <div className="flex flex-col gap-3 py-4">
      {onboardingQuestions[0].options.map((option) => (
        <button
          className={cn(
            "flex cursor-pointer flex-row items-center gap-2 rounded-lg border-2 px-4 py-2 font-semibold text-base text-gray-600 transition-all duration-200 ease-in-out md:text-lg",
            answer === option.id && "border-secondary text-secondary",
          )}
          key={option.id}
          onClick={() => {
            form.setValue("answers.question1", option.id);
          }}
          type="button"
        >
          <option.icon
            className={cn(
              "size-6 text-gray-600 transition-all duration-200 ease-in-out",
              answer === option.id && "text-secondary",
            )}
            weight="bold"
          />
          <div>{option.title}</div>
        </button>
      ))}
    </div>
  );
};

export const Question2Options = () => {
  const form = useFormContext<OnboardingFormType>();

  const answer = form.watch("answers.question2");

  const toggleOption = (option: string) => {
    if (answer.includes(option)) {
      form.setValue(
        "answers.question2",
        answer.filter((t) => t !== option),
        { shouldValidate: true },
      );
    } else {
      form.setValue("answers.question2", [...answer, option], {
        shouldValidate: true,
      });
    }
  };

  return (
    <div className="flex flex-row flex-wrap gap-3 py-4">
      {onboardingQuestions[1].options.map((option) => (
        <button
          className={cn(
            "cursor-pointer rounded-full border px-4 py-2 font-semibold text-base transition-all duration-200 ease-in-out md:text-base",
            answer.includes(option.id) &&
              "border-primary bg-primary text-primary-foreground",
          )}
          key={`question-2-${option.id}`}
          onClick={() => toggleOption(option.id)}
          type="button"
        >
          <div>{option.title}</div>
        </button>
      ))}
    </div>
  );
};

export const Question3Options = () => {
  const form = useFormContext<OnboardingFormType>();

  const answer = form.watch("answers.question3");

  const toggleOption = (option: string) => {
    if (answer.includes(option)) {
      form.setValue(
        "answers.question3",
        answer.filter((t) => t !== option),
        { shouldValidate: true },
      );
    } else {
      form.setValue("answers.question3", [...answer, option], {
        shouldValidate: true,
      });
    }
  };

  return (
    <div className="flex flex-col gap-3 py-4">
      {onboardingQuestions[2].options.map((option) => (
        <button
          className={cn(
            "flex cursor-pointer flex-row items-center gap-2 rounded-lg border-2 px-4 py-2 font-semibold text-base text-gray-600 transition-all duration-200 ease-in-out md:text-lg",
            answer.includes(option.id) && "border-secondary text-secondary",
          )}
          key={option.id}
          onClick={() => {
            toggleOption(option.id);
          }}
          type="button"
        >
          <option.icon
            className={cn(
              "size-6 text-gray-600 transition-all duration-200 ease-in-out",
              answer.includes(option.id) && "text-secondary",
            )}
            weight="bold"
          />
          <div>{option.title}</div>
        </button>
      ))}
    </div>
  );
};

export const Question4Options = () => {
  const takenUsernames = ["envoy10", "envoy108", "env", "envoy"];

  const form = useFormContext<OnboardingFormType>();
  const formUsername = form.watch("username");

  const [debouncedValue, setValue] = useDebounceValue<string | undefined>(
    undefined,
    300,
  );

  useEffect(() => {
    setValue(formUsername);
  }, [formUsername, setValue]);

  const { availabilityStatus, setAvailabilityStatus } = useOnboarding();

  // biome-ignore lint/correctness/useExhaustiveDependencies: need to only run this effect when username changes
  useEffect(() => {
    const checkIfAvailable = async (username: string) => {
      if (username === "" || username === null) return;
      setAvailabilityStatus("checking");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const isAvailable = !takenUsernames.includes(username);
      if (!isAvailable) {
        form.setError("username", {
          message: "This username is already taken.",
        });
      }
      if (isAvailable) form.clearErrors("username");
      setAvailabilityStatus(isAvailable ? "available" : "unavailable");
    };

    if (debouncedValue) {
      checkIfAvailable(debouncedValue).catch(console.error);
    }
  }, [debouncedValue, setAvailabilityStatus]);

  return (
    <div className="flex flex-col gap-2 py-8">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="px-2 pb-1">Username</FormLabel>
            <FormControl>
              <InputGroup className="items-center">
                <InputGroupInput
                  autoComplete="off"
                  className="!text-base font-semibold placeholder:font-semibold placeholder:text-base"
                  placeholder="richard"
                  spellCheck="false"
                  type="text"
                  {...field}
                />
                <InputGroupAddon>
                  <UserIcon className="size-5" weight="bold" />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <AvailabilityStatusIcon status={availabilityStatus} />
                </InputGroupAddon>
              </InputGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

const AvailabilityStatusIcon = ({ status }: { status: AvailabilityStatus }) => {
  if (status === "checking") {
    return (
      <CircleNotchIcon
        className="size-5 animate-spin text-primary"
        weight="bold"
      />
    );
  }

  if (status === "available") {
    return <CheckCircleIcon className="size-5 text-success" weight="bold" />;
  }

  if (status === "unavailable") {
    return <XCircleIcon className="size-5 text-destructive" weight="bold" />;
  }
  return null;
};
