import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const customFetchBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    // Add any headers you need here
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
  const result = await customFetchBaseQuery(args, api, extraOptions);

  if (result.error) {
    // Log the raw response for debugging
    console.error('Raw response:', result.error.data);

    // Handle non-JSON responses
    if (typeof result.error.data === 'string' && result.error.data.startsWith('Proxy error')) {
      return {
        error: {
          status: 'CUSTOM_ERROR',
          data: 'Proxy error: The response is not valid JSON',
        },
      };
    }
  }

  return result;
};

// export const api = createApi({
//   baseQuery: baseQueryWithErrorHandling,
//   tagTypes: ['Product', 'Order', 'User'],
//   endpoints: (builder) => ({}),
//   //   // Define your endpoints here
//   //   getExample: builder.query({
//   //     query: () => 'example-endpoint',
//   //   }),
//   // }),
// });

// // export const { useGetExampleQuery } = api;

export const apiSlice = createApi({
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
});

