// import { redirect } from "next/navigation";

import Image from "next/image";

import { HackYardLogo } from "@hackyard/ui/icons";

import { OnboardingForm } from "./components";

// import { api } from "@hackyard/backend/src/_generated/api";
// import { fetchQuery } from "convex/nextjs";

// import { getToken } from "@/lib/auth/server";

const OnboardingPage = () => {
  // const token = await getToken();
  // const auth = await fetchQuery(api.auth.getCurrentUser, {}, { token });
  // console.log("Current User", auth);

  // if (auth.hasCompletedOnboarding) redirect("/");

  return (
    <div className="flex h-screen w-full flex-col lg:flex-row">
      <div className="order-2 flex h-full w-full basis-1/2 items-center justify-center lg:order-1">
        <div className="relative flex min-h-[75dvh] w-full max-w-[36rem] flex-col gap-8 p-4 pb-12 md:min-h-[60dvh]">
          <div className="flex flex-row items-center gap-2">
            <HackYardLogo className="size-8" variant="primary" />
            <div className="font-bold text-xl">HackYard</div>
          </div>
          <OnboardingForm />
        </div>
      </div>
      <div className="relative order-1 flex h-full w-full basis-0 lg:order-2 lg:basis-1/2">
        <div className="absolute right-8 bottom-8 hidden flex-row items-center gap-2 lg:flex">
          <HackYardLogo className="size-8" variant="primary" />
          <div className="font-bold text-xl">HackYard</div>
        </div>
        <Image
          alt="onboarding"
          className="h-[20dvh] w-full object-fill sm:h-[30dvh] lg:h-full"
          height={300}
          src="/assets/onboarding.png"
          width={300}
        />
      </div>
    </div>
  );
};

export default OnboardingPage;
