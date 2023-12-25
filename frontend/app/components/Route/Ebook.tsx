import Image from 'next/image';
import React from 'react';
import { TbCircleDotFilled } from "react-icons/tb";
import Avatar_1 from '../../../public/4.jpg'
import Avatar_2 from '../../../public/5.jpg'

const Ebook = () => {
    return (
        <div className="w-full">
            <div className="h-full w-full bg-[#191919] 1300px:px-[300px] px-[100px] py-[100px]">
                <div className="w-full flex justify-between px-[70px]">
                    <div>
                        <div className="flex items-center gap-3 text-white">
                            <TbCircleDotFilled size={24} />
                            <span className=" text-[18px] tracking-wider font-semibold">
                                Eook
                            </span>
                        </div>
                        <span className=" text-white text-[38px] tracking-wider">
                            LET’S CHECK <strong>OUR</strong> <br />{" "}
                            <strong>SERVICES</strong>
                        </span>
                    </div>
                    <div>
                        <span className=" text-[14px] tracking-wider text-white">
                            VIEW ALL SERVICES
                        </span>
                    </div>
                </div>
                <div className='w-full mt-[50px] px-[70px]'>
                    <div className='w-full flex'>
                        <div className='w-[50%]'>
                            <div className='w-[50%] m-auto'>
                                <Image className='object-cover' src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2155723878/settings_images/1dc30f-b1b-66dc-a45-d3d7fe8b17a5_All_mockups.png" alt='' width={1000} height={1000}/>
                            </div>
                            <div className='mt-[30px]'>
                                <h2 className='text-white text-[30px] font-semibold text-center'>QCC Ebook</h2>
                                <div className='text-white'>
                                    <p className='text-[24px] text-center'>The system to outrun your competition</p>
                                    <ul className='text-[18px] pl-[50px] mt-[20px]' style={{listStyle:"initial"}}>
                                        <li>THE PERFECT WORKFLOW</li>
                                        <li>TASKS PLANNER</li>
                                        <li>CONTENT SCHEDULER</li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        <div className='w-[50%] flex justify-center items-center'>
                            <div className='border-[1px] border-[#ffffff1a] rounded-3xl overflow-hidden'>
                                <div className='text-white p-[30px]'>
                                    <h5 className='text-[32px] text-center font-semibold'>Token Sale End In</h5>
                                    <div className='flex justify-center items-center gap-[50px] mt-[30px]'>
                                        <div className='flex justify-center items-center flex-col'>
                                            <div className='bg-[#ffffff1a] w-[70px] h-[70px] flex justify-center items-center rounded-xl'>
                                                <span className='text-[32px] font-semibold'>21</span>
                                            </div>
                                            <span className='text-[20px] font-semibold'>Days</span>
                                        </div>
                                        <div className='flex justify-center items-center flex-col'>
                                            <div className='bg-[#ffffff1a] w-[70px] h-[70px] flex justify-center items-center rounded-xl'>
                                                <span className='text-[32px] font-semibold'>00</span>
                                            </div>
                                            <span className='text-[20px] font-semibold'>Hours</span>
                                        </div>
                                        <div className='flex justify-center items-center flex-col'>
                                            <div className='bg-[#ffffff1a] w-[70px] h-[70px] flex justify-center items-center rounded-xl'>
                                                <span className='text-[32px] font-semibold'>00</span>
                                            </div>
                                            <span className='text-[20px] font-semibold'>Mins</span>
                                        </div>
                                        <div className='flex justify-center items-center flex-col'>
                                            <div className='bg-[#ffffff1a] w-[70px] h-[70px] flex justify-center items-center rounded-xl'>
                                                <span className='text-[32px] font-semibold'>00</span>
                                            </div>
                                            <span className='text-[20px] font-semibold'>Secs</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='mt-[10px] p-[20px]'>
                                        <div className='flex justify-between text-white p-4'>
                                            <div>
                                                1,450 Tokens
                                            </div>
                                            <div>
                                            150,000 Tokens
                                            </div>
                                        </div>
                                        <div className='w-full h-[30px] rounded-3xl p-[6px] relative' style={{background:"rgb(252, 97, 167)"}}>
                                            <div className='w-[40%] h-full rounded-3xl' style={{background:"rgba(0, 0, 0, 0.4"}}></div>
                                            <div className='absolute top-[-5px] left-[14%] h-[40px] w-[2px] bg-white z-20'></div>
                                            <div className='absolute top-[-5px] right-[14%] h-[40px] w-[2px] bg-white z-20'></div>
                                            <div className='absolute top-[-5px] right-[50%] h-[40px] w-[2px] bg-white z-20'></div>
                                        </div>
                                        <div className='flex justify-center text-white p-4'>
                                            <div>
                                                50,00 Tokens
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center text-white bg-[#ffffff1a]'>
                                            <div className='cursor-pointer py-3'>
                                               Go to Detail
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className='flex justify-center mt-[30px]'>
                                   <div className='px-[30px] py-[10px] bg-[#ffffff1a] w-fit text-white rounded-3xl text-[18px] cursor-pointer'>
                                        Buy Now
                                   </div>
                                </div>
                </div>
            </div>
        </div>
    );
};

export default Ebook;