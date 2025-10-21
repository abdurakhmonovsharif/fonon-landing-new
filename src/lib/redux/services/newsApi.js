import { baseApi } from './api';

export const newsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => 'news',
            providesTags: ['News'],
        }),
    }),
});

// IMPORTANT: Export the hook
export const { useGetNewsQuery } = newsApi;
