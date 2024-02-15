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
      transformResponse: (response: TResponseRedux<TShoesData[]>) => {
        console.log(response);
        return {
          data: response.data,
          // meta: response.meta,
        };
      },
    }),
  }),
});

export const { useCreateShoesMutation, useGetAllShoesQuery } =
  shoesManagementApi;
