// 'use client';
// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const images = ['work1.jpg', 'work4.jpg', 'work3.jpg', 'work5.jpg', 'work2.jpg'];

// export function Works() {
//   return (
//     <section id="works" className="scroll-mt-22 py-10 bg-[#D2D2D2]">
//       <h2 className="text-4xl text-center text-[#080808] mt-5 mb-20">Our Projects</h2>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 1000, 
//           disableOnInteraction: false, // keep autoplay after user interaction
//           pauseOnMouseEnter: true, // optional: pause when hovered
//         }}
//         loop={true} // optional: loop back to start
//         className="px-4"
//       >
//         {images.map((src, i) => (
//           <SwiperSlide key={i}>
//             <div className="relative w-full h-screen rounded overflow-hidden shadow-md">
//               <Image
//                 src={`/Images/${src}`}
//                 alt={`Project ${i + 1}`}
//                 fill
//                 className="object-cover"
//                 priority={i === 0}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }





'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = ['work1.jpg', 'work4.jpg', 'work3.jpg', 'work5.jpg', 'work2.jpg'];

export function Works() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400); // iPhone 16 portrait width
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="works" className="scroll-mt-22 py-10 bg-[#D2D2D2]">
      <h2 className="text-3xl sm:text-4xl text-center text-[#080808] mt-5 mb-10">
        Our Projects
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={isMobile ? 1 : 3}
        navigation={!isMobile}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="px-4"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className={`relative w-full ${isMobile ? 'h-[250px]' : 'h-[500px]'} rounded overflow-hidden shadow-md`}>
              <Image
                src={`/Images/${src}`}
                alt={`Project ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
