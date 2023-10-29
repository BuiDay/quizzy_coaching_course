import { register } from "module";
import { apiSlice } from "../api/apiSlice";
import { userRegistration } from "./authSlice";
import build from "next/dist/build";

type RegistrationResponse = {
    message:string,
    activationToken:string
};

type RegistrationData = {}

export const authApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        register:builder.mutation<RegistrationResponse,RegistrationData>({
            query:(data)=>({
                url:"registration",
                method:"POST",
                body:data,
                credentials:"include" as const
            }),
            async onQueryStarted (arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userRegistration({
                            token:result.data.activationToken
                        })
                    )
                } catch (error) {
                    
                }
            }
        }),
        activation:builder.mutation({
            query:({activation_token,activation_code})=>({
                url:"active-user",
                method:"POST",
                body:{
                    activation_code,
                    activation_token
                },
            }),
        })
    })
})


export const {useRegisterMutation,useActivationMutation} = authApi