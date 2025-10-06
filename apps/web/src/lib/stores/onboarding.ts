import { create } from "zustand";

export type AvailabilityStatus =
  | "available"
  | "unavailable"
  | "checking"
  | "idle";

type OnboardingStore = {
  availabilityStatus: AvailabilityStatus;
  setAvailabilityStatus: (status: AvailabilityStatus) => void;
  totalSteps: number;
  step: number;
  setStep: (step: number) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  canGoToNextStep: () => boolean;
  canGoToPreviousStep: () => boolean;
};

export const useOnboardingStore = create<OnboardingStore>((set, get) => ({
  availabilityStatus: "idle",
  canGoToNextStep: () => get().step < get().totalSteps - 1,
  canGoToPreviousStep: () => get().step > 0,
  goToNextStep: () =>
    set({ step: Math.min(get().step + 1, get().totalSteps - 1) }),
  goToPreviousStep: () => set({ step: Math.max(get().step - 1, 0) }),
  setAvailabilityStatus: (status) => set({ availabilityStatus: status }),
  setStep: (step: number) => set({ step: step }),
  step: 0,
  totalSteps: 4,
}));
