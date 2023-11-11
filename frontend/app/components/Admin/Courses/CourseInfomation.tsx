import React, { useState } from 'react';
import { style } from '../../styles/styles';
import { spawn } from 'child_process';

interface ICourseInfo {
    name: string,
    description: string,
    price: string,
    estimatedPrice: string,
    tags: string,
    level: string,
    demoUrl: string,
    thumbnails: any
}
type Prop = {
    courseInfo: ICourseInfo
    setCourseInfo: (courseInfo: ICourseInfo) => void
    active: number
    setActive: (active: number) => void
}

const CourseInfomation: React.FC<Prop> = ({ courseInfo, setCourseInfo, active, setActive }) => {
    const [dragging, setDragging] = useState(false);
    const handleSumbit = (e: any) => {
        e.preventDefault();
        setActive(active + 1)
    }

    const handleFileChange = (e:any) => {
        const file = e.target.files?.[0];
        if(file){
            const reader = new FileReader();

            reader.onload = (e:any) => {
                if(reader.readyState === 2){
                    setCourseInfo({...courseInfo, thumbnails:reader.result})
                }
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className='w-[80%] m-auto mt-24 dark:text-white text-black'>
            <form action="" onSubmit={handleSumbit} className=''>
                <div>
                    <label htmlFor="" className={`${style.label}`}>Course Name</label>
                    <input type="name" required value={courseInfo.name} onChange={(e) => setCourseInfo({ ...courseInfo, name: e.target.value })} id="name" placeholder='Social Media' className={`${style.input}`} />
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className={`${style.label}`}>Course Description</label>
                    <textarea rows={8} cols={30} required value={courseInfo.description} onChange={(e) => setCourseInfo({ ...courseInfo, description: e.target.value })} id="description" placeholder='Social Media' className={`${style.input} !h-min !py-2`} />
                </div>
                <div className='w-full flex justify-between mt-5'>
                    <div className='w-[45%]'>
                        <label htmlFor="" className={`${style.label}`}>Course Price</label>
                        <input type="number" required value={courseInfo.price} onChange={(e) => setCourseInfo({ ...courseInfo, price: e.target.value })} id="price" placeholder='100000' className={`${style.input}`} />
                    </div>
                    <div className='w-[45%]'>
                        <label htmlFor="" className={`${style.label}`}>Course Estimated Price</label>
                        <input type="number" required value={courseInfo.estimatedPrice} onChange={(e) => setCourseInfo({ ...courseInfo, estimatedPrice: e.target.value })} id="estimatedPrice" placeholder='100000' className={`${style.input}`} />
                    </div>
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className={`${style.label}`}>Course Tags</label>
                    <input type="name" required value={courseInfo.tags} onChange={(e) => setCourseInfo({ ...courseInfo, tags: e.target.value })} id="tags" placeholder='Social Media' className={`${style.input}`} />
                </div>
                <div className='w-full flex justify-between mt-5'>
                    <div className='w-[45%]'>
                        <label htmlFor="" className={`${style.label}`}>Course Level</label>
                        <input type="text" required value={courseInfo.level} onChange={(e) => setCourseInfo({ ...courseInfo, level: e.target.value })} id="level" placeholder='100000' className={`${style.input}`} />
                    </div>
                    <div className='w-[45%]'>
                        <label htmlFor="" className={`${style.label}`}>Demo Url</label>
                        <input type="text" required value={courseInfo.demoUrl} onChange={(e) => setCourseInfo({ ...courseInfo, demoUrl: e.target.value })} id="demoUrl" placeholder='100000' className={`${style.input}`} />
                    </div>
                </div>
                <div className='w-full mt-[40px]'>
                    <input type="file" accept='image/*' id='file' className='hidden' onChange={handleFileChange}/>
                    <label htmlFor="file" className='w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center'>
                        {
                            courseInfo.thumbnails ? (<img src={courseInfo.thumbnails} className='max-h-full w-full object-cover'/>) : <span className=''>Click to browse</span>
                        }
                    </label>
                </div>
                <div className='w-full flex items-center justify-end my-5'>
                    <button type='submit' className='w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded cursor-pointer'>Next</button>
                </div>
            </form>
        </div>
    );
};

export default CourseInfomation;