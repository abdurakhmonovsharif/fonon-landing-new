import { baseApi } from './api';

export const certificatesAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCertificates: builder.query({
            query: () => 'certificates',
            providesTags: ['Certificates'],
        }),
    }),
});

// IMPORTANT: Export the hook
export const { useGetCertificatesQuery } = certificatesAPi;
