"use client";
import * as React from "react";
import { Box, Button } from "@mui/material";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { GET_STORE_CONFIG } from "@/graphql/getStoreConfig";

const CheckoutPage = () => {
  const { data } = useQuery(GET_STORE_CONFIG, { fetchPolicy: "cache-first" });
  console.log(data);
  return (
    <Box sx={{ display: "flex" }}>
      <Button variant="contained" color="primary">
        App
      </Button>
    </Box>
  );
};

export default CheckoutPage;
