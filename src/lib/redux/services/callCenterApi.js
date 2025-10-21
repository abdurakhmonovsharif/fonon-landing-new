import {baseApi} from "./api.js";

export const callCenterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => 'contacts',
            providesTags: ['Contacts'],
        }),

    }),
});

export const { useGetContactsQuery } = callCenterApi;