import { RootState } from '@/redux/store';
import { useTheme } from 'next-themes';
import { Box, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import { ArrowForwardIos, ArrowBackIos, BarChartOutlined, HomeOutlined,Settings,MapOutlined,Groups,ManageHistory,ReceiptOutlined,VideoCall,OndemandVideo,Web,Quiz,Wysiwyg,PeopleOutlined} from "./icon";
import defaultAvatar from '../../../../public/default_avatar.png'
import Image from 'next/image';


interface itemProps {
    title: string;
    to: string;
    icon: JSX.Element,
    selected: string,
    setSelected: any
}

const Item: React.FC<itemProps> = ({ title, to, icon, selected, setSelected}) => {
    return (
        <MenuItem active={selected === title} onClick={() => setSelected(title)} icon={icon}>  
             <Link href={to}>
            <Typography className='!text-[14px] !font-Poppins'>{title}</Typography>
            </Link>
        </MenuItem>
    )
}

const AdminSidebar = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const [logout, setLogout] = useState(false);
    const [isCollapsed, setCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null
    }

    const logoutHandler = () => {
        setLogout(true);
    }
    console.log(isCollapsed)
    return (
        <Box className="!bg-white dark:bg-[#111C43]"
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${theme === "dark" ? "#111C43 !important" : "#fff !important"}`,
                },
                "& .ps-sidebar-container": {
                    backgroundColor: `${theme === "dark" ? "#111C43 !important" : "#fff !important"}`,
                },
                "& .ps-menu-button:hover": {
                    backgroundColor:"transparent !important",
                    color: "#868dfb !important",
                },
                "& .ps-active": {
                    color: "#6870fa !important"
                },
                "& .ps-menu-button": {
                    padding: "5px 20px 5px 20px !important",
                    opacity: 1,
                },
                "& .ps-menuitem-root": {
                    color: `${theme === "dark" ? "#fff !important" : "#000"}`
                }
            }}>
            <Sidebar collapsed={isCollapsed} style={{ position: "fixed", top: '0', left: "0", height: "100vh", width: isCollapsed ? "0" : "10%" }}>
                <Menu>
                    <MenuItem icon={isCollapsed ? <ArrowForwardIos className='text-black dark:text-[#ffffffc1]' onClick={() => setCollapsed(!isCollapsed)}/> : undefined}>
                        {!isCollapsed && (
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Link href='/'>
                                    <h3 className='text-[24px] font-Poppins uppercase dark:text-white text-black'>E-Learning</h3>
                                </Link>
                                <IconButton onClick={() => setCollapsed(!isCollapsed)} className='block' style={{padding:"0"}}>
                                    <ArrowBackIos className='text-black dark:text-[#ffffffc1]' />
                                </IconButton>
                            </Box>
                        )
                        }
                    </MenuItem>
                    {
                        !isCollapsed && (
                            <Box mb="25px" mt="15px">
                                <Box display="flex" justifyContent="center" alignItems="center" >
                                    <Image style={{ cursor: "pointer", borderRadius: "50%", border: "3px solid #5b5fe6", width: "50px" }} src={user?.avatar ? user.avatar : defaultAvatar} alt='avatar' height={50} width={50} />
                                </Box>
                                <Box textAlign="center">
                                    <Typography variant='h4' className='!text-[20px] text-black dark:text-[#ffffffc1]' sx={{ m: "10px 0 0 0 " }}>
                                        {user?.name}
                                    </Typography>
                                    <Typography variant='h6' sx={{ m: "10px 0 0 0" }} className='!text-[20px] text-black dark:text-[#ffffffc1] capitalize'>
                                        {user?.role}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    }
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Typography variant='h5' sx={{ m: "15px 0 5px 0px" }} className='!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]'>
                            {!isCollapsed && "Home"}
                        </Typography>
                        <Item title='Dashboard' to="/admin" icon={<HomeOutlined />} selected={selected} setSelected={setSelected} />
                        <Typography variant='h5' sx={{ m: "15px 0 5px 0px" }} className='!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]'>
                            {!isCollapsed && "Data"}
                        </Typography>
                        <Item title='User' to="/admin/users" icon={<Groups />} selected={selected} setSelected={setSelected} />
                        <Item title='Collection Mails' to="/admin/collection-mails" icon={<Groups />} selected={selected} setSelected={setSelected} />
                        <Item title='Invoices' to="/admin/invoices" icon={<ReceiptOutlined />} selected={selected} setSelected={setSelected} />
                        <Typography variant='h5' sx={{ m: "15px 0 5px 0px" }} className='!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]'>
                            {!isCollapsed && "Content"}
                        </Typography>
                        <Item title='Create Course' to="/admin/create-course" icon={<VideoCall />} selected={selected} setSelected={setSelected} />
                        <Item title='Live Course' to="/admin/courses" icon={<OndemandVideo />} selected={selected} setSelected={setSelected} />
                        <Typography variant='h5' sx={{ m: "15px 0 5px 0px" }} className='!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]'>
                            {!isCollapsed && "Customization"}
                        </Typography>
                        <Item title='Hero' to="/admin/hero" icon={<Web />} selected={selected} setSelected={setSelected} />
                        <Item title='FAQ' to="/fag" icon={<Quiz />} selected={selected} setSelected={setSelected} />
                        <Item title='Categories' to="/admin/categories" icon={<Wysiwyg />} selected={selected} setSelected={setSelected} />
                        <Typography variant='h5' sx={{ m: "15px 0 5px 0px" }} className='!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]'>
                            {!isCollapsed && "Controllers"}
                        </Typography>
                        <Item title='Manage Team' to="/admin/team" icon={<PeopleOutlined />} selected={selected} setSelected={setSelected} />
                        <Typography variant='h5' sx={{ m: "15px 0 5px 0px" }} className='!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]'>
                            {!isCollapsed && "Analytics"}
                        </Typography>
                        <Item title='Courses Analytics' to="/admin/courses-analytics" icon={<BarChartOutlined />} selected={selected} setSelected={setSelected} />
                        <Item title='Orders Analytics' to="/admin/orders-analytics" icon={<MapOutlined />} selected={selected} setSelected={setSelected} />
                        <Item title='Users Analytics' to="/admin/users-analytics" icon={<ManageHistory />} selected={selected} setSelected={setSelected} />
                        <Typography variant='h5' sx={{ m: "15px 0 5px 0px" }} className='!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]'>
                            {!isCollapsed && "Extras"}
                        </Typography>
                        <Item title='Setting' to="/admin/setting" icon={<Settings />} selected={selected} setSelected={setSelected} />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default AdminSidebar;