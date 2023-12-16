"use client"
import React, { FC, useState } from 'react';
import Heading from '../utils/Heading';

import ContentCreation from '../components/ContentCreation/ContentCreation';

interface IProps { }

const Page: FC<IProps> = (props) => {
  return (
    <>
      <Heading
        title={'Quizzy Coaching Course'}
        description={'Kinh nghiệm 2 năm trong lĩnh vực Social Media Marketing, hiện đang là Project Manager tại 1 công ty Canada, từng là Social Media Executive tại Zing News và sỡ hữu hơn 140K followers trên các kênh Social'}
        keywords={"Quizzy Coaching Course Marketing"}
      />
      <ContentCreation />
    </>
  );
};

export default Page;