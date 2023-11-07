import { redirect } from 'next/navigation';
import React from 'react';
import { ReactNode } from "react";
import UserAuth from './userAuth';

interface ProtectProps{
    children:ReactNode;
}
const UserProtects = ({children}:ProtectProps) => {
    const idAuthenticated = UserAuth()
    if(idAuthenticated){
        return idAuthenticated ? children : redirect("/");
    }
};

export default UserProtects;