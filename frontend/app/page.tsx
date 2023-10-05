"use client"
import React, {FC, useState} from 'react';
import Heading from './utils/Heading';
import Header from './components/Header';

interface IProps {}

const Page:FC<IProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div>
      <Heading
          title='Quizzy Coaching Course'
          description='Course is platfrom for student to learn'
          keywords='Learning'
       />
       <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
       />
    </div>
  );
};

export default Page;