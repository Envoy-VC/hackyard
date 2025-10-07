import type { ReactNode } from "react";

import { SignedIn } from "@/components/wrappers";

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <SignedIn>{children}</SignedIn>;
};

export default DashboardLayout;
