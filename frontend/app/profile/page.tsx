'use client'
import React, { useState } from 'react';
import Heading from '../utils/Heading';
import UserProtects from '../hooks/userProtects';
import Header from '../components/Header';
import Profile from '../components/Profile/Profile';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Page = () => {
    const {user} = useSelector((state:RootState)=>state.auth);
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState("Login");

    return (
        <div>
            <UserProtects>
            <Heading
                title='Quizzy Coaching Course - Admin'
                description='Kinh nghiệm 2 năm trong lĩnh vực Social Media Marketing, hiện đang là Project Manager tại 1 công ty Canada, từng là Social Media Executive tại Zing News và sỡ hữu hơn 140K followers trên các kênh Social'
                keywords='Social Media Marketing'
            />
            <Header
                open={open}
                setOpen={setOpen}
                activeItem={activeItem}
                setRoute={setRoute}
                route={route}
            />
            {
                user && <Profile user={user}/>
            }
            
            </UserProtects>
        </div>

    );
};

export default Page;