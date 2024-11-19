import React, { useEffect } from "react";
import { BsArrow90DegDown, BsPen, BsTv } from "react-icons/bs";
import WebPortfolio from "../COMPONENTS/WebPortfolio";
import TypingEffect from "../RESOURCES/TextEffect";
import {
  FaBullhorn,
  FaLaptopCode,
  FaPenNib,
  FaRegPaperPlane,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaThList } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-10 lg:gap-28 pb-20 p-6 lg:p-10 w-full ">
        <main className="max-w-[1000px] mx-auto flex flex-col items-center gap-5 ">
          <h1
            data-aos="zoom-in-up"
            className="text-4xl lg:text-8xl font-main font-black text-main"
          >
            Need a {TypingEffect()} website or design?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-medium text-lg lg:text-xl text-main lg:px-20"
          >
            We specialize in graphic design and web development, delivering
            tailored solutions that align with your goals.
          </p>
          <button
            data-aos="fade-right"
            data-aos-delay="400"
            className="p-2 bg-main text-white outline-none flex items-center gap-2 px-4"
          >
            <BsArrow90DegDown />
            <span> Let me show you...</span>
          </button>
        </main>

        <main className="flex flex-col gap-32 w-full">
          <section className="flex flex-col gap-20">
            <div className="flex flex-col gap-2 items-center">
              <h1
                data-aos="fade-left"
                className="text-3xl lg:text-5xl font-main font-black text-main"
              >
                A Glimpse Into Our Craft
              </h1>

              <Link
                to={"/projects"}
                data-aos="fade-right"
                data-aos-delay="400"
                className="p-2 bg-main w-max text-white outline-none flex items-center gap-2 px-4"
              >
                <FaThList />
                <span>See all projects</span>
              </Link>
            </div>
            <WebPortfolio />
            <div className="flex items-center gap-3 mx-auto flex-col lg:flex-row">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="font-medium text-lg lg:text-xl text-main l"
              >
                Ready to take the next step?
              </p>
              <a
                href="mailto:davidimade01@gmail.com"
                data-aos="fade-right"
                data-aos-delay="400"
                className="p-2 bg-main w-max text-white outline-none flex items-center gap-2 px-4"
              >
                <FaRegPaperPlane />
                <span> Let’s work together!</span>
              </a>
            </div>
          </section>

          <section className="flex flex-col gap-5 lg:gap-0">
            <div className="flex flex-col gap-2">
              <h1
                data-aos="flip-left"
                className="text-3xl lg:text-5xl font-main font-black text-main mt-10"
              >
                Bringing Your Vision to Life
              </h1>
              <span
                data-aos="flip-up"
                data-aos-delay="1000"
                className="text-lg text-main lg:text-2xl font-semibold"
              >
                &lt; Our Services / &gt;
              </span>
            </div>

            <main className="lg:gap-20 flex flex-col lg:flex-row items-center lg:p-20">
              <main
                data-aos="fade-up"
                data-aos-delay="600"
                className="flex flex-col gap-3 items-center rounded-[2rem]  text-main cursor-pointer group p-6 lg:p-0"
              >
                <span className="group-hover:rotate-[360deg]">
                  <FaLaptopCode className="text-3xl lg:text-4xl" />
                </span>
                <span className="text-lg lg:text-xl font-semibold">
                  Web Development:
                </span>
                <span className="text-sm lg:text-[16px]">
                  We build websites that work for you. From responsive designs
                  to smooth functionality, we create custom websites that fit
                  your business needs and provide an awesome experience for your
                  users.
                </span>
              </main>

              <main
                data-aos="fade-up"
                data-aos-delay="900"
                className="flex flex-col gap-3 items-center rounded-[2rem]  text-main cursor-pointer group p-6 lg:p-0"
              >
                <span className="group-hover:rotate-[360deg]">
                  <FaPenNib className="text-3xl lg:text-4xl" />
                </span>
                <span className="text-lg lg:text-xl font-semibold">
                  Graphic Design:
                </span>
                <span className="text-sm lg:text-[16px]">
                  Your brand deserves to stand out. We craft creative,
                  eye-catching designs—from logos to marketing materials—that
                  not only look great but also communicate your message clearly.
                </span>
              </main>

              <main
                data-aos="fade-up"
                data-aos-delay="1200"
                className="flex flex-col gap-3 items-center rounded-[2rem]  text-main cursor-pointer group p-6 lg:p-0"
              >
                <span className="group-hover:rotate-[360deg]">
                  <FaBullhorn className="text-3xl lg:text-4xl" />
                </span>
                <span className="text-lg lg:text-xl font-semibold">
                  Marketing:
                </span>
                <span className="text-sm lg:text-[16px]">
                  We help your business grow with marketing strategies that
                  really connect. Our campaigns are designed to reach the right
                  people, build your brand, and deliver results that matter.
                </span>
              </main>
            </main>
          </section>
        </main>
      </section>
    </>
  );
}
