import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsAPI = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://639b3bcbd5141501974fa42a.mockapi.io/api/v1' }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: ({name, number}) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          number
        },
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
})

export const { useGetContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactsAPI;


