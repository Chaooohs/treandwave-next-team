import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const goodsApi = createApi({
  reducerPath: "goodsQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    // baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getGoods: builder.query({
      query: (query = "") => ({
        url: query,
      }),
      // transformResponse: response => ({
      //   goods: response.product,
      //   limit: response.limit,
      //   totalGoods: response.total,
      //   pageNumber: response.skip,
      // }),
    }),
    getSingleProduct: builder.query({
      query: (query = '') => ({
        url: query,
      })
    }),
  }),
});

export const { useGetGoodsQuery, useGetSingleProductQuery } = goodsApi;
