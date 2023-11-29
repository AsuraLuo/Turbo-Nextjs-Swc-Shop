import * as React from "react";

import StoreProvider from "@/lib/StoreProvider";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/Header";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeRegistry>
            <Header />
            {children}
          </ThemeRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
