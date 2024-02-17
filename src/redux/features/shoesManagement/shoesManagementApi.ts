import { TResponseRedux } from "../../../types/global";
import { TShoesData } from "../../../types/shoesData";
import { baseApi } from "../../api/baseApi";

const shoesManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createShoes: builder.mutation({
      query: (data) => ({
        url: "/create-shoes",
        method: "POST",
        body: data,
      }),
    }),
    getAllShoes: builder.query({
      query: () => ({
        url: "/get-shoes",
        method: "GET",
      }),
      providesTags: ["shoes"],
      transformResponse: (response: TResponseRedux<TShoesData[]>) => {
        console.log(response);
        return {
          data: response.data,
          // meta: response.meta,
        };
      },
    }),
    updateShoes: builder.mutation({
      query: (arg) => ({
        url: `/update-shoe/${arg._id}`,
        method: "PUT",
        body: arg,
      }),
      invalidatesTags: ["shoes"],
    }),
    deleteShoes: builder.mutation({
      query: (arg) => ({
        url: `/delete-shoe/${arg._id}`,
        method: "DELETE",
        // body: arg,
      }),
      invalidatesTags: ["shoes"],
    }),
  }),
});

export const {
  useCreateShoesMutation,
  useGetAllShoesQuery,
  useUpdateShoesMutation,
  useDeleteShoesMutation,
} = shoesManagementApi;
