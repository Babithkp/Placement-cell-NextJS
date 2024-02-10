"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../../../public/Images/companies/client-2.png";
import image2 from "../../../public/Images/companies/client-3.png";
import image3 from "../../../public/Images/companies/client-4.png";
import image4 from "../../../public/Images/companies/client-5.png";
import image5 from "../../../public/Images/companies/client-6.png";
import image6 from "../../../public/Images/companies/client-7.png";
import image7 from "../../../public/Images/companies/client-8.png";

const AllImages = [image1, image2, image3, image4, image5, image6, image7];
// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="h-12 w-[100%]">
      <h2 className="mb-4 text-center text-3xl font-medium">
        Our Recruitment Partnrs
      </h2>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-white "
      >
        {AllImages.map((image, i) => (
          <SwiperSlide key={i}>
            <div className="mt-4 h-[80px] w-[150px]  grayscale hover:grayscale-0">
              <Image src={image} alt={`image-${i}`} height={100} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
