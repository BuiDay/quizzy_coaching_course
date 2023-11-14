import React from 'react';
import './Loading.css'
const Loader = () => {
    return (
        <div className='h-screen w-screen absolute top-0 left-0' style={{background: "rgba(1,1,1, 0.4)" }}>
            <div className='absolute top-[50%] left-[50%] bg-white p-4 rounded-full' style={{ transform: "-50% -50%"}}>
                <div className='loader'></div>
            </div>
        </div>
    );
};

export default Loader;