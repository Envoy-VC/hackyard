import { useMemo } from "react";

import { useFormContext } from "react-hook-form";

import { onboardingQuestions } from "@/data";
import type { OnboardingFormType } from "@/lib/schema";
import { useOnboardingStore } from "@/lib/stores";

export const useOnboarding = () => {
  const store = useOnboardingStore();

  const form = useFormContext<OnboardingFormType>();

  const currentQuestion = useMemo(() => {
    const question =
      onboardingQuestions[store.step as keyof typeof onboardingQuestions];
    return {
      question: question?.question ?? "",
      subtitle: question?.subtitle ?? "",
    };
  }, [store.step]);

  const onNext = () => {
    const data = form.getValues() as Partial<OnboardingFormType>;
    console.log(data);
    const currentStep = store.step;
    if (currentStep === 0 && !data?.answers?.question1) {
      return;
    }
    if (currentStep === 1 && !data?.answers?.question2) {
      return;
    }
    if (currentStep === 2 && !data?.answers?.question3) {
      return;
    }
    store.goToNextStep();
  };

  const onPrevious = () => {
    store.goToPreviousStep();
  };

  return {
    ...store,
    currentQuestion,
    onNext,
    onPrevious,
  };
};
