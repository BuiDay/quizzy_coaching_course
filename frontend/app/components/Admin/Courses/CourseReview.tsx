import React from 'react';
import CoursePlayer from './CoursePlayer';
import { style } from '../../styles/styles';
import Rating from '../../Rating/Rating';

type Props = {
    active: number;
    setActive: (active: number) => void
    courseData: {
        name?: string,
        description?: string,
        price?: string,
        estimatedPrice?: string,
        tags?: string,
        level?: string,
        demoUrl?: string,
        thumbnails?: string,
        benefits?: { title: string }[],
        prerequisites?: { title: string }[],
        courseData? : {
            title: string,
            description: string,
            videoUrl: string,
            videoSection: string,
            link:
            {
                tilte: string,
                url: string
            }[],
            suggestion: string,
        }[],
    }
    handleCreateCourse: () => void
}

const CourseReview:React.FC<Props> = ({active,setActive,courseData,handleCreateCourse}) => {

    const discountPercentenge = ((Number(courseData?.estimatedPrice) - Number(courseData?.price)) / Number(courseData?.estimatedPrice) * 100);
    const discountPercentengePrice = discountPercentenge.toFixed(0);

    const handleBack = () => {
        setActive(active - 1)
    }

    const handleNext = () => {
        let checkNull = false;
        setActive(active + 1)
    }

    return (
        <div className='w-[90%] m-auto py-5 mb-5 dark:text-white text-black'>
            <div className='w-full relative '>
                <div className='w-full mt-10'>
                    <CoursePlayer videoUrl={courseData?.demoUrl} title={courseData?.name}/>
                </div>
                <div className='flex items-center mt-4 gap-4'>
                    <h1 className='text-[25px]'>{courseData?.price && Number(courseData?.price) === 0 ? "Free" : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format( Number(courseData.price))}</h1>
                    <h5 className='text-[20px] line-through opacity-50'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format( Number(courseData.estimatedPrice))}</h5>
                    {/* <h4 className='text-[20px] '>{discountPercentengePrice}%</h4> */}
                </div>
                <div className='flex items-center'>
                    <div className={`${style.button} !w-[180px] my-3 font-Poppins !bg-[crimson] cursor-not-allowed`}>
                        Buy Now
                    </div>
                </div>
                <div className='flex items-center justify-end mr-[100px]'>
                    <input type="text" placeholder='Discount code...' className={`${style.input} !w-[30%] ml-3 !mt-0`}/>
                    <div className={`${style.button} !w-[180px] my-3 ml-4 font-Poppins cursor-pointer`}>
                        Apply
                    </div>
                </div>
                <p className='pb-1'>Source code included</p>
                <p className='pb-1'>Full lifetime access</p>
                <p className='pb-1'>Certificate of completion</p>
                <p className='pb-1'>Premium Support</p>
            </div>
            <div className='w-[90%]'>
                <div className='w-full 800px:pr-5'>
                    <h1 className='text-[25px] font-Poppins font-[600]'>{courseData?.name}</h1>
                    <div className='flex items-center justify-between pt-3'>
                        <Rating rating={5}/>
                        <h5>0 Review</h5>
                    </div>
                    <h5 className='mt-2'>0 Student</h5>
                </div>
            </div>
            <div className='w-[90%] mt-4'>
                <h1 className='text-[25px] font-Poppins font-[600]'> What are the benefits for students in this coures?</h1>
                <ul className="list-disc">
                   {
                  courseData.benefits && courseData.benefits.map((item:{title:string}, index:number)=>{
                        return(
                            <li className="ml-5" key={index}>{item.title}</li>
                        )
                    })
                   }
                </ul>
            </div>
            <div className='w-[90%] mt-4'>
                <h1 className='text-[25px] font-Poppins font-[600]'>What are the prerequisites for start in this coures??</h1>
                <ul className="list-disc">
                   {
                  courseData.prerequisites && courseData.prerequisites.map((item:{title:string}, index:number)=>{
                        return(
                            <li className="ml-5" key={index}>{item.title}</li>
                        )
                    })
                   }
                </ul>
            </div>
            <div className='w-[90%]'>
                   <h1 className='text-[25px] font-Poppins font-[600]'>Course Details</h1>
                   <p>{courseData.description}</p>
            </div>
            <div className='w-[90%] flex items-center justify-between my-5'>
                <button onClick={handleBack} type='submit' className='w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded cursor-pointer'>Back</button>
                <button onClick={handleNext} type='submit' className='w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded cursor-pointer'>Create Course</button>
            </div>
        </div>
    );
};

export default CourseReview;