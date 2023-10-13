import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup'
import { style } from '../styles/styles';
import { AiOutlineEyeInvisible, AiOutlineEye, AiFillGithub } from 'react-icons/ai'
import { FcGoogle} from 'react-icons/fc'

interface IProps {
    setRoute: (route: string) => void
}

const schema = Yup.object().shape({
    name:Yup.string().required("Please enter your name!"),
    email: Yup.string().email("Invalid email").required("Please enter your email!"),
    password: Yup.string().required("Please enter your password!").min(6)
})

const Sign_Up: React.FC<IProps> = ({setRoute}) => {
    const [show, setShow] = useState(false)
    const formik = useFormik({
        initialValues: {name:"", email: "", password: "" },
        validationSchema: schema,
        onSubmit: async ({ name,email, password }) => {
            console.log(email, password)
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
                <div className='w-full mt-5'>
                    <input type="submit" value="Login" className={`${style.button}`} onClick={()=>setRoute("Verification")}/>
                </div>
                <br />
                <h5 className='text-center pt-4 font-Poppins text-[14px] text-black dark:text-white'>
                    Or join with
                </h5>
                <div className='flex items-center justify-center my-3'>
                    <FcGoogle size={30} className="cursor-pointer mr-2"/>
                    <AiFillGithub size={30} className="cursor-pointer ml-2 dark:text-white"/>
                </div>
                <h5 className='text-center pt-4 font-Poppins text-[14px] dark:text-white'>
                    Already have an account?{""}
                    <span className='text-[#2190ff] pl-1 cursor-pointer'
                        onClick={()=>setRoute("Login")}>
                        Sign in
                    </span>
                </h5>
            </form>
        </div>
    );
};

export default Sign_Up;