import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { myPortfolio } from "../RESOURCES/links";
export default function FlyerPortfolio() {
  return (
    <>
      <section className="max-w-full  overflow-hidden relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          loop={true}
          slidesPerView="auto"
          centeredSlides={true}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className=""
        >
          {myPortfolio
            .filter((work) => work.type === "FLYER")
            .map((work) => (
              <SwiperSlide className="grid place-items-center" key={work.id}>
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
                    className="w-[300px] h-[300px] object-cover rounded-2xl"
                    alt={work.name}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
}
