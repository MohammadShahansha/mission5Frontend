import { TResponseRedux } from "../../../types/global";
import { TQueryParam, TShoesData } from "../../../types/shoesData";
import { baseApi } from "../../api/baseApi";

const shoesManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createShoes: builder.mutation({
      query: (data) => ({
        url: "/create-shoes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["shoes"],
    }),
    getAllShoes: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/get-shoes",
          method: "GET",
          params: params,
        };
      },
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
    MultipleShoesDelete: builder.mutation({
      query: (ids) => ({
        url: `/multipl-shoe-delete`,
        method: "DELETE",
        body: { _id: ids },
      }),
      invalidatesTags: ["shoes"],
    }),
    deleteShoes: builder.mutation({
      query: (arg) => ({
        url: `/delete-shoe/${arg.key}`,
        method: "DELETE",
        // body: arg,
      }),
      invalidatesTags: ["shoes"],
    }),
    getSingleShoe: builder.query({
      query: (arg) => ({
        url: `/single-shoe/${arg.id}`,
        method: "GET",
      }),
      providesTags: ["shoes"],
    }),
  }),
});

export const {
  useCreateShoesMutation,
  useGetAllShoesQuery,
  useUpdateShoesMutation,
  useDeleteShoesMutation,
  useMultipleShoesDeleteMutation,
  useGetSingleShoeQuery,
} = shoesManagementApi;
