import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import defaultAvatar from '../../../public/default_avatar.png'
import { AiOutlineCamera } from 'react-icons/ai';
import { style } from '../styles/styles';
import { useEditProfileMutation, useUpdateAvatarMutation } from '@/redux/features/user/userApi';
import { useLoadUserQuery } from '@/redux/features/api/apiSlice';
import { off } from 'process';
import toast from 'react-hot-toast';
type Props = {
    avatar: string | null;
    user: {
        courses?: [],
        email?: string,
        isVerified?: boolean,
        name?: string,
        role?: string,
        _id?: string,
        avatar?: {
            public_id: string,
            url: string
        },
    }
}

const ProfileInfo: React.FC<Props> = ({ avatar, user }) => {
    const [name, setName] = useState(user && user.name);
    const [loadUser, setLoadUser] = useState(false);
    const [updateAvatar, { isSuccess, error, isLoading }] = useUpdateAvatarMutation();
    const [editProfile, { isSuccess: success, error: updateError, isLoading: loading }] = useEditProfileMutation();
    const { } = useLoadUserQuery(undefined, { skip: loadUser ? false : true })
    const imageHandler = (e: any) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            if (fileReader.readyState === 2) {
                const avatar = fileReader.result
                updateAvatar({
                    avatar
                })
            }
        }
        fileReader.readAsDataURL(e.target.files[0]);
    }
    useEffect(() => {
        if (isSuccess || success) {
            setLoadUser(true);
        }
        if (error || updateError) {
            console.log(error)
        }
        if(success){
            toast.success("Update user info successful!")
        }
    }, [isSuccess, error, success, updateError])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (name !== "") {
            await editProfile({
                name: name,
            });
        }
    }

    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='relative w-[120px] h-[120px]'>
                    {
                        isLoading ?
                            <div className='w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full flex justify-center items-center'><svg aria-hidden="true" className="w-6 h-6 mr-2 text-white animate-spin dark:text-white fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            </div> :
                            <Image src={user.avatar ? user?.avatar?.url : defaultAvatar} width={120} height={120} alt='' className='w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full' />
                    }

                    <input type="file" name='' id='avatar' className='hidden' onChange={(e) => imageHandler(e)} accept='image/png,image.jpg,image.jpeg,image/webp' />
                    <label htmlFor="avatar">
                        <div className='w-[30px] h-[30px] dark:bg-white bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer'>
                            <AiOutlineCamera size={20} className="z-1 dark:fill-slate-900 fill-white" />
                        </div>
                    </label>
                </div>
            </div>
            <br />
            <br />
            <div className='w-full pl-6 800px:pl-10'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='800px:w-[50%] m-auto block pb-4'>
                        <div className='w-[100%]'>
                            <label htmlFor="" className='block pb-2 dark:text-white text-black'>Full Name</label>
                            <input type="text" className={`${style.input} !w-[95%] mb-4 800px:mb-0`} required value={name} defaultValue={user.name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='w-[100%] pt-2'>
                            <label htmlFor="" className='block pb-2 dark:text-white text-black'>Email Address</label>
                            <input type="text" className={`${style.input} !w-[95%] mb-4 800px:mb-0 cursor-not-allowed`} disabled required defaultValue={user.email} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <button disabled={user.name === name} type='submit' className='w-full 800px:w-[250px] h-[40px] border border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer flex items-center justify-center gap-5'>
                            {
                                loading &&
                                    <svg aria-hidden="true" className="w-6 h-6 mr-2 text-white animate-spin dark:text-white fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                               
                            }
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProfileInfo;