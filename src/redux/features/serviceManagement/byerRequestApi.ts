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
      providesTags: ["request"],
    }),
    updatePolishStatus: builder.mutation({
      query: (arg) => ({
        url: `/update-request-status/${arg._id}`,
        method: "PUT",
        body: arg,
      }),
      invalidatesTags: ["request"],
    }),
    getAllBuyerData: builder.query({
      query: () => ({
        url: `/buyer-request`,
        method: "GET",
      }),
      providesTags: ["request"],
    }),
  }),
});

export const {
  useCreatePolishRequestMutation,
  useGetAllPolishRequsetQuery,
  useUpdatePolishStatusMutation,
  useGetAllBuyerDataQuery,
} = serviceManagementApi;
