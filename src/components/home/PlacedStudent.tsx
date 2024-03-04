"use client";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import image1 from "../../../public/Images/profiles/michael.jpg";
import student1 from '../../../public/Images/profiles/student1.jpg'
import student2 from '../../../public/Images/profiles/student2.jpg'
import student3 from '../../../public/Images/profiles/student3.jpg'
import student4 from '../../../public/Images/profiles/student4.jpg'
import student5 from '../../../public/Images/profiles/student5.jpg'
import Image from "next/image";

const students = [
  {
    college: "East Point College of Engineering",
    company: "Microsoft",
    package: "35",
    name: "Ashika N",
    sem: "8",
    department: "BE-ISE",
    image: student1
  },
  {
    college: "East Point College of Engineering",
    company: "Wipro",
    package: "12",
    name: "Divyanshi Dixit",
    sem: "8",
    department: "BE-ISE",
    image: student2
  },
  {
    college: "East Point College of Engineering",
    company: "Saleforce",
    package: "8",
    name: "Durgashree madhu",
    sem: "8",
    department: "BE-CSE",
    image: student3
  },
  {
    college: "East Point College of Engineering",
    company: "KPMG",
    package: "5",
    name: "Kalluri sai teja",
    sem: "8",
    department: "BE-CSE",
    image: student4
  },
  {
    college: "East Point College of Engineering",
    company: "Incadea",
    package: "6",
    name: "Amit reny",
    sem: "8",
    department: "BE-CSE",
    image: student5
  },

];

export default function PlacedStudent() {
  return (
    <section className="mt-32 flex h-full w-[100%] flex-col items-center p-6 relative">
      <h2 className="text-3xl font-medium mb-4">Our Top Placed Student</h2>
      <div className="button-prev-slide absolute bottom-[40%] hover:scale-125 transition right-2 active:scale-100"><GrNext size={40}/></div>
      <Swiper
        loop={true}
        spaceBetween={20}
        // centeredSlides={true}
        slidesPerView={4}
        scrollbar={{ draggable: true }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide"
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="mySwiper w-[90%] "
      >
        
        {students?.map((students, i) => (
          <SwiperSlide key={i}>
            <div
              key={i}
              className="flex h-[20rem] w-[16rem] flex-col items-center border-[#719CEC]  justify-evenly border p-4 drop-shadow-lg bg-[#FFFFFF] rounded-lg"
            >
              <h3 className="text-center font-medium">{students.college}</h3>
              <h4 className="font-semibold">{students.company}</h4>
              <p>{students.package}-LPA</p>
              <span className=" h-24 w-24">
                {students?.image && <Image
                  src={students.image}
                  alt="image"
                  className=" h-full w-full rounded-full object-cover"
                  width={100}
                  height={100}
                />}
              </span>
              <p className="text-lg font-medium uppercase">{students.name}</p>
              <p>
                {students.sem}th SEM | {students.department}
              </p>
              <p className="font-semibold ">Congrats !</p>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
        <div className="button-next-slide absolute bottom-[40%] hover:scale-125 transition left-0 active:scale-100"><GrPrevious size={40}/></div>
    </section>
  );
}
