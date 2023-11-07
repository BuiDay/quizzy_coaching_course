"use client"
import AdminSidebar from '@/app/components/Admin/Sidebar/AdminSidebar';
import DashboardHero from '@/app/components/Admin/Sidebar/DashboardHero';
import AdminProtects from '@/app/hooks/adminProtects';
import Heading from '@/app/utils/Heading';
import React from 'react';
import MailsTable from './mailsTable';

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
                        <div className='pt-[150px] px-[100px]'>
                            <MailsTable />
                        </div>
                    </div>
                </div>
            </div>
        </AdminProtects>
    );
};

export default page;