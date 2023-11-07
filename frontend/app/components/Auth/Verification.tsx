import React, { useEffect, useRef, useState } from 'react';
import { Toast } from 'react-hot-toast';
import { style } from '../styles/styles';
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useActivationMutation } from '@/redux/features/auth/authApi';
import toast from 'react-hot-toast';

type IProps = {
    setRoute: (route: string) => void
}

type VerifyNumber = {
    "0": string,
    "1": string,
    "2": string,
    "3": string,
}

const Verification: React.FC<IProps> = ({ setRoute }) => {
    const [invalidError, setInvalidError] = useState<boolean>(false);
    const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
        0: "",
        1: "",
        2: "",
        3: "",
    })
    const [tokenAuth, setTokenAuth] = useState<string>("");
    const { token } = useSelector((state: RootState) => state.auth)
    const [activation, { isError, isLoading, error, isSuccess }] = useActivationMutation();
    const inputRef = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

    useEffect(() => {
        if (isSuccess) {
            toast.success("Account activated successfull!");
            setRoute("Login");
        }
        if (isError) {
            const err = error as any;
            const message = err.data.message || "An error occured";
            toast.error(message);
            setInvalidError(true);
        }
    }, [isError, isSuccess])

    const verificationHandler = async () => {
        const verificationNumber = Object.values(verifyNumber).join("");
        if (verificationNumber.length !== 4) {
            setInvalidError(true);
            return;
        }
        await activation({
            activation_token: token,
            activation_code: verificationNumber
        })
    }

    const handleInputChange = (index: number, value: string) => {
        setInvalidError(false);
        const newVerifyNumber = { ...verifyNumber, [index]: value }
        setVerifyNumber(newVerifyNumber);
        if (value === '' && index > 0) {
            inputRef[index - 1].current?.focus();
        } else if (value.length === 1 && index < 3) {
            inputRef[index + 1].current?.focus();
        }
    }
    return (
        <div>
            <h1 className={`${style.title}`}>
                Verify your Account
            </h1>
            <br />
            <div className='w-full flex items-center justify-center mt-2'>
                <div className='w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center'>
                    <VscWorkspaceTrusted size={40} />
                </div>
            </div>
            <br />
            <br />
            <div className='1100px:w-[70%] m-auto flex items-center justify-around'>
                {
                    Object.keys(verifyNumber).map((key, index) => (
                        <input type="text" key={key} ref={inputRef[index]} className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${invalidError ? "shake border-red-500" : "dark:border-white border-[#0000004a]"}`} placeholder='' maxLength={1} value={verifyNumber[key as keyof VerifyNumber]} onChange={(e) => handleInputChange(index, e.target.value)} />
                    ))
                }
            </div>
            <br />
            <br />
            <div className='w-full flex justify-center'>
                <button className={`${style.button} disabled:opacity-50`} onClick={verificationHandler} disabled={isLoading ? true : false}>
                    {
                        isLoading && <svg aria-hidden="true" className="w-6 h-6 mr-2 text-white animate-spin dark:text-white fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    }
                    Verify OTP
                </button>
            </div>
            <br />
            <h5 className='text-center pt-4 font-Poppins text-[14px] text-black dark:text-white'>
                Go back to sign in? {" "}
                <span className='text-[#2190ff] pl-1 cursor-pointer' onClick={() => setRoute("Login")}>
                    Sign in
                </span>
            </h5>
        </div>
    );
};

export default Verification;