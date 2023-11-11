import Image from 'next/image';
import React from 'react';
import defaultAvatar from '../../../public/default_avatar.png'
import {RiLockPasswordLine, RiLogoutCircleRLine, RiBookOpenLine,RiDashboard2Line} from 'react-icons/ri'
import AdminProtects from '@/app/hooks/adminProtects';
import { useRouter } from 'next/router';
import AdminLink from '@/app/hooks/adminLink';

type Props = {
    user:{
        courses?:[],
        email?:string,
        isVerified?:boolean,
        name?:string,
        role?:string,
        _id?:string,
        avatar?:{
            public_id:string,
            url:string
        },
    },
    active:number,
    avatar:string | null,
    setActive:(active: number)=>void,
    logoutHandler:any,
    gotoDashboard: () => void
}

const SidebarProfile:React.FC<Props> = ({user, active, avatar, setActive, logoutHandler,gotoDashboard}) => {
    return (
        <div className='w-full'>
            <div className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 1 ? "dark:bg-slate-800 bg-white" : "bg-transparent"}`} onClick={()=>setActive(1)}>
                <Image 
                    src={user.avatar ? user?.avatar?.url : defaultAvatar} alt='avatar'
                    width={40}
                    height={40}
                    className='w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full' />
                    <h5 className='pl-2 800px:block hidden font-Poppins dark:text-white light:text-black'>
                        My Account
                    </h5>
            </div>
            <div className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 2 ? "dark:bg-slate-800 bg-white": "bg-transparent"}`} onClick={()=>setActive(2)}>
                <RiLockPasswordLine size={20} fill = "#fff" />
                <h5 className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'>
                    Change Password
                </h5>
            </div>
            <div className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 3 ? "dark:bg-slate-800 bg-white": "bg-transparent"}`} onClick={()=>setActive(3)}>
                <RiBookOpenLine size={20} fill = "#fff" />
                <h5 className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'>
                    Enrolled Courses
                </h5>
            </div>
            <AdminLink>
                <div className={`w-full flex items-center px-3 py-4 cursor-pointer`} onClick={()=>gotoDashboard()}>
                    <RiDashboard2Line size={20} fill = "#fff" />
                    <h5 className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'>
                        Dashboard
                    </h5>
                </div>
            </AdminLink>
            <div className={`w-full flex items-center px-3 py-4 cursor-pointer`} onClick={()=>logoutHandler()}>
                <RiLogoutCircleRLine size={20} fill = "#fff" />
                <h5 className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'>
                    Logout
                </h5>
            </div>
            
        </div>
    );
};

export default SidebarProfile;