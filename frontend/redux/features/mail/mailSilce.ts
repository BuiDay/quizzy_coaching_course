import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Mail = {
    name: string,
    email: string,
    createdAt: string,
}

type IinitialState = {
    totalMails?: number,
    totalPages?: number,
    currentPage?: number,
    data?: Mail[]
};

const initialState: IinitialState = {
    totalMails: undefined,
    totalPages: undefined,
    currentPage: undefined,
    data: undefined
};

const mailSilce = createSlice({
    name: "mails",
    initialState,
    reducers: {
        getMails: (state, action: PayloadAction<any>) => {
            state.totalMails = action.payload.totalMails,
            state.totalPages = action.payload.totalPages,
            state.currentPage = action.payload.currentPage,
            state.data = action.payload.data
        },
    }
})

export const { getMails } = mailSilce.actions
export default mailSilce.reducer