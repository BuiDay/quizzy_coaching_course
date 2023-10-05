import React, {FC} from 'react';

interface IHeadProps{
    title:string,
    description:string;
    keywords:string;
}

const Heading:FC<IHeadProps> = ({title,description,keywords}) => {
    return (
        <>
            <title>{title}</title>
            <meta name="viewport" content='width=device-width, inital-scale=1'/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords} />
        </>
    );
};

export default Heading;