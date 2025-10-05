import { ConvexClientProvider } from "./convex";
import { ThemeProvider } from "./theme-provider";

export const ProviderTree = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange={true}
      enableSystem={true}
    >
      <ConvexClientProvider>{children}</ConvexClientProvider>
    </ThemeProvider>
  );
};
