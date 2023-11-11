import React, { useState } from 'react';

interface ICourseContentData{
    title: string,
    description: string,
    videoUrl: string,
    videoSection: string,
    link: {
            tilte: string,
            url: string
        }[]
    ,
    suggestion: string
}

type Props={
    active:number;
    setActive:(active:number)=>void
    courseContentData:ICourseContentData[]
    setCourseContentData: (courseContentData:ICourseContentData[]) => void
    handleCourseSumnit: () => void
}

const CourseContent:React.FC<Props> = ({active, setActive, courseContentData, setCourseContentData, handleCourseSumnit}) => {

    const [isCollapsed, setIsCollapsed] = useState(
        Array((courseContentData).length).fill(false)
    )

    const [activeSection, setActionSection] = useState(1);

    const handleSubmit = (e:any) =>{
        e.preventDefault();
    }

    return (
        <div className='w-[80%] m-auto mt-24 p-3'>
            <form action="" onSubmit={handleSubmit}>
                {
                    courseContentData?.map((item:ICourseContentData,index:number)=>{
                        const showSectionInput = index === 0 || item.videoSection !== courseContentData[index - 1].videoSection;
                        return (
                            <div className={`w-full bg-[#cdc8c817] p-4 ${showSectionInput ? "mt-10" : "mb-0"}`}>
                                <div className='flex w-full items-center justify-center my-0'>
                                    {
                                        isCollapsed[index] ? (
                                            <>
                                            {
                                                item.title ? (
                                                    <p className='font-Poppins'>{index+1}. {item.title}</p>
                                                ) : (
                                                    <></>
                                                )
                                            }
                                            </>
                                        ): <></>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    );
};

export default CourseContent;