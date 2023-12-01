import { apiSlice } from "../api/apiSlice";

export const analyticsApi = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getMailsAnalytics:builder.query({
            query:() => ({
                url:"/analytics/mail-analytic",
                method:"GET",
                credentials:"include" as const
            })
        })
    })
})

export const {useGetMailsAnalyticsQuery} = analyticsApi;