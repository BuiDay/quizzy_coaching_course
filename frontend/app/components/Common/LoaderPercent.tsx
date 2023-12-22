import React from 'react';

type Props = {
    count : number
}

const LoaderPercent:React.FC<Props> = ({count}) => {
    return (
        <div className='h-screen w-screen'>
            <div className='h-full w-full bg-black flex items-center justify-center'>
                <div className=' loader relative'></div>
                <div className='text-white text-[50px] absolute'>{count}%</div>
            </div>
        </div>
    );
};

export default LoaderPercent;