import { baseApi } from './api';

export const celebrityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCelebrities: builder.query({
            query: () => 'famous',
            providesTags: ['Celebrity'],
        }),
    }),
});

export const { useGetCelebritiesQuery } = celebrityApi;
