import React, { FC } from 'react';

interface IHeadProps {
    title?: string,
    description?: string;
    keywords?: any;
}

const Heading: FC<IHeadProps> = ({ title, description, keywords }) => {
    return (
        <>
            <title>{title}</title>
            <link rel="icon" type="image/x-icon" href="/public/logo.png"></link>
            <meta property="og:image" content="https://res.cloudinary.com/dlqieazbj/image/upload/v1697019213/hvaspii98y8iqk3zkp64.jpg"></meta>
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="viewport" content='width=device-width, inital-scale=1' />
            <meta name="description" property='og:description' content={description} />
            <meta name="keywords" content={keywords} />
        </>
    );
};

export default Heading;