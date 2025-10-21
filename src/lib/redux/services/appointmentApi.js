import {baseApi} from "./api.js";

export const appointmentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        requestAppointment: builder.query({
            query: () => 'appointments',
            providesTags: ['Appointment'],
        }),
        createAppointment: builder.mutation({
            query: (appointmentData) => ({
                url: 'appointments',
                method: 'POST',
                body: appointmentData,
            }),
            invalidatesTags: ['Appointment'],
        }),
    }),
});

export const { useRequestAppointmentQuery, useCreateAppointmentMutation } = appointmentApi;