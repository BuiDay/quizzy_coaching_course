"use client"
import React, { FC, useState } from 'react';
import Heading from './utils/Heading';
import Header from './components/Header';
import Landing_Page from './components/Landing_Page';
import Hero from './components/Route/Hero';
import HeroV1 from './components/Route/HeroV1';
import Template_Calendar from './components/Template_Calendar';
import PanelSocial from './components/Common/PanelSocial';

interface IProps { }

const Page: FC<IProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <>
      <Heading
        title={'Quizzy Coaching Course'}
        description={'Kinh nghiệm 2 năm trong lĩnh vực Social Media Marketing, hiện đang là Project Manager tại 1 công ty Canada, từng là Social Media Executive tại Zing News và sỡ hữu hơn 140K followers trên các kênh Social'}
        keywords={"Quizzy Coaching Course Marketing"}
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />

      {/* <Landing_Page />  */}
      {/* <Template_Calendar/> */}
      {/* <Hero /> */}
      <HeroV1 />
      <PanelSocial color="#fff"/>
    </>
  );
};

export default Page;