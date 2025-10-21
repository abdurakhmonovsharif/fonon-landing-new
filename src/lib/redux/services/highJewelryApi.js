import { baseApi } from './api';

export const highJewelryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getHighJewelry: builder.query({
            query: () => 'certificates',
            providesTags: ['Certificates'],
        }),
    }),
});

// IMPORTANT: Export the hook
export const { useGetHighJewelryQuery } = highJewelryApi;
