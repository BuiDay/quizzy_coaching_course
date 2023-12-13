import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const HeroV1 = () => {


    return (
        <div className='h-screen md:p-[90px] p-0 w-full'>
            <div className='h-full w-full'>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper h-full w-full"
                >
                    <SwiperSlide className='cover-bg-img'>
                        <Image className='object-cover' src={require("../../../public/1.jpg")} alt=''></Image>
                        <div className='absolute bottom-0 left-0 z-30 p-[100px]'>
                            <div className='flex flex-col gap-[5px] max-w-[500px] w-full'>
                                <h3 className='text-white text-[20px]'>Production</h3>
                                <h1 className='text-white text-[80px] font-semibold'>HEADPHONES</h1>
                                <p className='text-white'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ex deserunt reprehenderit id sapiente animi maiores perferendis.
                                </p>
                                <p className='text-white mt-5'>Buy Now</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='cover-bg-img'>
                        <Image className='object-cover' src={require("../../../public/2.jpg")} alt=''></Image>
                        <div className='absolute bottom-0 left-0 z-30 p-[100px]'>
                            <div className='flex flex-col gap-[5px] max-w-[500px] w-full'>
                                <h3 className='text-white text-[20px]'>Production</h3>
                                <h1 className='text-white text-[80px] font-semibold'>DOG CHOW</h1>
                                <p className='text-white'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ex deserunt reprehenderit id sapiente animi maiores perferendis.
                                </p>
                                <p className='text-white mt-5'>Buy Now</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='cover-bg-img'>
                        <Image className='object-cover' src={require("../../../public/3.jpg")} alt=''></Image>
                        <div className='absolute bottom-0 left-0 z-30 p-[100px]'>
                            <div className='flex flex-col gap-[5px] max-w-[500px] w-full'>
                                <h3 className='text-white text-[20px]'>Production</h3>
                                <h1 className='text-white text-[80px] font-semibold'>OPEN RUN</h1>
                                <p className='text-white'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ex deserunt reprehenderit id sapiente animi maiores perferendis.
                                </p>
                                <p className='text-white mt-5'>Buy Now</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div>
                    <div className="prev text-white">

                        <svg className="arrow v-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.214 23.057">
                            <g fill="white" stroke-linecap="square" stroke-width="1">
                                <path d="M23.528 11.685h-20M16.685 19.528l8-8-8-8"></path>
                            </g>
                        </svg>
                        <svg className="circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g className="circle-wrap" fill="white" stroke-width="1" stroke-linejoin="round" stroke-miterlimit="10">
                                <circle cx="12" cy="12" r="10.5"></circle>
                            </g>
                        </svg>

                    </div>
                    <div className="next text-white">
                        <div className='h-[40px] w-[40px]'>
                            <GoArrowRight size={40} />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default HeroV1;