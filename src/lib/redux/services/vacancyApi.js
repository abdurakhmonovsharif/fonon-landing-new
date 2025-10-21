import { baseApi } from './api';

export const vacancyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getVacancies: builder.query({
            query: () => 'vacancies',
            providesTags: ['Vacancies'],
        }),
        requestVacancy: builder.mutation({
            query: (data) => ({
                url: 'job-requests',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Vacancies'],
        })
    }),
});

export const { useGetVacanciesQuery, useRequestVacancyMutation } = vacancyApi;