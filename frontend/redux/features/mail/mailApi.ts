import { register } from "module";
import { apiSlice } from "../api/apiSlice";
import { getMails } from "./mailSilce";

type Mail = {
    name: string,
    email: string,
    createdAt: string,
}

type MailsResponse = {
    totalMails: number,
    totalPages: number,
    currentPage: number,
    data:Mail[]
};

type MailsData = {
    limit:number,
    page:number
}

export const mailApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getMail:builder.mutation({
            query:({limit,page})=>({
                url:"get-collection-mail",
                method:"GET",
                
            }),
            async onQueryStarted (arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        getMails({
                            totalMails: result.data.totalMails,
                            totalPages: result.data.totalPages,
                            currentPage: result.data.currentPage,
                            data:result.data.data
                        })
                    )
                } catch (error) {
                    console.log(error)
                }
            }
        }),
    })
})


export const {useGetMailMutation} = mailApi