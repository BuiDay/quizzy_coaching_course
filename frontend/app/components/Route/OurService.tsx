import React from "react";
import { TbCircleDotFilled } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa6";
import Image from "next/image";
import About from "../../../public/about-3.jpg";
import { FaCheck } from "react-icons/fa";
const OurService = () => {
    return (
        <div className="w-full">
            <div className="h-full w-full bg-[#131313] 1300px:px-[300px] px-[100px]">
                <div className="border-l-[1px] border-r-[1px] border-[#ffffff1a] w-full py-[100px] px-[70px]">
                    <div className="w-full flex justify-between">
                        <div>
                            <div className="flex items-center gap-3 text-white">
                                <TbCircleDotFilled size={24} />
                                <span className=" text-[18px] tracking-wider font-semibold">
                                    ADVANTAGES
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
                    <div className="w-full mt-[60px] flex gap-[30px]">
                        <div className="grow">
                            <div className="border py-[60px] px-[40px] border-[#ffffff1a] flex flex-col gap-5">
                                <div className="service-items__icon relative">
                                    <FaRegLightbulb color={"#ffe7e7"} size={60} />
                                    <div className="service-items__number">01</div>
                                </div>
                                <h5 className="text-white text-[24px] font-medium tracking-wider">
                                    DIGITAL PRODUCTS
                                </h5>
                                <p className="text-white border-t-[1px] border-[#ffffff1a] py-[20px] text-[16px]">
                                    Web design encompasses many different skills and disciplines
                                    in the production of all web.
                                </p>
                                <a className="text-white">LEARN MORE</a>
                            </div>
                        </div>

                        <div className="grow pt-[100px]">
                            <div className="border py-[60px] px-[40px] border-[#ffffff1a] flex flex-col gap-5">
                                <div className="service-items__icon relative">
                                    <FaRegLightbulb color={"#ffe7e7"} size={60} />
                                    <div className="service-items__number">02</div>
                                </div>
                                <h5 className="text-white text-[24px] font-medium tracking-wider">
                                    WEB DEVELOPMENT
                                </h5>
                                <p className="text-white border-t-[1px] border-[#ffffff1a] py-[20px] text-[16px]">
                                    Web design encompasses many different skills and disciplines
                                    in the production of all web.
                                </p>
                                <a className="text-white">LEARN MORE</a>
                            </div>
                        </div>

                        <div className="grow pt-[200px]">
                            <div className="border py-[60px] px-[40px] border-[#ffffff1a] flex flex-col gap-5">
                                <div className="service-items__icon relative">
                                    <FaRegLightbulb color={"#ffe7e7"} size={60} />
                                    <div className="service-items__number">03</div>
                                </div>
                                <h5 className="text-white text-[24px] font-medium tracking-wider">
                                    UI-UX DESIGN
                                </h5>
                                <p className="text-white border-t-[1px] border-[#ffffff1a] py-[20px] text-[16px]">
                                    Web design encompasses many different skills and disciplines
                                    in the production of all web.
                                </p>
                                <a className="text-white">LEARN MORE</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-[150px] flex max-h-[600px]">
                        <div className="w-full grow ">
                            <Image src={About} alt="" className="object-cover" />
                        </div>
                        <div className="w-full flex grow">
                            <div className="bg-[#191919] max-h-[600px] w-full text-white p-[60px]">
                                <div className="my-[20px]">
                                    <div className="flex items-center gap-3 text-white">
                                        <TbCircleDotFilled size={24} />
                                        <span className=" text-[18px] tracking-wider font-semibold">
                                            ADVANTAGES
                                        </span>
                                    </div>
                                    <span className=" text-white text-[38px] tracking-wider">
                                        LET’S CHECK <strong>OUR</strong> <br />{" "}
                                        <strong>SERVICES</strong>
                                    </span>
                                </div>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum. Sed ut perspiciatis unde omnis iste natus sit .</p>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                <div className="my-[20px] flex flex-col gap-5">
                                    <div className="flex items-center gap-5 bg-[#131313] px-4 py-2">
                                       <FaCheck />
                                       <span> Beautiful and easy to understand UI</span>
                                    </div>
                                    <div className="flex items-center gap-5 bg-[#131313] px-4 py-2">
                                       <FaCheck />
                                       <span> Beautiful and easy to understand UI</span>
                                    </div>
                                    <div className="flex items-center gap-5 bg-[#131313] px-4 py-2">
                                       <FaCheck />
                                       <span> Beautiful and easy to understand UI</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;
