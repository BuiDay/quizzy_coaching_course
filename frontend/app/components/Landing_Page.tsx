import React from 'react';
import Image from 'next/image';
import QuizzyImage from "public/mobile_quizzy.png"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';



const Landing_Page = () => {
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

    const handleCollectionEmail = async (values:any) => {
        try {
            toast.loading('Waiting...');
            const {data} = await axios({
                method: 'post',
                url: '/api/v1/collection-mail',
                data: 
                    values
              })
              if(data.success){
                formik.resetForm();
                toast.dismiss();
                toast.success('Successfully created!');
              }else{
                toast.dismiss();
                toast.error('This is an error!');
              }
              
        } catch (error:any) {
            toast.dismiss();
            toast.error(error.response.data.message.toString());
        }
    }
 
    return (
        <div className='w-full 800px:h-screen bg-gradient-to-r from-[#fff7ad] via-[#ffa7a9] to-[#fc61a7]'>
            <Toaster position="bottom-center" reverseOrder={false}/>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='1000px:flex items-center justify-center'>  
                    <div className='max-w-[400px] max-h-[700] h-full w-full m-auto'>
                        <Image src={QuizzyImage} alt='quizzy' width={400} height={500}/>
                    </div>
                    <div className='p-4'>
                    <div className='bg-white max-w-[700px] max-h-[800px] h-full p-5 rounded-2xl'>
                        <h1 className='800px:text-[36px] text-[20px]' style={{color:"#fc61a7",fontWeight:"bold",textAlign:"center"}}>Đăng kí nhận Template Content Calendar miễn phí🌟💝</h1>
                        <div className='800px:text-[18px] text-[14px] flex flex-col gap-4 mt-5 text-justify' style={{color:"#fc61a7"}}>
                            <p>Mình đã tổng hợp <span className='text-[#f05658] font-bold'> 2-3 mẫu Content Calendar</span> thông dụng trong quá trình lên plan, schedule lịch đăng dành cho các bạn làm<span className='text-[#f05658] font-bold'> Social Media hoặc đơn giản bạn muốn quản lí lịch trình cho kênh của mình.</span></p>
                            <p>Template mình tổng hợp có tích hợp cả Excel ở phần <span className='text-[#f05658] font-bold'>Draft Date, Published Date và End Date</span> nên bạn vui lòng điền đủ ngày để sử dụng được Calendar nhé!</p>
                            <p>Bạn vui lòng điền đúng thông tin dưới đây, mình sẽ gửi bạn thông tin template ngay lập tức nhé, bạn nhớ check mục <span className='text-[#f05658] font-bold'>“Spam”</span> và <span className='text-[#f05658] font-bold'>“Promotion”</span> giúp mình nha!</p>
                            <p>Bạn <span className='text-[#f05658] font-bold'>nhớ check kĩ email trước khi bấm “Đăng kí ”</span> nha, sai email là không nhận được đâu đó huhu!</p>
                        </div>
                        <div>
                        <form action="" className='flex flex-col gap-1 mt-4' spellCheck="false" onSubmit={formik.handleSubmit}>
                            <div>
                                <input type="text"
                                    name='name'
                                    placeholder='Họ và tên của bạn:'
                                    className={`input-ld 800px:text-[18px] text-[14px]`}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                            </div>
                            <div className="error">
                                {
                                    formik.touched.name && formik.errors.name ? (
                                        <div className='800px:text-[18px] text-[14px]'>{formik.errors.name}</div>
                                    ) : null
                                }
                            </div>
                            <div className='mt-3'>
                                <input type="email"
                                    name='email'
                                    placeholder='Nhập email của bạn:'
                                    className={`input-ld 800px:text-[18px] text-[14px]`}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </div>
                            <div className="error">
                                {
                                    formik.touched.email && formik.errors.email ? (
                                        <div className='800px:text-[18px] text-[14px]'>{formik.errors.email}</div>
                                    ) : null
                                }
                            </div>

                            <div className="flex justify-center mt-4">
                                <button type='submit' className={`button-ld border-0`}>ĐĂNG KÍ NHẬN TEMPLATE</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                 

                </div>
            </div>
        </div>
    );
};

export default Landing_Page;