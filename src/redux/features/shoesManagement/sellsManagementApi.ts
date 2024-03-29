import { baseApi } from "../../api/baseApi";

const sellsManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSellsHistory: builder.mutation({
      query: (data) => ({
        url: "/create-sells-history",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["sells"],
    }),
    getAllSellsHistory: builder.query({
      query: (interval) => ({
        url: `/get-sells-history?interval=${interval}`,
        method: "GET",
      }),
      providesTags: ["sells"],
    }),
  }),
});

export const { useCreateSellsHistoryMutation, useGetAllSellsHistoryQuery } =
  sellsManagementApi;
