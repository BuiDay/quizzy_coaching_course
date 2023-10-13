import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup'
import { style } from '../styles/styles';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
interface IProps {
    setRoute: (route: string) => void
}

const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Please enter your email!"),
    password: Yup.string().required("Please enter your password!").min(6)
})

const Login: React.FC<IProps> = () => {
    const [show, setShow] = useState(false)
    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: schema,
        onSubmit: async ({ email, password }) => {
            console.log(email, password)
        }
    })
    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <div className='w-full'>
            <h1 className={`${style.title}`}>
                Login with Elearning
            </h1>
            <form onSubmit={handleSubmit}>
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
                <div className='w-fu;; mt-3 relative mb-1'>
                    <label htmlFor="password" className={`${style.label}`}>
                        Enter your password
                    </label>
                    <input type={!show ? "password" : "text"} name='' value={values.password} onChange={handleChange} id="password" placeholder='login@email.com'
                        className={`${errors.password && touched.password && "border-red-500"} ${style.input}`}
                    />
                    {
                        !show ? (
                            <AiOutlineEyeInvisible
                                className='absolute bottom-3 right-2 z-1 cursor-pointer' size={20} onClick={() => setShow(true)} />
                        ) : <AiOutlineEye
                            className='absolute bottom-3 right-2 z-1 cursor-pointer' size={20} onClick={() => setShow(false)} />
                    }
                    {
                        errors.password && touched.password && (
                            <span className='text-red-500 pt-2 block'>{errors.password}</span>
                        )
                    }
                </div>
            </form>
        </div>
    );
};

export default Login;