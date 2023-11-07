'use client'
import React from 'react';
import Heading from '../utils/Heading';
import AdminSidebar from '../components/Admin/Sidebar/AdminSidebar';
import AdminProtects from '../hooks/adminProtects';
import DashboardHero from '../components/Admin/Sidebar/DashboardHero';

const page = () => {
    return (
        <AdminProtects>
        <div>
            <Heading
                title='Quizzy Coaching Course - Admin'
                description='Kinh nghiệm 2 năm trong lĩnh vực Social Media Marketing, hiện đang là Project Manager tại 1 công ty Canada, từng là Social Media Executive tại Zing News và sỡ hữu hơn 140K followers trên các kênh Social'
                keywords='Social Media Marketing'
            />
            <div className='flex h-[100vh]'>
                <div className='1500px:w-[16%] w-1/5'>
                    <AdminSidebar />
                </div>
                <div className='w-[85%]'>
                    <DashboardHero />
                </div>
            </div>
        </div>
        </AdminProtects>
    );
};

export default page;