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
      transformResponse: response => ({
        products: response.data,
        limit: response.limit,
        totalProduct: response.total,
        // pageNumber: response.page,
        totalPages: response.totalPages,
      }),
    }),
    getSingleProduct: builder.query({
      query: (query = '') => ({
        url: query,
      })
    }),
  }),
});

export const { useGetGoodsQuery, useGetSingleProductQuery } = goodsApi;
