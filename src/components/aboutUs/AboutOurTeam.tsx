"use client";

import React from 'react'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../public/Images/profiles/michael.jpg";
import teamImg1 from '../../../public/Images/profiles/team1.jpg'
import teamImg2 from '../../../public/Images/profiles/team2.jpg'
import teamImg3 from '../../../public/Images/profiles/team3.jpeg'
import teamImg4 from '../../../public/Images/profiles/team5.jpg'
import Image from "next/image";
const students = [
    {
      name: "Priyanka A",
      role: "Co-ordinator",
      image: teamImg1
    },
    {
      name: "Babith K P",
      role: "Co-ordinator",
      image: teamImg3
    },
    {
      name: "Pallavi M",
      role: "Co-ordinator",
      image: teamImg2
    },
    {
      name: "Ankitha ",
      role: "Co-ordinator",
      image: image1
    },
    {
      name: "SHIVA SHANKAR REDDY",
      role: "Co-ordinator",
      image: teamImg4
    },
  
  ];

export default function AboutOurTeam() {
  return (
    <section className="mt-32 flex h-full w-[100%] flex-col items-center  p-6 relative ">
    <h2 className="text-3xl font-medium mb-4">Our Team</h2>
    <div className="button-prev-slide absolute bottom-[40%] hover:scale-125 transition right-2 active:scale-100 cursor-pointer"><GrNext size={40}/></div>
    <Swiper
      loop={true}
      spaceBetween={20}
      // centeredSlides={true}
      slidesPerView={4}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide"
      }}
      modules={[Navigation, Pagination, Scrollbar]}
      className="mySwiper w-[90%]  overflow-hidden"
    >
      
      {students.map((students, i) => (
        <SwiperSlide key={i}>
          <div
            key={i}
            className="flex h-[20rem] w-[16rem] flex-col items-center justify-evenly  drop-shadow-xl"
          >
            <span className=" h-52 w-52 rounded-full">
              <Image
                src={students.image}
                alt="image"
                className=" h-full w-full rounded-full object-cover"
              />
            </span>
            <p className="text-lg font-semibold uppercase">{students.name}</p>
            <p className="font-medium -mt-3">{students.role}</p>
          </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
      <div className="button-next-slide absolute bottom-[40%] hover:scale-125 transition left-0 active:scale-100 cursor-pointer"><GrPrevious size={40}/></div>
  </section>
  )
}
