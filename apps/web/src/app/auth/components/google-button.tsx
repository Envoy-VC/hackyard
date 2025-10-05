"use client";

import { Button } from "@hackyard/ui/components/button";
import { GoogleIcon } from "@hackyard/ui/icons";

import { authClient } from "@/lib/auth/client";

export const GoogleLoginButton = () => {
  return (
    <Button
      className="bg-gray-100 font-semibold hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-800/90"
      onClick={async () => {
        const res = await authClient.signIn.social({
          provider: "google",
        });

        console.log(res);
      }}
      variant="primary-ghost"
    >
      <GoogleIcon />
      Sign In with Google
    </Button>
  );
};
