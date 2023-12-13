import Link from 'next/link';
import React from 'react';

export const navItemsData = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Courses",
        url: "/courses"
    },
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Policy",
        url: "/policy"
    },
    {
        name: "FAQ",
        url: "/faq"
    },
]

type Props = {
    activeItem: number
    isMobile: boolean
}

const NavItems: React.FC<Props> = ({ isMobile, activeItem }) => {
    return (
        <>
            <div className='hidden 1000px:flex'>
                {
                    navItemsData && navItemsData.map((item, index) => {
                        return (
                            <Link rel="xsa" href={item.url} key={index} passHref>
                                <span className={`${activeItem === index
                                    ? "dark:text-[#37a39a] text-[crimson]"
                                    : "dark:text-white text-black"
                                    } text-[18px] px-5 font-Poppins font-[400]`}>
                                    {item.name}
                                </span>
                            </Link>
                        )
                    })
                }
            </div>
            {
                isMobile && (
                    <div className='1000px:hidden mt-5'>
                        <div className='w-full py-5 px-[22px]'>
                            {
                                navItemsData && navItemsData.map((item, index) => {
                                    return (
                                        <Link rel="xsa" href="/" key={index} passHref>
                                            <span className={`${activeItem === index
                                                ? "dark:text-[#37a39a] text-[crimson]"
                                                : "dark:text-white text-black"
                                                } block text-[18px] py-5 font-Poppins font-[400]`}>
                                                {item.name}
                                            </span>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default NavItems;