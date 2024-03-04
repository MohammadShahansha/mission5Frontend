import { baseApi } from "../../api/baseApi";

const serviceManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPolishRequest: builder.mutation({
      query: (data) => ({
        url: "/create-polish-request",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["request"],
    }),
    getAllPolishRequset: builder.query({
      query: () => ({
        url: `/get-polish-request`,
        method: "GET",
      }),
    }),

    getAllBuyerData: builder.query({
      query: () => ({
        url: `/buyer-request`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreatePolishRequestMutation,
  useGetAllPolishRequsetQuery,
  useGetAllBuyerDataQuery,
} = serviceManagementApi;
