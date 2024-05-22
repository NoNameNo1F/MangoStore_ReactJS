import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// can be used axios instead of rtk

const menuItemApi = createApi({
    reducerPath: "menuItemApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7670/api/" }),
    tagTypes: ["MenuItems"],
    endpoints: (builder) => ({
        getMenuItems: builder.query({
            query: () => ({
                url: "MenuItem",
                method: "GET",
            }),
            providesTags: ["MenuItems"],
        }),
        getMenuItemById: builder.query({
            query: (id) => ({
                url: `MenuItem/${id}`,
                method: "GET",
            }),
            providesTags: ["MenuItems"],
        }),
    }),
});

export const { useGetMenuItemsQuery, useGetMenuItemByIdQuery } = menuItemApi;
export default menuItemApi;
