import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const goodsApi = createApi({
  reducerPath: "goodsQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getGoods: builder.query({
      query: (query = "") => ({
        url: "/products",
      }),
      transformResponse: response => ({
        goods: response.products,
        limit: response.limit,
        total: response.total,
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
