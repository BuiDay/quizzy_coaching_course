import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlinePlusCircle } from 'react-icons/ai';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BsLink45Deg, BsPencil } from 'react-icons/bs'
import { style } from '../../styles/styles';
import toast from 'react-hot-toast';

interface ICourseContentData {
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

type Props = {
    active: number;
    setActive: (active: number) => void
    courseContentData: ICourseContentData[]
    setCourseContentData: (courseContentData: ICourseContentData[]) => void
    handleCourseSumnit: () => void
}

const CourseContent: React.FC<Props> = ({ active, setActive, courseContentData, setCourseContentData, handleCourseSumnit }) => {

    const [isCollapsed, setIsCollapsed] = useState(
        Array((courseContentData).length).fill(false)
    )

    const [activeSection, setActionSection] = useState(1);

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    const handleCollapseToggle = (index: number) => {
        const updateCollapsed = [...isCollapsed];
        updateCollapsed[index] = !updateCollapsed[index];
        setIsCollapsed(updateCollapsed)
    }

    const handleOnchangeInput = (e: any, index: number, property: string) => {
        const updateData = [...courseContentData];
        updateData[index] = { ...updateData[index], [property]: e.target.value };
        setCourseContentData(updateData)
    }

    const handleRemoveLink = (index: number, linkIndex: number) => {
        const updateData = [...courseContentData];
        updateData[index].link.splice(linkIndex, 1);
        setCourseContentData(updateData)
    }

    const handleAddLink = (index: number) => {
        const updateData = [...courseContentData];
        updateData[index].link.push({ tilte: "", url: "" })
        setCourseContentData(updateData)
    }

    const handleAddContent = (item: ICourseContentData) => {
        if (item.title === "" || item.description === "" || item.videoUrl === "" || item.link[0].tilte === "" || item.link[0].url === "") {
            toast.error("Please fill all the fields first!");
        } else {
            let newVideoSection = "";
            if (courseContentData.length > 0) {
                const lastVideoSection = courseContentData[courseContentData.length - 1].videoSection;
                if (lastVideoSection) {
                    newVideoSection = lastVideoSection;
                }
            }
            const updateData = [...courseContentData];
            updateData.push({
                title: "",
                description: "",
                videoUrl: "",
                videoSection: newVideoSection,
                link: [{
                    tilte: "",
                    url: ""
                }],
                suggestion: ""
            })
            setCourseContentData(updateData);
        }

    }

    const handleAddNewSection = () => {
        const index = courseContentData.length - 1
        if(
            courseContentData[index].title === "" ||
            courseContentData[index].description === "" ||
            courseContentData[index].link[0].tilte === "" ||
            courseContentData[index].link[0].url === "" ||
            courseContentData[index].videoUrl === ""
        ){
            toast.error("Please fill all the fields first!");
        }else{
            const updateData = [...courseContentData];
            setActionSection(activeSection + 1);
            const newContent = {
                title: "",
                description: "",
                videoUrl: "",
                videoSection: `Untitled Section ${activeSection}`,
                link: [{
                    tilte: "",
                    url: ""
                }],
                suggestion: ""
            }
            updateData.push(newContent)
            setCourseContentData(updateData);
        }
    }

    const handleBack = () =>{
        setActive(active - 1)
    }
    const handleNext = () =>{
        const index = courseContentData.length - 1
        if(
            courseContentData[index].title === "" ||
            courseContentData[index].description === "" ||
            courseContentData[index].link[0].tilte === "" ||
            courseContentData[index].link[0].url === "" ||
            courseContentData[index].videoUrl === ""
        ){
            toast.error("Section not empty!");
        }else{
            setActive(active + 1);
            handleCourseSumnit();
        }
    }

    return (
        <div className='w-[80%] m-auto mt-24 p-3'>
            <form action="" onSubmit={handleSubmit}>
                {
                    courseContentData?.map((item: ICourseContentData, index: number) => {
                        const showSectionInput = index === 0 || item.videoSection !== courseContentData[index - 1].videoSection;
                        return (
                            <div key={index} className={`w-full bg-[#cdc8c817] p-4 ${showSectionInput ? "mt-10" : "mb-0"}`}>
                                {
                                    showSectionInput && (
                                        <>
                                            <div className='flex w-full items-center'>
                                                <input type="text" className={`text-[20px] ${item.videoSection === "Untitled Section" ? "w-[170px] " : "w-min"} font-Poppins cursor-pointer bg-transparent outline-none dark:text-white text-black`} value={item.videoSection} onChange={(e) => handleOnchangeInput(e, index, "videoSection")} />
                                                <BsPencil className="cursor-pointer dark:text-white text-black" />
                                            </div>
                                        </>
                                    )
                                }

                                <div className={`flex w-full items-center ${isCollapsed[index] ? "justify-between" : "justify-end"}  my-0 `}>
                                    {
                                        isCollapsed[index] ? (
                                            <>
                                                {
                                                    item.title ? (
                                                        <p className='font-Poppins dark:text-white text-black mt-3'>{index + 1}. {item.title}</p>
                                                    ) : (
                                                        <div></div>
                                                    )
                                                }
                                            </>
                                        ) : <></>
                                    }
                                    <div className='flex items-center justify-end'>
                                        <AiOutlineDelete className={`dark:text-white text-black text-[20px] mr-2 ${index > 0 ? "cursor-pointer" : "cursor-no-drop"}`}
                                            onClick={() => {
                                                if (index > 0) {
                                                    const updateData = [...courseContentData];
                                                    updateData.splice(index, 1);
                                                    setCourseContentData(updateData)
                                                }
                                            }} />
                                        <MdOutlineKeyboardArrowDown fontSize="large" className="cursor-pointer dark:text-white text-black" style={{ transform: !isCollapsed[index] ? "rotate(180deg)" : "rotate(0deg)" }} onClick={() => handleCollapseToggle(index)} />
                                    </div>
                                </div>

                                {
                                    !isCollapsed[index] && (
                                        <div className='mt-4'>
                                            <div className='w-full'>
                                                <label className={style.label}>Video Title</label>
                                                <input type="text" placeholder='Project Plan...' className={style.input} value={item.title} onChange={(e) => handleOnchangeInput(e, index, "title")} />
                                            </div>
                                            <div className='w-full mt-4'>
                                                <label className={style.label}>Video Url</label>
                                                <input type="text" placeholder='Video Url...' className={style.input} value={item.videoUrl} onChange={(e) => handleOnchangeInput(e, index, "videoUrl")} />
                                            </div>
                                            <div className='w-full mt-4'>
                                                <label className={style.label}>Video Descripton</label>
                                                <textarea rows={8} cols={30} placeholder='Video Descripton...' className={`${style.input} !h-min p-2`} value={item.description} onChange={(e) => handleOnchangeInput(e, index, "description")} />
                                            </div>
                                            {
                                                item?.link.map((link: { tilte: string, url: string }, linkIndex: number) => {
                                                    return (
                                                        <div className='mb-3 block' key={linkIndex}>
                                                            <div className='w-full flex items-center justify-between mt-4'>
                                                                <label htmlFor="" className={style.label}>Link {linkIndex + 1}</label>
                                                                <AiOutlineDelete className={`${linkIndex === 0 ? "cursor-no-drop" : "cursor-pointer"} text-black dark:text-white text-[20px]`} onClick={() => linkIndex === 0 ? null : handleRemoveLink(index, linkIndex)} />
                                                            </div>
                                                            <input type="text" placeholder='Source Code Title...' className={style.input} value={link.tilte} onChange={(e) => {
                                                                const updateData = [...courseContentData];
                                                                updateData[index].link[linkIndex].tilte = e.target.value;
                                                                setCourseContentData(updateData)
                                                            }} />
                                                            <input type="text" placeholder='Source Code Url...' className={`mt-[20px] ${style.input}`} value={link.url} onChange={(e) => {
                                                                const updateData = [...courseContentData];
                                                                updateData[index].link[linkIndex].url = e.target.value;
                                                                setCourseContentData(updateData)
                                                            }} />
                                                        </div>
                                                    )
                                                })
                                            }
                                            <div className='inline-block mb-4'>
                                                <p className='flex items-center text-[18px] dark:text-white text-black cursor-pointer' onClick={() => handleAddLink(index)}>
                                                    <BsLink45Deg className="mr-2" /> Add link
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                                <br />
                                {
                                    index === courseContentData.length - 1 && (
                                        <div className=''>
                                            <p className='flex items-center text-[18px] dark:text-white text-black cursor-pointer' onClick={() => handleAddContent(item)}>
                                                <AiOutlinePlusCircle className="mr-2" /> Add New Content
                                            </p>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
                <div className='flex items-center text-[20px] dark:text-white text-black cursor-pointer mt-4' onClick={()=>handleAddNewSection()}>
                    <AiOutlinePlusCircle className="mr-2" /> Add New Content
                </div>
                <div className='w-full flex items-center justify-between my-5'>
                    <button onClick={handleBack} type='submit' className='w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded cursor-pointer'>Back</button>
                    <button onClick={handleNext} type='submit' className='w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded cursor-pointer'>Next</button>
                </div>
            </form>
        </div>
    );
};

export default CourseContent;