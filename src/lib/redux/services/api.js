import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://185.217.131.110:9090/api/',
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['NavItem', 'Celebrity', 'Vacancies', 'News', 'Gallery', 'Appointment', 'Contacts', 'Journals', 'Certificates'],
    endpoints: () => ({}),
});