"use server";
import * as React from "react";
import { Box, Button } from "@mui/material";

import { GET_STORE_CONFIG } from "@/graphql/getStoreConfig";
import { getClient } from "../lib/ApolloProvider/client";

export default async function Home() {
  const { data } = await getClient().query({ query: GET_STORE_CONFIG });

  return (
    <Box>
      <Button variant="contained" color="primary">
        App
      </Button>
      <div>{JSON.stringify(data)}</div>
    </Box>
  );
}
