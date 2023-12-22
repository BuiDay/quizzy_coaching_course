'use client'
import Link from 'next/link';
import React, { FC, use, useEffect, useState } from 'react';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {

    return (
        <div className='w-full relative'>
            <div className='bg-[#131313] p-[100px]'>
                <h1 className='text-white text-center text-[40px] font-bold'>Quizzy Học Marketing</h1>
                <h2 className='text-white text-center text-[30px] font-bold'><span className='italic mr-2'>AMAZING</span> TOGETHER</h2>
                <div className='text-white mt-[100px] flex'>
                    <div className='grow '>
                        <div>
                            @quizzystudytime
                        </div>
                        <div className='flex mt-5 gap-[-10px]'>
                            <Link href={"https://www.facebook.com/quizzystudytime"} target='_blank' rel='noopener noreferrer' className='w-[60px] h-[60px] rounded-full border border-[#ffffff1a] flex items-center justify-center cursor-pointer'>
                                <div className='social-icon'><FaFacebookF size={24} /></div>
                            </Link>
                            <Link href={"https://www.tiktok.com/@quizzystudytime?lang=vi-VN"} target='_blank' rel='noopener noreferrer' className='w-[60px] h-[60px] rounded-full border border-[#ffffff1a] flex items-center justify-center cursor-pointer'>
                                <div className='social-icon'><FaTiktok size={24} /></div>
                            </Link>
                            <Link href={"https://www.instagram.com/quizzy.studytime"} target='_blank' rel='noopener noreferrer' className='w-[60px] h-[60px] rounded-full border border-[#ffffff1a] flex items-center justify-center cursor-pointer'>
                                <div className='social-icon'><FaInstagram size={24} /></div>
                            </Link>
                        </div>
                    </div>
                    <div className='grow '>
                        <span className='p-2 bg-[#191919] tracking-wider sub-title relative'>NAVIGATION</span>
                        <ul className='mt-4 text-[14px] tracking-wider'>
                            <li className='p-1'><Link href={""}>HOME</Link></li>
                            <li className='p-1'><Link href={""}>PORTFOLIO</Link></li>
                            <li className='p-1'><Link href={""}>NEWS</Link></li>
                            <li className='p-1'><Link href={""}>ABOUT</Link></li>
                        </ul>
                    </div>
                    <div className='grow '>
                        <span className='p-2 bg-[#191919] tracking-wider sub-title relative'>CONTACT</span>
                        <ul className='mt-4 text-[14px] tracking-wider'>
                            <li className='p-1 flex justify-start items-center gap-1'><IoPhonePortraitOutline /><Link href={""}>+001 225 3351</Link></li>
                            <li className='p-1 flex justify-start items-center gap-1'><IoPhonePortraitOutline /><Link href={""}>+001 225 3351</Link></li>
                            <li className='p-1 flex justify-start items-center gap-2'><CiMail /><Link href={""}>info@dsngrid.com</Link></li>
                        </ul>
                    </div>
                    <div className='grow '>
                        <span className='p-2 bg-[#191919] tracking-wider sub-title relative'>ADDRESS</span>
                        <ul className='mt-4 text-[14px] tracking-wider'>
                            <li className='p-1'><Link href={""}>El-Mahalla El-Kubra 37</Link></li>
                            <li className='p-1'><Link href={""}>1776 Damietta</Link></li>
                            <li className='p-1'><Link href={""}>Egypt</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full h-[70px] px-[100px]'>
                <div className='w-full h-full border-t border-[#ffffff1a] flex items-center justify-center'>
                    <h4 className='text-white text-[16px]'>© 2022 Digital Agency Designed by DSN Grid</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;