import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../constants";

//This means that all API requests defined in this slice will automatically prepend this base URL.
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});
