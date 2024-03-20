import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mission5-assignment-backend-576urnl4p.vercel.app/api",
  }),
  tagTypes: ["shoes", "sells", "request"],
  endpoints: () => ({}),
});
