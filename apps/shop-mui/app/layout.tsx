import * as React from "react";
import type { Metadata } from "next/types";

import { GET_STORE_CONFIG } from "@/graphql/getStoreConfig";
import { getClient } from "@/lib/ApolloProvider/client";
import ApolloProvider from "@/lib/ApolloProvider";
import StoreProvider from "@/lib/StoreProvider";

import ThemeRegistry from "@/components/ThemeRegistry";
import AppLayout from "@/components/AppLayout";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

const RootLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    appConfig: any;
  };
}) => {
  const { data } = await getClient().query({ query: GET_STORE_CONFIG });

  params.appConfig = data;

  return (
    <html lang="en">
      <body>
        <ApolloProvider>
          <StoreProvider>
            <ThemeRegistry>
              <AppLayout appConfig={data}>
                <Header />
                <Navigation />
                {children}
              </AppLayout>
            </ThemeRegistry>
          </StoreProvider>
        </ApolloProvider>
      </body>
    </html>
  );
};

export default RootLayout;
