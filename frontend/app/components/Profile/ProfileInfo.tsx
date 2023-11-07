import Image from 'next/image';
import React, { useState } from 'react';
import defaultAvatar from '../../../public/default_avatar.png'
import { AiOutlineCamera } from 'react-icons/ai';
import { style } from '../styles/styles';
type Props = {
    avatar:string | null;
    user:{
        courses?:[],
        email?:string,
        isVerified?:boolean,
        name?:string,
        role?:string,
        _id?:string,
        avatar?:string,
    }
}

const ProfileInfo:React.FC<Props> = ({avatar, user}) => {
    const [name, setName] = useState("")
    const imageHandler = () =>{

    }
    const handleSubmit = () => {
        
    }
    return (
        <>
        <div className='w-full flex justify-center'>
            <div className='relative w-[120px] h-[120px]'>
                <Image src={user?.avatar || defaultAvatar} alt='' className='w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full'/>
                <input type="file" name='' id='avatar' className='hidden' onChange={imageHandler} accept='image/png,image.jpg,image.jpeg,image/webp'/>
                <label htmlFor="avatar">
                    <div className='w-[30px] h-[30px] dark:bg-white bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer'>
                        <AiOutlineCamera size={20} className = "z-1 dark:fill-slate-900 fill-white"/>
                    </div>
                </label>
            </div>
        </div>
        <br/>
        <br/>
        <div className='w-full pl-6 800px:pl-10'>
            <form action="" onSubmit={handleSubmit}>
                <div className='800px:w-[50%] m-auto block pb-4'>
                    <div className='w-[100%]'>
                        <label htmlFor="" className='block pb-2 dark:text-white text-black'>Full Name</label>
                        <input type="text" className={`${style.input} !w-[95%] mb-4 800px:mb-0`} required  defaultValue={user.name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='w-[100%] pt-2'>
                        <label htmlFor="" className='block pb-2 dark:text-white text-black'>Email Address</label>
                        <input type="text" className={`${style.input} !w-[95%] mb-4 800px:mb-0`} required  defaultValue={user.email} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <input type="submit" value="Update" className='w-full 800px:w-[250px] h-[40px] border border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer'/>
                </div>
            </form>
        </div>
        </>
    );
};

export default ProfileInfo;