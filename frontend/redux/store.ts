'use client'
import {configureStore} from '@reduxjs/toolkit'
import { apiSlice } from './features/api/apiSlice'
import authSlice from './features/auth/authSlice'
import mailsSlice from './features/mail/mailSilce'

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:authSlice,
        mails:mailsSlice
    },
    devTools:false,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

const initializeApp = async () => {
    await store.dispatch(apiSlice.endpoints.refreshToken.initiate({},{forceRefetch:true}))
    await store.dispatch(apiSlice.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initializeApp();
export type RootState = ReturnType<typeof store.getState>