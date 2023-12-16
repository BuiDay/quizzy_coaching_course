import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

const PanelSocial = () => {
    return (
        <div className='fixed bottom-[70px] right-[20px] z-50'>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <div className='flex flex-col gap-6 justify-center items-center'>
                    <Link href={"https://www.facebook.com/quizzystudytime"} target='_blank' rel='noopener noreferrer' className='cursor-pointer flex relative social-item text-[#2B3235]'>
                        <span className='absolute right-[10px] social-title'>Facebook</span>
                        <div className='social-icon'><FaFacebookF size={20} /></div>
                    </Link>
                    <Link  href={"https://www.tiktok.com/@quizzystudytime?lang=vi-VN"}  target='_blank' rel='noopener noreferrer' className='cursor-pointer flex relative social-item text-[#2B3235]'>
                        <span className='absolute right-[10px] social-title'>Tiktok</span>
                        <div className='social-icon'><FaTiktok size={20} /></div>
                    </Link>
                    <Link href={"https://www.instagram.com/quizzy.studytime"} target='_blank' rel='noopener noreferrer' className='cursor-pointer flex relative social-item text-[#2B3235]'>
                        <span className='absolute right-[10px] social-title'>Instagram</span>
                        <div className='social-icon'><FaInstagram size={20} /></div>
                    </Link>
                </div>
                <div className='w-[1px] h-[50px] bg-[#2B3235]'></div>
                <div className='' style={{ writingMode: "vertical-rl" }}>
                    <span className='text-[#2B3235] uppercase font-semibold text-[14px] tracking-widest'>Follow Us</span>
                </div>
            </div>
        </div>
    );
};

export default PanelSocial;