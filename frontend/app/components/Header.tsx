'use client'
import Link from 'next/link';
import React, { FC, use, useEffect, useState } from 'react';
import NavItems from '../utils/NavItems';
import dynamic from 'next/dynamic';
const ThemeSwitcher = dynamic(()=>import("../utils/ThemeSwitcher"),{ssr:false})
import Image from 'next/image';
import {HiOutlineMenuAlt3, HiOutlineUserCircle} from 'react-icons/hi'
import CustomModal from '../utils/CustomModal';
import Login from './Auth/Login';
import Sign_Up from './Auth/Sign_Up';
import Verification from './Auth/Verification';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import avatar from '../../public/default_avatar.png'

type Props = {
    open:boolean;
    setOpen:(open:boolean)=>any;
    activeItem:number;
    route:string;
    setRoute:(route:string)=>void
}

const Header:FC<Props> = ({open,setOpen,activeItem,route,setRoute}) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    const {user} = useSelector((state:RootState)=>state.auth)

    if(typeof window !== "undefined"){
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 80){
                setActive(true);
            }else{
                setActive(false)
            }
        })
    }

    const handleClose = (e:any) => {
        if(e.target.id === "screen"){
            setOpenSidebar(false)
        }
    }

    return (
        <div className='w-full relative'>
            <div className={`${active 
                ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
                :"w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"}`}
            >
                <div className='w-[95%] 800px:w-[92%] m-auto h-full'>
                    <div className='w-full h-[80px] flex items-center justify-between p-3'>
                        <div>
                            <Link href={"/"} className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}>
                                Quizzy Coaching Course
                            </Link>
                        </div>
                        <div className='flex items-center'>
                            <NavItems 
                                activeItem = {activeItem}
                                isMobile = {false}
                            />
                            <ThemeSwitcher />
                            {/*only for mobile*/}
                            <div className='1000px:hidden'>
                                <HiOutlineMenuAlt3
                                     className="cursor-pointer dark:text-white text-black"
                                     fill="white"
                                     size={25}
                                     onClick={() => setOpenSidebar(true)}
                                />
                            </div>
                           {
                            user ? 
                            <>
                                <Link href={'/profile'}>
                                    <Image src={user?.avatar ? user?.avatar : avatar} alt='avatar' height={20} width={20}/>
                                </Link>

                            </> : 
                            <>
                             <HiOutlineUserCircle
                                     className=" hidden 1000px:block cursor-pointer dark:text-white text-black"
                                     size={25}
                                     onClick={() => setOpen(true)}
                                />
                            </>
                            }
                        </div>
                    </div>
                </div>
                {/*mobilesidebar */}
                <div>
                    {
                        openSidebar && (
                            <div className='fixed w-full h-screen top-0 left-0 z-[999999] dark:bg-[unset] bg-[#00000024]' onClick={handleClose} id="screen">
                                <div className='w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0'>
                                    <NavItems activeItem={activeItem} isMobile={true}/>
                                    <HiOutlineUserCircle 
                                        size={25}
                                        className = 'cursor-pointer ml-5 my-2 text-black dark:text-white' 
                                        onClick= {()=>setOpen(true)}
                                        />
                                        <br />
                                        <br />
                                        <p className='text-[16px] px-2 pl-5 text-black dark:text-white'>
                                            Copyright 2023 Quizzy Coach
                                        </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                {
                    route === 'Login' && (
                        <>
                        {
                            open && (
                                <CustomModal open={open} setOpen={setOpen} setRoute={setRoute} activeItem={activeItem} component={Login}/>
                            )
                        }
                        </>
                    )
                }
                {
                    route === 'Sign-Up' && (
                        <>
                        {
                            open && (
                                <CustomModal open={open} setOpen={setOpen} setRoute={setRoute} activeItem={activeItem} component={Sign_Up}/>
                            )
                        }
                        </>
                    )
                }
                {
                    route === 'Verification' && (
                        <>
                        {
                            open && (
                                <CustomModal open={open} setOpen={setOpen} setRoute={setRoute} activeItem={activeItem} component={Verification}/>
                            )
                        }
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Header;