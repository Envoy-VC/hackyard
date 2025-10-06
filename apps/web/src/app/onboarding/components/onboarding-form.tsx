"use client";

import { Form } from "@hackyard/ui/components/form";
import { arktypeResolver } from "@hookform/resolvers/arktype";
import { useForm } from "react-hook-form";

import { useOnboarding } from "@/hooks";
import { type OnboardingFormType, onboardingFormSchema } from "@/lib/schema";

import { OnboardingFormControls } from "./controls";
import { OnboardingFormOptions } from "./options";

export const OnboardingForm = () => {
  const { currentQuestion } = useOnboarding();

  const form = useForm<OnboardingFormType>({
    defaultValues: {
      answers: {
        question2: [],
        question3: [],
      },
    },
    resolver: arktypeResolver(onboardingFormSchema),
  });

  const onSubmit = async (data: OnboardingFormType) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="text-heading">{currentQuestion.question}</div>
        <div className="text-paragraph">{currentQuestion.subtitle}</div>
        <OnboardingFormOptions />
        <OnboardingFormControls />
      </form>
    </Form>
  );
};
