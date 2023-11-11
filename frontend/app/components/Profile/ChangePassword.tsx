import React, { useEffect, useState } from 'react';
import { style } from '../styles/styles';
import { useChangePasswordMutation } from '@/redux/features/user/userApi';
import toast from 'react-hot-toast';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [comfirmPassword, setComfirmPassword] = useState("");
    const [changePassword,{error,isLoading,isSuccess}] = useChangePasswordMutation();

    const passwordChangeHandler = async (e: any) => {
        if(newPassword !== comfirmPassword){
            toast.error("Password not match!")
        }else{
            await changePassword({
                oldPassword,newPassword
            })
        }
    }

    useEffect(()=>{
        if(isSuccess){
            toast.success("Change password successful!")
        }
        if(error){
            if("data" in error){
                const message = error as any;
                toast.error(message.data.message)
            }
        }
    },[isSuccess,error])

    return (
        <div className='w-full pl-7 px-2 800px:px-5 800px:pl-0'>
            <h1 className='block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] pb-2'>
                Change Password
            </h1>
            <div className='w-full'>
                <form aria-required onSubmit={passwordChangeHandler} className='flex flex-col items-center'>
                    <div className='w-[100%] 800px:w-[60%] mt-5'>
                        <label className='block pb-2'>Enter your old password</label>
                        <input value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} type="password" className={`${style.input} !w-[95%] mb-4 800px:mb-0`} required />
                    </div>
                    <div className='w-[100%] 800px:w-[60%] mt-5'>
                        <label className='block pb-2'>Enter your new password</label>
                        <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="password" className={`${style.input} !w-[95%] mb-4 800px:mb-0`} required />
                    </div>
                    <div className='w-[100%] 800px:w-[60%] mt-5'>
                        <label className='block pb-2'>Enter your comfirm password</label>
                        <input value={comfirmPassword} onChange={(e) => setComfirmPassword(e.target.value)} type="password" className={`${style.input} !w-[95%] mb-4 800px:mb-0`} required />
                    </div>
                    <button type='submit' className='w-full 800px:w-[250px] h-[40px] border border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer flex items-center justify-center gap-5'>
                        {
                                isLoading &&
                                    <svg aria-hidden="true" className="w-6 h-6 mr-2 text-white animate-spin dark:text-white fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                               
                            }
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;