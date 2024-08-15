import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mission5-assignment-backend.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["shoes", "sells", "request"],
  endpoints: () => ({}),
});
