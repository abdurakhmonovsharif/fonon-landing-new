import { baseApi } from './api';

export const locationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLocations: builder.query({
            query: () => 'locations',
            providesTags: ['Location'],
            transformResponse: (response) => {
                // Ensure response is always an array
                return Array.isArray(response) ? response : [];
            },
        }),
        getLocationById: builder.query({
            query: (id) => `locations/${id}`,
            providesTags: (result, error, id) => [{ type: 'Location', id }],
        }),
        getLocationsByCity: builder.query({
            query: (mapTag) => `locations?mapTag=${encodeURIComponent(mapTag)}`,
            providesTags: (result, error, mapTag) => [{ type: 'Location', id: mapTag }],
            transformResponse: (response) => {
                return Array.isArray(response) ? response : [];
            },
        }),
    }),
});

export const {
    useGetLocationsQuery,
    useGetLocationByIdQuery,
    useGetLocationsByCityQuery
} = locationApi;