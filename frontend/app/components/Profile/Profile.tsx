import React, { FC, useState } from 'react';
import SidebarProfile from './SidebarProfile';
import {useLogoutQuery} from '../../../redux/features/auth/authApi'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import ProfileInfo from './ProfileInfo';
import ChangePassword from './ChangePassword';

type IProps = {
    user:{
        courses?:[],
        email?:string,
        isVerified?:boolean,
        name?:string,
        role?:string,
        _id?:string,
        avatar?: {
            public_id: string,
            url: string
        },
    }
}

const Profile:FC<IProps> = ({user}) => {
    const [scroll, setScroll] = useState(false);
    const [active, setActive] = useState (1);
    const [avatar, setAvatar] = useState (null);
    const [logout, setLogout] = useState (false)
    const {} = useLogoutQuery(undefined,{
        skip:!logout ? true : false
    })
    const router = useRouter()
    const logoutHandler = async () =>{
        setLogout(true);
        toast.success("Logout successful!")
        router.push("/")
    }

    const gotoDashboard = () => {
        router.push("/admin")
    }

    if(typeof window !== "undefined"){
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 85){
                setScroll(true);
            }else{
                setScroll(false)
            }
        })
    }

    return (
        <div className='w-[85%] h-[82vh] flex mx-auto mt-[80px] dark:text-white text-black'>
            <div className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 white bg-opacity-90 border dark:border-[#ffffff1d] border-black overflow-hidden rounded-[5px] shadow-sm sticky ${scroll ? "top-[120px]" : "top-[30px]"} left-[30px]}`}>
                <SidebarProfile 
                    user = {user}
                    active = {active}
                    avatar = {avatar}
                    setActive = {setActive}
                    logoutHandler = {logoutHandler}
                    gotoDashboard = {gotoDashboard}
                />
            </div>
            {
                active === 1 && <div className='w-[75%] h-full bg-transparent'> <ProfileInfo avatar={avatar} user={user} /></div>
            }
             {
                active === 2 && <div className='w-[75%] h-full bg-transparent'> <ChangePassword/></div>
            }
        </div>
    );
};

export default Profile;