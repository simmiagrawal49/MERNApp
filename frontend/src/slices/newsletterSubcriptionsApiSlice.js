import { apiSlice } from "./apislice";
import { NEWSLETTER_SUBSCRIPTIONS_URL } from "../constants";

export const newsletterSubcriptionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNewsletterSubcriptions: builder.query({
      query: () => ({
        url: NEWSLETTER_SUBSCRIPTIONS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    newsletterSubcriptions: builder.mutation({
      query: (data) => ({
        url: `${NEWSLETTER_SUBSCRIPTIONS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useNewsletterSubcriptionsMutation,
  useGetNewsletterSubcriptionsQuery,
} = newsletterSubcriptionsApiSlice;
