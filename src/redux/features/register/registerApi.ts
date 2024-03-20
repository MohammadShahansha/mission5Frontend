import { baseApi } from "../../api/baseApi";

const registerManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegistrationMutation } = registerManagementApi;
