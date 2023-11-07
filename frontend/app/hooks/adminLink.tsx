import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
interface ProtectProps{
    children:JSX.Element;
}

const AdminLink:React.FC<ProtectProps> = ({children}) => {
    const {user} = useSelector((state:RootState)=>state.auth);
    if( user?.role === "admin"){
        return (
           <>{children}</>
        );
    }
};

export default AdminLink;