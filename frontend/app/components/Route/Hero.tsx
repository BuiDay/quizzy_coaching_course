import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSearch } from 'react-icons/bi';


const Hero = () => {
    return (
        <div className='w-full 1000px:flex items-center'>
            <div className="hero absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] hero_animation rounded-full ml-[50px] "></div>
            <div className='1000px:w-[40%] flex 1000px:min-h-[90vh] items-center justify-center pt-[70px] 1000px:pt-[0] z-10'>
                <Image src={require("../../../public/hero.png")} alt="" className='object-contain 1100px:max-w-[80%] w-[70%] 1500px:max-w-[85%] h-[auto] z-[10]'/> 
            </div>
            <div className='1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]'>
                <h2 className='dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[600px] typewriter'>
                    Improve Your online Learning Experience Better Instantly
                </h2>
                <br />
                <p className='dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]'>
                    We have 40k+ Online courses & 500k+ Online registered student. Find your desired Coures from them.
                </p>
                <br />
                <br />
                <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative'>
                    <input type="search" placeholder='Search Courses....' className='bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#000004e] dark:text-[#fffffe6] text-[20px] font-[500] font-Josefin'/>
                    <div className='absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]'>
                        <BiSearch className="text-white" size={30}/>
                    </div>
                </div>
                <br />
                <br />
                <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] flex item-center'>
                    <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
                        <Image src={require("../../../public/avatars/1.png")} alt="" width={100} height={100} className='rounded-full border-[3px]'/>
                    </div>
                    <div className='w-[40px] h-[40px] overflow-hidden rounded-full ml-[-10px]'>
                    <Image src={require("../../../public/avatars/1.png")} alt="" width={100} height={100} className='rounded-full border-[3px]'/>
                    </div>
                    <div className='w-[40px] h-[40px] overflow-hidden rounded-full ml-[-10px]'>
                    <Image src={require("../../../public/avatars/1.png")} alt="" width={100} height={100}className='rounded-full border-[3px]'/>
                    </div>
                    
                    <p className='font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600] flex items-center ml-[10px]'>
                        500K+ People already trusted us. {" "}
                        <Link href="/courses" className='dark:text-[#46e256] text-[crimson] ml-3'>
                           View Courses
                        </Link>{""}
                    </p>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default Hero;