import { apiSlice } from './apislice';
import { RAZORPAY } from '../constants';

export const razorPayApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    razorPay: builder.mutation({
      query: (data) => ({
        url: `${RAZORPAY}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
useRazorPayMutation
} = razorPayApiSlice;
