import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    token: "",
    user: ""
};

const authSilce = createSlice({
    name:"auth",
    initialState,
    reducers:{
        userRegistration:(state, action)=>{
            state.token = action.payload.token;
        },
        userLoggedIn:(state, action)=>{
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        userLoggedOut:(state, action)=>{
            state.token = "";
            state.user = "";
        }
    }
})

export const {userRegistration, userLoggedIn, userLoggedOut} = authSilce.actions
export default authSilce.reducer