import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const foodApi = createApi({
  reducerPath: 'foodData',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://foodlane-server-api.onrender.com`,
  }),
  endpoints: (builder) => {
    return {
      getFood: builder.query({
        query: () => '/foodData',
      }),
    };
  },
});

export const { useGetFoodQuery } = foodApi;
