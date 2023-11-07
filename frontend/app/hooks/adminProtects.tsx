import { RootState } from '@/redux/store';
import { redirect } from 'next/navigation';
import React from 'react';
import { ReactNode } from "react";
import { useSelector } from 'react-redux';

interface ProtectProps{
    children:ReactNode;
}
const AdminProtects = ({children}:ProtectProps) => {

    const {user} = useSelector((state:RootState)=>state.auth);
    if(user){
        const isAdmin = user?.role === "admin";
        return isAdmin ? children : redirect("/");
    }
};

export default AdminProtects;