import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup'
import { style } from '../styles/styles';
import { AiOutlineEyeInvisible, AiOutlineEye, AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import toast from 'react-hot-toast';

interface IProps {
    setRoute: (route: string) => void
}

const schema = Yup.object().shape({
    name: Yup.string().required("Please enter your name!"),
    email: Yup.string().email("Invalid email").required("Please enter your email!"),
    password: Yup.string().required("Please enter your password!").min(6)
})

const Sign_Up: React.FC<IProps> = ({ setRoute }) => {
    const [show, setShow] = useState(false);
    const [register, { isError, isSuccess, data, isLoading }] = useRegisterMutation();

    console.log(isError, isSuccess, data, isLoading)

    useEffect(() => {
        if (isSuccess) {
            const messeage = data?.message || "Registation successfull!"
            toast.success(messeage)
            setRoute("Verification")
        }
        if (isError) {
            const messeage = data?.message || "Registation error!"
            toast.error(messeage)
        }
    }, [, isSuccess, isError])

    const formik = useFormik({
        initialValues: { name: "", email: "", password: "" },
        validationSchema: schema,
        onSubmit: async ({ name, email, password }) => {
            const data = { name, email, password }
            await register(data)
        }
    })

    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <div className='w-full'>
            <h1 className={`${style.title}`}>
                Join with Elearning
            </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className={`${style.label}`}>
                    Enter your name
                </label>
                <input type="text" name='' value={values.name} onChange={handleChange} id="name" placeholder='ABC'
                    className={`${errors.name && touched.name && "border-red-500"} ${style.input}`}
                />
                {
                    errors.name && touched.name && (
                        <span className='text-red-500 pt-2 block'>{errors.name}</span>
                    )
                }
                <label htmlFor="email" className={`${style.label}`}>
                    Enter your email
                </label>
                <input type="email" name='' value={values.email} onChange={handleChange} id="email" placeholder='login@email.com'
                    className={`${errors.email && touched.email && "border-red-500"} ${style.input}`}
                />
                {
                    errors.email && touched.email && (
                        <span className='text-red-500 pt-2 block'>{errors.email}</span>
                    )
                }
                <div className='w-full mt-3 relative mb-1'>
                    <label htmlFor="password" className={`${style.label}`}>
                        Enter your password
                    </label>
                    <input type={!show ? "password" : "text"} name='' value={values.password} onChange={handleChange} id="password" placeholder='Password'
                        className={`${errors.password && touched.password && "border-red-500"} ${style.input}`}
                    />
                    {
                        !show ? (
                            <AiOutlineEyeInvisible
                                className='absolute top-[45px] right-2 z-1 cursor-pointer dark:text-white' size={20} onClick={() => setShow(true)} />
                        ) : <AiOutlineEye
                            className='absolute top-[45px] right-2 z-1 cursor-pointer dark:text-white' size={20} onClick={() => setShow(false)} />
                    }
                    {
                        errors.password && touched.password && (
                            <span className='text-red-500 pt-2 block'>{errors.password}</span>
                        )
                    }
                </div>
                <div className='w-full mt-5 '>
                    <button type="submit" className={`${style.button} disabled:opacity-50`} disabled={isLoading ? true : false}>
                        {
                            isLoading && <svg aria-hidden="true" className="w-6 h-6 mr-2 text-white animate-spin dark:text-white fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        }
                        Register
                    </button>
                </div>
                <br />
                <h5 className='text-center pt-4 font-Poppins text-[14px] text-black dark:text-white'>
                    Or join with
                </h5>
                <div className='flex items-center justify-center my-3'>
                    <FcGoogle size={30} className="cursor-pointer mr-2" />
                    <AiFillGithub size={30} className="cursor-pointer ml-2 dark:text-white" />
                </div>
                <h5 className='text-center pt-4 font-Poppins text-[14px] dark:text-white'>
                    Already have an account?{""}
                    <span className='text-[#2190ff] pl-1 cursor-pointer'
                        onClick={() => setRoute("Login")}>
                        Sign in
                    </span>
                </h5>
            </form>
        </div>
    );
};

export default Sign_Up;