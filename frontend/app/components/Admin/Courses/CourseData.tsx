import React from 'react';
import { style } from '../../styles/styles';
import { AddCircle } from '@mui/icons-material';

type Props = {
    benefits: { title: string }[];
    setBenefits: (benefits: { title: string }[]) => void;
    prerequisites: { title: string }[];
    setPrerequisites: (prerequisites: { title: string }[]) => void;
    active: number;
    setActive: (active: number) => void;
}

const CourseData: React.FC<Props> = ({ benefits, setBenefits, prerequisites, setPrerequisites, active, setActive }) => {

    const handleBenefitChange = (index: number, value: any) => {
        const updateBenefits = [...benefits];
        updateBenefits[index].title = value;
        setBenefits(updateBenefits);
    }

    const handleAddBenefit = () => {
        setBenefits([...benefits, { title: "" }])
    }

    const handlePrerequisitesChange = (index: number, value: any) => {
        const updatePrerequisites = [...prerequisites];
        updatePrerequisites[index].title = value;
        setPrerequisites(updatePrerequisites);
    }

    const handleAddPrerequisites = () => {
        setPrerequisites([...prerequisites, { title: "" }])
    }

    const handleBack = () => {
        setActive(active - 1)
    }

    const handleNext = () => {
        let checkNull = false;
        setActive(active + 1)
    }

    return (
        <div className='w-[80%] m-auto mt-24 block'>
            <div>
                <label htmlFor="email" className={`${style.label} text-[20px]`}>What are the benefits for students in this coures?</label>
            </div>
            <br />
            {
                benefits.map((benefit: { title: string }, index: number) =>
                    <input type='text' key={index} name='Benefit' placeholder='You will be able build....'
                        required className={`${style.input} my-2`} value={benefit.title}
                        onChange={(e) => handleBenefitChange(index, e.target.value)}
                    />
                )
            }
            <div className='w-full text-end'>
                <AddCircle className="dark:text-white" style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }} onClick={handleAddBenefit} />
            </div>
            <div>
                <label htmlFor="email" className={`${style.label} text-[20px]`}>What are the prerequisites for start in this coures?</label>
            </div>
            <br />
            {
                prerequisites.map((prerequisite: { title: string }, index: number) =>
                    <input type='text' key={index} name='Prerequisites' placeholder='You will be able build....'
                        required className={`${style.input} my-2`} value={prerequisite.title}
                        onChange={(e) => handlePrerequisitesChange(index, e.target.value)}
                    />
                )
            }
            <div className='w-full text-end'>
                <AddCircle className="dark:text-white" style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }} onClick={handleAddPrerequisites} />
            </div>
            <div className='w-full flex items-center justify-between my-5'>
                <button onClick={handleBack} type='submit' className='w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded cursor-pointer'>Back</button>
                <button onClick={handleNext} type='submit' className='w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded cursor-pointer'>Next</button>
            </div>
        </div>
    );
};

export default CourseData;