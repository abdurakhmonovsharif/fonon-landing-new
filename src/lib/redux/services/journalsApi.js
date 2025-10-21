import { baseApi } from './api';

export const journalsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getJournals: builder.query({
            query: () => 'journals',
            providesTags: ['Journals'],
        }),
    }),
});

// IMPORTANT: Export the hook
export const { useGetJournalsQuery } = journalsApi;
