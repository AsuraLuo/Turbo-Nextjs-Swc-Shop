import * as React from "react";

import ApolloProvider from "@/lib/ApolloProvider";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider>{children}</ApolloProvider>;
}
