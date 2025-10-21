import { baseApi } from './api';

export const navApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getNavItems: builder.query({
            query: () => 'nav-items',
            providesTags: ['NavItem'],
        }),
    }),
});

// IMPORTANT: Export the hook
export const { useGetNavItemsQuery } = navApi;
