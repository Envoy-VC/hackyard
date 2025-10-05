import { HackYardLogoBlack } from "./black";
import { HackYardLogoPrimary } from "./primary";
import { HackYardLogoWhite } from "./white";

interface HackYardLogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: "primary" | "white" | "black";
}

export const HackYardLogo = ({
  variant = "primary",
  ...props
}: HackYardLogoProps) => {
  if (variant === "primary") {
    return <HackYardLogoPrimary {...props} />;
  } else if (variant === "white") {
    return <HackYardLogoWhite {...props} />;
  } else {
    return <HackYardLogoBlack {...props} />;
  }
};
