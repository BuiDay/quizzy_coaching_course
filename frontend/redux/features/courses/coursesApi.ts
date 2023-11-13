import { apiSlice } from "../api/apiSlice";

export const couresApi = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        createCourse:builder.mutation({
            query:({data}) => ({
                url:"/course/create-coures",
                method:"POST",
                body:{data},
                credentials:"include" as const
            })
        })
    })
})

export const {useCreateCourseMutation} = couresApi;