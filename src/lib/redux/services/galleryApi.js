import { baseApi } from './api';

export const galleryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGallery: builder.query({
            query: () => 'gallery',
            providesTags: ['Gallery'],
        }),
    }),
});

export const { useGetGalleryQuery } = galleryApi;
