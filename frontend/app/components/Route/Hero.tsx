import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { motion } from "framer-motion";
import { AiOutlineRight} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Hero = () => {
    const ref = useRef(null);
    useEffect(()=>{
        const title = "Quizzy Marketing";
        const arrTitle = title.split("");
        const temp:any = ref.current        
        var x = [""];
        arrTitle.forEach((name, i) => {
            setTimeout(() => {
                x.push(name)
                temp.innerHTML = x.join("")
            }, i * 150);
           });
    },[])

    return (
        // <div className='w-full 1000px:flex items-center overflow-hidden'>
        //     <div className="hero absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] hero_animation rounded-full ml-[50px] "></div>
        //     <div className='1000px:w-[40%] flex 1000px:min-h-[90vh] items-center justify-center pt-[70px] 1000px:pt-[0] z-10'>
        //         <Image src={require("../../../public/hero.png")} alt="" className='object-contain 1100px:max-w-[80%] w-[70%] 1500px:max-w-[85%] h-[auto] z-[10]'/> 
        //     </div>
        //     <motion.div className='1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]' 
        //         initial={{ opacity: 0, scale: 0.5 }}
        //         animate={{ opacity: 1, scale: 1 }}
        //         transition={{
        //           duration: 0.3,
        //           ease: [0, 0.71, 0.2, 1.01],
        //           scale: {
        //             type: "spring",
        //             damping: 5,
        //             stiffness: 100,
        //             restDelta: 0.001
        //           }
        //         }}
        //     >
        //         <h2 className='dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[600px] typewriter'>
        //             Improve Your online Learning Experience Better Instantly
        //         </h2>
        //         <br />
        //         <p className='dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]'>
        //             We have 40k+ Online courses & 500k+ Online registered student. Find your desired Coures from them.
        //         </p>
        //         <br />
        //         <br />
        //         <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative'>
        //             <input type="search" placeholder='Search Courses....' className='bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#000004e] dark:text-[#fffffe6] text-[20px] font-[500] font-Josefin'/>
        //             <div className='absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]'>
        //                 <BiSearch className="text-white" size={30}/>
        //             </div>
        //         </div>
        //         <br />
        //         <br />
        //         <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] flex item-center'>
        //             <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
        //                 <Image src={require("../../../public/avatars/1.png")} alt="" width={100} height={100} className='rounded-full border-[3px]'/>
        //             </div>
        //             <div className='w-[40px] h-[40px] overflow-hidden rounded-full ml-[-10px]'>
        //             <Image src={require("../../../public/avatars/1.png")} alt="" width={100} height={100} className='rounded-full border-[3px]'/>
        //             </div>
        //             <div className='w-[40px] h-[40px] overflow-hidden rounded-full ml-[-10px]'>
        //             <Image src={require("../../../public/avatars/1.png")} alt="" width={100} height={100}className='rounded-full border-[3px]'/>
        //             </div>
                    
        //             <p className='font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600] flex items-center ml-[10px]'>
        //                 500K+ People already trusted us. {" "}
        //                 <Link href="/courses" className='dark:text-[#46e256] text-[crimson] ml-3'>
        //                    View Courses
        //                 </Link>{""}
        //             </p>
        //         </div>
        //     </motion.div>
        //     <br/>
        // </div>
        <div className='w-screen h-screen flex items-center justify-center bg-black'>
            <div className='bg-gradient-to-tr from-zinc-900 via-zinc-900 to-zinc-800 h-[90%] w-[90%]'>
                <div className='flex w-full h-full justify-between p-[80px]'>
                    <div className='w-[48%]'>
                        <div className='flex items-center font-bold'>
                            <span className='text-zinc-500 text-[48px]'><AiOutlineRight/></span>
                            <div className='flex items-center h-[65px]'>
                                <h1 ref={ref} id='title_type' className='font-Poppins text-white tracking-widest text-[52px] transition-all'></h1>
                                <div className='cursor_bottom h-full'></div>
                            </div>

                        </div>
                        <div className='mt-[50px]' style={{lineHeight:"55px"}}>
                            <div className='flex'>
                                <h2 className='text-[52px] font-Poppins text-white tracking-widest font-extrabold hero__major-title'> Social Media</h2> <span className=' font-extrabold text-zinc-500 text-[52px] font-Poppins ml-5'>&</span>
                            </div>
                          
                            <h2 className='text-[52px] font-Poppins text-white tracking-widest font-extrabold hero__major-title'> Content Creator</h2>
                        </div>
                        <div className='mt-[50px] text-left'>
                            <span className='font-Poppins text-white text-[24px]'>Kinh nghiệm 2 năm trong lĩnh vực Social Media Marketing, hiện đang là Project Manager tại 1 công ty Canada, từng là Social Media Executive tại Zing News và sỡ hữu hơn 140K followers trên các kênh Social</span>
                        </div>
                        <div className='social mt-[100px]'>
                            <div className='flex gap-20'>
                                <div className='flex items-center gap-3'>
                                    <FaFacebookSquare size={60} className="text-pink-400"/>
                                    <div>
                                        <p className='text-white text-[16px]'>14k</p>
                                        <p className='text-white text-[16px]'>Follower</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                <FaFacebookSquare size={60} className="text-pink-400"/>
                                    <div>
                                        <p className='text-white text-[16px]'>14k</p>
                                        <p className='text-white text-[16px]'>Follower</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaFacebookSquare size={60} className="text-pink-400"/>
                                    <div>
                                        <p className='text-white text-[16px]'>14k</p>
                                        <p className='text-white text-[16px]'>Follower</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[48%] flex justify-center'>
                        <div className='hero__img w-[70%] relative'>
                            <Image className='object-cover z-10 absolute top-0 left-0' src={require("../../../public/IMG_0778.JPG")} alt='quizzy'/> 
                            <div className='w-full h-full absolute top-[10px] left-[10px] bg-white z-1'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;