import React, { useEffect, useState } from 'react';
import CourseInfomation from './CourseInfomation';
import CourseOptions from './CourseOptions';
import CourseData from './CourseData';
import CourseContent from './CourseContent';
import CourseReview from './CourseReview';
import { useCreateCourseMutation } from '@/redux/features/courses/coursesApi';
import toast from 'react-hot-toast';

type Props = {

}

const CreateCourse = (props: Props) => {
    const [active, setActive] = useState(0);
    const [CreateCourse, {isLoading, isSuccess,error}] = useCreateCourseMutation()
    
    useEffect(()=>{
        if(isSuccess){
            toast.success("Create course successfully!")
        }
        if(error){
            if("data" in error){
                const errorMessage = error as any;
                toast.error(errorMessage.data.message)
            }
        }
    },[isSuccess, error])
    
    const [courseInfo, setCourseInfo] = useState({
        name: "",
        description: "",
        price: "",
        estimatedPrice: "",
        tags: "",
        level: "",
        demoUrl: "",
        thumbnails: ""
    })
    const [benefits, setBenefits] = useState([{ title: "" }]);
    const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
    const [courseContentData, setCourseContentData] = useState([{
        title: "",
        description: "",
        videoUrl: "",
        videoSection: "Untitled Section",
        link: [
            {
                tilte: "",
                url: ""
            }
        ],
        suggestion: "",
    }])
    const [courseData, setCourseData] = useState({});

    const handleCourseSumnit = async() =>{
       const data = {
        name:courseInfo.name,
        description: courseInfo.description,
        price: courseInfo.price,
        estimatedPrice: courseInfo.estimatedPrice,
        tags: courseInfo.tags,
        level: courseInfo.level,
        demoUrl: courseInfo.demoUrl,
        thumbnail: courseInfo.thumbnails,
        benefits:benefits,
        prerequisites:prerequisites,
        courseData:courseContentData
       }
       setCourseData(data)
    } 
    const handleCreateCourse = async () => {
        await CreateCourse(courseData)
    }

    console.log(courseData)
    
    return (
        <div className='w-full flex min-h-screen'>
            <div className='w-[80%]'>
                {
                    active === 0 && (
                        <CourseInfomation 
                            courseInfo = {courseInfo}
                            setCourseInfo= {setCourseInfo}
                            active = {active}
                            setActive = {setActive}
                        />
                    )
                }
                {
                    active === 1 && (
                        <CourseData
                            benefits={benefits}
                            setBenefits={setBenefits}
                            prerequisites={prerequisites}
                            setPrerequisites={setPrerequisites}
                            active={active}
                            setActive={setActive}
                        />
                    )
                }
                {
                    active === 2 && (
                        <CourseContent
                            active={active}
                            setActive = {setActive}
                            courseContentData = {courseContentData}
                            setCourseContentData = {setCourseContentData}
                            handleCourseSumnit = {handleCourseSumnit}
                        />
                    )
                }
                {
                    active === 3 && (
                        <CourseReview 
                            active={active} 
                            setActive={setActive} 
                            courseData={courseData} 
                            handleCreateCourse={handleCreateCourse}
                        />
                    )
                }
                
            </div>
            <div className='w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0'>
                <CourseOptions active={active} setActive={setActive}/>
            </div>
        </div>
    );
};

export default CreateCourse;