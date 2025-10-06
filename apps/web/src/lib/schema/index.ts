import { type } from "arktype";

export const onboardingFormSchema = type({
  answers: type({
    question1: type.string,
    question2: "string[] > 0",
    question3: "string[] > 0",
  }),
  username: type("/^[a-zA-Z0-9_-]{3,20}$/").configure({
    message:
      "Username must be between 3-20 characters long and contain alphanumeric characters, _ and -",
  }),
});

export type OnboardingFormType = typeof onboardingFormSchema.infer;
