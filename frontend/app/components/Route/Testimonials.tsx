import Image from 'next/image';
import React from 'react';
import { TbCircleDotFilled } from "react-icons/tb";
import Avatar_1 from '../../../public/4.jpg'
import Avatar_2 from '../../../public/5.jpg'

const Testimonials = () => {
    return (
        <div className="w-full">
            <div className="h-full w-full bg-[#191919] 1300px:px-[300px] px-[100px] py-[100px]">
                <div className="w-full flex justify-between px-[70px]">
                    <div>
                        <div className="flex items-center gap-3 text-white">
                            <TbCircleDotFilled size={24} />
                            <span className=" text-[18px] tracking-wider font-semibold">
                                TESTIMONIALS
                            </span>
                        </div>
                        <span className=" text-white text-[38px] tracking-wider">
                            WHAT PEOPLE <strong>ARE</strong> <br />{" "}
                            <strong>SAYING</strong>
                        </span>
                    </div>
                    <div>
                        <span className=" text-[14px] tracking-wider text-white">
                            VIEW ALL SERVICES
                        </span>
                    </div>
                </div>
                <div className='w-full flex px-[70px] gap-10 text-white mt-[50px]'>
                    <div className='border grow border-[#ffffff1a] '>
                        <div className='p-[30px]'>
                            <p>
                                This theme is awesome and the designer is very helpful.
                                I
                                had a
                                few
                                questions
                                purchase. He/She helped me with all the doubts. Also,
                                they
                                provide
                                quick
                                support. Thank you so much for a beautiful theme
                            </p>
                            <div className='border-t-[1px] border-[#ffffff1a] mt-[30px] py-[15px] flex items-center gap-5'>
                                <div className='h-[60px] w-[60px] rounded-full overflow-hidden flex'>
                                    <Image src={Avatar_1} alt='' className=' object-cover'/>
                                </div>
                                <div className='flex flex-col text-white text-[18px]'>
                                    <span className='font-semibold tracking-wider'>Bill Grander</span>
                                    <span className='tracking-wider'>Student</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border grow border-[#ffffff1a] '>
                        <div className='p-[30px]'>
                            <p>
                                This theme is awesome and the designer is very helpful.
                                I
                                had a
                                few
                                questions
                                purchase. He/She helped me with all the doubts. Also,
                                they
                                provide
                                quick
                                support. Thank you so much for a beautiful theme
                            </p>
                            <div className='border-t-[1px] border-[#ffffff1a] mt-[30px] py-[15px] flex items-center gap-5'>
                                <div className='h-[60px] w-[60px] rounded-full overflow-hidden flex'>
                                    <Image src={Avatar_2} alt='' className=' object-cover'/>
                                </div>
                                <div className='flex flex-col text-white text-[18px]'>
                                    <span className='font-semibold tracking-wider'>Bill Grander</span>
                                    <span className='tracking-wider'>Student</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;