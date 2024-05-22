import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const shoppingCartApi = createApi({
    reducerPath: "shoppingCartApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:7670/api/",
    }),
    tagTypes: ["ShoppingCarts"],
    endpoints: (builder) => ({

        getShoppingCart: builder.query({
            query: (userId) => ({
                url: `ShoppingCart`,
                method: "GET",
                params: {
                    userId: userId,
                }
            }),
            providesTags: ["ShoppingCarts"],
        }),
        updateShoppingCart: builder.mutation({
            query: ({ menuItemId, updateQuantityBy, userId }) => ({
                url: "ShoppingCart",
                method: "POST",
                params: {
                    menuItemId, updateQuantityBy, userId,
                },
            }),
            invalidatesTags: ["ShoppingCarts"],
        }),
    }),
});

export const { useGetShoppingCartQuery, useUpdateShoppingCartMutation } = shoppingCartApi;
export default shoppingCartApi;
