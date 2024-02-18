import { baseApi } from "../../api/baseApi";

const sellsManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSellsHistory: builder.mutation({
      query: (data) => ({
        url: "/create-sells-history",
        method: "POST",
        body: data,
      }),
    }),
    getAllSellsHistory: builder.query({
      query: () => ({
        url: "/get-sells-history",
        method: "GET",
      }),
      providesTags: ["sells"],
      //   transformResponse: (response: TResponseRedux<TShoesData[]>) => {
      //     console.log(response);
      //     return {
      //       data: response.data,
      //       // meta: response.meta,
      //     };
      //   },
    }),
  }),
});

export const { useCreateSellsHistoryMutation, useGetAllSellsHistoryQuery } =
  sellsManagementApi;
