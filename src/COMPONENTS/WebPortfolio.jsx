import React from "react";
import { portfolio } from "../RESOURCES/links";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules"; // Import Navigation module
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function WebPortfolio() {
  return (
    <>
      <section className="max-w-full gap-10 overflow-hidden relative">
        {/* Swiper component */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={70}
          slidesPerView="auto"
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {portfolio
            .filter((work) => work.type === "WEBSITE")
            .map((work, index) => (
              <SwiperSlide key={index}>
                <div
                  className="group relative overflow-hidden flex justify-center items-center perspective-1000 cursor-pointer transition-transform duration-75 ease-linear"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
                    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -2;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${
                      y * 28
                    }deg) rotateY(${x * 28}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
                  }}
                >
                  <div className="absolute bg-main text-white left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 top-1/2 -translate-y-1/2 p-3 w-max hidden group-hover:flex flex-col gap-2">
                    {work.link !== null ? (
                      <>
                        <a
                          href={`http://${work.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {work.link}
                        </a>
                      </>
                    ) : (
                      <>
                        <span>{work.name}</span>
                      </>
                    )}
                  </div>
                  <img
                    src={work.image}
                    alt={work.name}
                    className={`max-w-[300px] lg:max-w-[500px] w-full`}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Navigation arrows */}
        <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/70 backdrop-blur-md text-black rounded-full lg:h-12 lg:w-12 h-10 w-10 flex items-center justify-center cursor-pointer z-[1000]">
          <FaArrowRightLong className="text-main text-xl" />
        </div>
        <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/70 backdrop-blur-md text-black rounded-full lg:h-12 lg:w-12 h-10 w-10 flex items-center justify-center cursor-pointer z-[1000]">
          <FaArrowLeftLong className="text-main text-xl" />
        </div>
      </section>
    </>
  );
}
