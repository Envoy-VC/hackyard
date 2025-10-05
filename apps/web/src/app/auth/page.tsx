import { Button } from "@hackyard/ui/components/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@hackyard/ui/components/input-group";
import { EmailIcon, HackYardLogo, LoginIcon } from "@hackyard/ui/icons";

import { GitHubLoginButton, GoogleLoginButton } from "./components";

const AuthPage = () => {
  return (
    <div className="relative">
      <div className="absolute right-1/2 flex w-full max-w-lg translate-x-1/2 translate-y-1/4 flex-col gap-6 p-4">
        <div className="flex flex-col gap-5">
          <div className="mx-auto flex w-fit flex-row items-center gap-2">
            <HackYardLogo className="size-8" variant="primary" />
            <div className="font-black text-xl">HackYard</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-center text-heading">
              Sign In To Your Account.
            </div>
            <div className="text-center text-paragraph">
              Unleash your inner sloth 4.0 right now.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-label">Email Address</div>
          <InputGroup>
            <InputGroupInput placeholder="richard@piedpiper.com" type="email" />
            <InputGroupAddon>
              <EmailIcon strokeWidth={2} />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <Button variant="secondary">
          Sign In
          <LoginIcon className="size-6 fill-secondary-foreground" />
        </Button>
        <div className="flex flex-row items-center gap-2">
          <div className="w-full border-gray-300 border-t dark:border-gray-700" />
          <div className="font-bold text-gray-400 text-sm dark:text-gray-600">
            OR
          </div>
          <div className="w-full border-gray-300 border-t dark:border-gray-700" />
        </div>
        <div className="flex flex-col gap-4">
          <GoogleLoginButton />
          <GitHubLoginButton />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
