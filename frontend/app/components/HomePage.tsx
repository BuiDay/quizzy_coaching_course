import React from 'react';
import Image from 'next/image';

import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { LazyMotion, domAnimation, m, motion } from "framer-motion"
import PanelSocial from './Common/PanelSocial';
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import Calandar from "public/calendar.png"
import Creation from "public/content-creation.png"
const HomePage = () => {

    return (
        <div className='w-full min-h-screen h-full bg-[white] 800px:pt-[20px] py-[40px] md:flex md:justify-center md:items-center flex flex-col items-center'>
            <PanelSocial color='#2B3235' />
            <div className='background-overlay bg-pattern absolute left-0 top-0 w-100 h-100'></div>
            <div className='xl:w-[85%] lg:w-[95%] md:w-[100%] flex lg:flex-row flex-col gap-[30px] relative lg:px-[0px] px-[20px]'>
                <div className='lg:w-[50%] h-full md:flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='lg:h-[250px] lg:w-[250px] md:h-[200px] md:w-[200px] h-[200px] w-[200px] rounded-full border-[3px] overflow-hidden bg-white'>
                            <Image className='object-cover scale-125' src={'https://res.cloudinary.com/dlqieazbj/image/upload/v1705303401/k9fkoloa9dhy70myncsl.png'} alt='quizzy' width={500} height={1000}></Image>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='md:text-[38px] text-[30px] font-extrabold hero__major-title text-center'>Quizzy Học Marketing</h1>
                        </div>
                        <div className='lg:px-[0px] px-[30px] md:text-[18px] text-[16px]'>
                            <ul className='list-disc flex flex-col gap-[10px]'>
                                <li>2+ năm kinh nghiệm trong lĩnh vực Social Media Marketing/Personal Branding</li>
                                <li>Sỡ hữu hệ sinh thái đa nền tảng hơn 150.000 followers</li>
                                <li>Founder QCC Mastery Hub - khoá học dạy trực tiếp online Social Media & Content Foundation</li>
                                <li>Social Media Manager & Project Manager tại Futur Growth (Based in Canada)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%] flex justify-center items-center'>
                    <div className='flex flex-col gap-10 w-full items-center justify-center'>
                        <Link href={'/content-calendar'} className='bg-[#2B3235] rounded-xl items-shadow cursor-pointer flex items-center py-[10px] px-4 w-[90%] justify-center gap-5'>
                            <h2 className='text-white font-medium md:text-[18px] text-[14px]'>Nhận Template Content Calendar Miễn Phí</h2>
                        </Link>
                        <Link href={'/content-creation'} className='bg-[#2B3235] rounded-xl items-shadow cursor-pointer flex items-center py-[10px] px-4 w-[90%] justify-center gap-5'>
                            <h2 className='text-white font-medium md:text-[18px] text-[14px]'>Nhận Template Content Creation Miễn Phí</h2>
                        </Link>
                        <Link href={'/action-cta'} className='bg-[#2B3235] rounded-xl items-shadow cursor-pointer flex items-center py-[10px] px-4 w-[90%] justify-center gap-5'>
                            <h2 className='text-white font-medium md:text-[18px] text-[14px]'>Nhận CTA Template Miễn Phí</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;