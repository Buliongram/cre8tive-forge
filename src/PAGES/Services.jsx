import React from "react";
import {
  FaBullhorn,
  FaLaptopCode,
  FaPenNib,
  FaRegPaperPlane,
} from "react-icons/fa6";

export default function Services() {
  return (
    <>
      <section className="flex flex-col gap-5 pb-20  p-6 lg:p-10 w-full ">
        <main className="max-w-[1000px] mx-auto flex flex-col items-center gap-5 ">
          <h1
            data-aos="zoom-in-up"
            className="text-4xl lg:text-7xl font-main font-black text-main"
          >
            Explore Our Solutions
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-medium text-lg lg:text-xl text-main lg:px-20"
          >
            We offer custom web development, graphic design, and branding
            solutions to help your business thrive online. From building
            websites to creating standout brands, we’re here to bring your
            vision to life.
          </p>
        </main>

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
              We build websites that work for you. From responsive designs to
              smooth functionality, we create custom websites that fit your
              business needs and provide an awesome experience for your users.
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
              Your brand deserves to stand out. We craft creative, eye-catching
              designs—from logos to marketing materials—that not only look great
              but also communicate your message clearly.
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
            <span className="text-lg lg:text-xl font-semibold">Marketing:</span>
            <span className="text-sm lg:text-[16px]">
              We help your business grow with marketing strategies that really
              connect. Our campaigns are designed to reach the right people,
              build your brand, and deliver results that matter.
            </span>
          </main>
        </main>

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
    </>
  );
}
