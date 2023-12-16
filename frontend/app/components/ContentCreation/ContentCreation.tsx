import React from 'react';
import Image from 'next/image';
import Calandar from "public/content-creation.png"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { LazyMotion, domAnimation, m, motion } from "framer-motion"
import PanelSocial from '../Common/PanelSocial';
import { FaRegCircle, FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from 'next/link';


const ContentCreation = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Vui lòng nhập tên của bạn!'),
            email: Yup.string().email('Email của bạn không đúng').required('Vui lòng nhập email của bạn!'),
        }),
        onSubmit: values => {
            handleCollectionEmail(values)
        },
    });

    const handleCollectionEmail = async (values: any) => {
        try {
            toast.loading('Waiting...');
            const { data } = await axios({
                method: 'post',
                url: 'http://localhost:8888/api/v1/collection-mail-content-creation',
                data:
                    values
            })
            if (data.success) {
                formik.resetForm();
                toast.dismiss();
                toast.success('Successfully created!');
            } else {
                toast.dismiss();
                toast.error('This is an error!');
            }

        } catch (error: any) {
            toast.dismiss();
            toast.error(error.response.data.message.toString());
        }
    }

    return (
        <div className='w-full min-h-screen h-full bg-[white] 800px:pt-[20px] py-[20px]'>
            <PanelSocial />
            <Toaster position="bottom-center" reverseOrder={false} />
            <div className='background-overlay bg-pattern absolute left-0 top-0 w-100 h-100'></div>
            <div className='text-[#2B3235] 1500px:px-[200px] 1000px:px-[100px] px-[50px] 800px:mb-[25px] mb-[10px]'>
                <LazyMotion features={domAnimation}>
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    >
                        <h1 className='1100px:text-[48px] 800px:text-[40px] text-[32px] text-left font-extrabold'>Đăng kí nhận <br /> <span className='text-[#FC61A7]'>Template Content Creation </span> miễn phí</h1>
                        <div className='flex items-center gap-1 w-fit sub-item'>
                            <FaRegCircle size={14} className="sub-icon__RegCircle " />
                            <Link href={"/"} className='text-[14px] text-left font-light w-fit' style={{ borderBottom: "1px solid gray" }}>Nhận Template Content Calendar Miễn Phí</Link>
                        </div>
                    </m.div>
                </LazyMotion>
            </div>
            <div className='w-full h-full flex 800px:flex-row flex-col items-center justify-center 800px:justify-start gap-[-20px] 800px:pr-[50px]'>
                <motion.div
                    initial={{ height: 1, y: 0 }}
                    animate={{ height: "auto", y: 0 }}
                    transition={{ ease: "easeOut", duration: 2, delay: 1 }}
                >
                    <div className='w-full max-w-[1200px] relative'>
                        <motion.div
                            initial={{ x: -2000, y: 0 }}
                            animate={{ x: 0 }}
                            transition={{ ease: "easeOut", duration: 1 }}
                        >
                            <div className='absolute bg-[white] 800px:block hidden w-[107%] h-full top-0 left-0 border-[3px] border-[#2B3235]' style={{ borderLeft: "2px solid white", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}></div>
                        </motion.div>
                        <div className=' relative z-20 w-full 800px:text-[22px] text-[14px] flex flex-col gap-4 text-justify 1500px:pl-[200px] 1000px:pl-[100px] px-[50px] 800px:py-[30px] py-[20px] text-[#2B3235]'>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className=' w-full flex justify-center'
                            >
                                <div className='max-w-[300px]'>
                                    <Image src={Calandar} alt='Calandar'></Image>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 2 }}
                            >
                                <p>Chào bạn, cảm ơn bạn đã quan tâm đến tài liệu của mình! Mình đã tổng hợp cực kì chi tiết các<span className='text-[#FC61A7] font-bold'> CTA, HOOK, SCRIPT TEMPLATE với hơn 100 mẫu chi tiết</span> để bạn áp dụng cho tất cả các lĩnh vực.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 2.5 }}
                            >
                                <p>Bên cạnh đó, mình còn <span className='text-[#FC61A7] font-bold'>BONUS</span> thêm cho bạn <span className='text-[#FC61A7] font-bold'>1 SOCIAL SCHEDULING SHEET cho 30 ideas/tháng </span>để bạn áp dụng. Tài liệu do mình tổng hợp cực kì chất lượng luôn nên bạn đừng bỏ lỡ nhé!</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 3 }}
                            >
                                <p>Bạn vui lòng điền đúng thông tin dưới đây, mình sẽ gửi bạn thông tin template ngay lập tức nhé, bạn nhớ check mục <span className='text-[#FC61A7] font-bold'>“Spam”</span> và <span className='text-[#FC61A7] font-bold'>“Promotion”</span> giúp mình nha!</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 3.5 }}
                            >
                                <p>Bạn <span className='text-[#FC61A7] font-bold'>nhớ check kĩ email trước khi bấm “Đăng kí ”</span> nha, sai email là không nhận được đâu đó!</p>
                            </motion.div>
                        </div>

                    </div>
                </motion.div>

                <div className='z-30'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 4 }}
                    >
                        <div className='800px:border-[3px] border-[#2B3235] bg-[white] p-[30px] w-full rounded-xl'>
                            <form action="" className='flex flex-col gap-[1px] min-w-[300px] w-full' spellCheck="false" onSubmit={formik.handleSubmit}>
                                <div>
                                    <input type="text"
                                        name='name'
                                        placeholder='Họ và tên của bạn:'
                                        className={`input-ld 800px:text-[18px] text-[16px]`}
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                    />
                                </div>

                                <div className="error h-[20px]">
                                    {
                                        formik.touched.name && formik.errors.name ? (
                                            <div className='800px:text-[18px] text-[16px]'>{formik.errors.name}</div>
                                        ) : null
                                    }
                                </div>
                                <div className='mt-3'>
                                    <input type="email"
                                        name='email'
                                        placeholder='Nhập email của bạn:'
                                        className={`input-ld 800px:text-[18px] text-[16px]`}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                </div>

                                <div className="error h-[2px]">
                                    {
                                        formik.touched.email && formik.errors.email ? (
                                            <div className='800px:text-[18px] text-[16px]'>{formik.errors.email}</div>
                                        ) : null
                                    }
                                </div>

                                <div className="flex justify-center mt-[40px]">
                                    <button type='submit' className={`button-ld w-full py-[10px] px-[10px] border-[#2B3235] border-[3px] bg-[#2B3235] text-white`}><span className='font-bold'>ĐĂNG KÍ NHẬN TEMPLATE</span></button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default ContentCreation;