import React from "react";
import { BsArrow90DegDown } from "react-icons/bs";
import WebPortfolio from "../COMPONENTS/WebPortfolio";
import { FaRegPaperPlane } from "react-icons/fa6";
import FlyerPortfolio from "../COMPONENTS/FlyerPortfolio";

export default function Projects() {
  return (
    <>
      <section className="flex flex-col gap-10 lg:gap-28 pb-20    p-6 lg:p-10 w-full ">
        <main className="max-w-[1000px] mx-auto flex flex-col items-center gap-5 ">
          <h1
            data-aos="zoom-in-up"
            className="text-4xl lg:text-7xl font-main font-black text-main"
          >
            A Glimpse Into Our Craft
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-medium text-lg lg:text-xl text-main"
          >
            Every project tells a story of innovation and collaboration,
            blending design and development to deliver unique, impactful
            solutions. Explore how creativity meets functionality in the works
            I've brought to life.
          </p>
          <button
            data-aos="fade-right"
            className="p-2 bg-main text-white flex items-center gap-2 px-4"
          >
            <BsArrow90DegDown />
            <span> Discover What We Can Do...</span>
          </button>
        </main>

        <section className="flex flex-col gap-10">
          <h1
            data-aos="fade-left"
            className="text-3xl lg:text-5xl font-main font-black text-main"
          >
            Websites Developed
          </h1>
          <WebPortfolio />
        </section>

        {/* <section className="restaurantFoodCont gap-6">
          {portfolio
            .filter((work) => work.type == "FLYER")
            .map((work) => (
              <>
                <div className=" rounded-2xl flex items-center justify-center  bg-main/10 py-3">
                  <img
                    src={work.image}
                    className="w-[80%] h-[90%] object-cover rounded-2xl"
                    alt={work.name}
                  />
                </div>
              </>
            ))}
        </section> */}
        <section className="flex flex-col gap-10">
          <h1
            data-aos="fade-left"
            className="text-3xl lg:text-5xl font-main font-black text-main"
          >
            Graphic Designs
          </h1>
          <FlyerPortfolio />
        </section>

        <div className="flex items-center gap-3 mx-auto flex-col lg:flex-row">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-medium text-lg lg:text-xl text-main l"
          >
            Ready to take the next step?
          </p>
          <button
            data-aos="fade-right"
            data-aos-delay="400"
            className="p-2 bg-main w-max text-white outline-none flex items-center gap-2 px-4"
          >
            <FaRegPaperPlane />
            <span> Let’s work together!</span>
          </button>
        </div>
      </section>
    </>
  );
}
