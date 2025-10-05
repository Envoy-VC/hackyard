"use client";

import { Button } from "@hackyard/ui/components/button";
import { GitHubIcon } from "@hackyard/ui/icons";

import { authClient } from "@/lib/auth/client";

export const GitHubLoginButton = () => {
  return (
    <Button
      className="bg-gray-100 font-semibold hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-800/90"
      onClick={async () => {
        const res = await authClient.signIn.social({
          provider: "github",
        });

        console.log(res);
      }}
      variant="primary-ghost"
    >
      <GitHubIcon className="fill-[#24292F] dark:fill-white" />
      Sign In with GitHub
    </Button>
  );
};
