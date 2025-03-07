import React from "react";
import Counter from "../RESOURCES/NumberCounter";
import { FaRegPaperPlane } from "react-icons/fa6";
import { LOGOWHITE } from "../ASSETS/IMAGES/GRAPHICS/graphics";

export default function About() {
  return (
    <>
      <section className="flex flex-col gap-10 lg:gap-28 pb-20  p-6 lg:p-10 w-full ">
        <main className="max-w-[1000px] mx-auto flex flex-col items-center gap-5 ">
          <h1 className="text-4xl lg:text-7xl font-main font-black text-main">
            The Story Behind Cre8tive Forge
          </h1>
        </main>
        <section className="flex flex-col lg:flex-row gap-10  lg:gap-24 w-full max-w-[800px] mx-auto">
          <main className="rounded-t-[5rem] lg:w-[300px] flex items-center justify-center  w-full bg-main shrink-0 max-[640px]:h-[200px]  lg:rounded-t-full">
            <img src={LOGOWHITE} alt="Logo" className="w-[200px]" />
          </main>

          <main className="flex flex-col gap-6 w-full font-medium text-lg lg:text-xl text-main text-center lg:text-left">
            <p>
              <span className="text-xl lg:text-3xl font-bold">
                Over the past years
              </span>
              , we have worked on a wide range of projects in digital design and
              development. From crafting dynamic websites and front-end
              solutions to designing impactful flyers, logos, and complete brand
              identities, the goal has always been to bring ideas to life with
              precision and creativity.
            </p>
            <p>
              <span className="text-xl lg:text-3xl font-bold">Today</span>, the
              focus is on delivering tailored solutions that empower businesses
              to grow and make a lasting impression. Whether it’s building
              robust platforms or creating visuals that resonate, every project
              is approached with a commitment to excellence and meaningful
              results.
            </p>
          </main>
        </section>

        <section className="flex flex-col lg:gap-6 gap-3 text-white items-end font-main">
          <main className="flex items-center gap-2 px-4 lg:px-6 lg:py-3 py-2 rounded-full bg-main w-max">
            <span className="font-black text-xl lg:text-4xl tracking-widest">
              <span className="flex items-center gap-1">
                <Counter targetNumber={10} duration={500} />+
              </span>
            </span>
            <span className="text-sm lg:text-lg tracking-wide font-semibold">
              Website Developed
            </span>
          </main>

          <main className="flex items-center gap-2 px-4 lg:px-6 lg:py-3 py-2 rounded-full bg-main w-max mr-[3rem] lg:mr-[15rem]">
            <span className="font-black text-xl lg:text-4xl tracking-widest">
              <span className="flex items-center gap-1">
                <Counter targetNumber={40} duration={500} />+
              </span>
            </span>
            <span className="text-sm lg:text-lg tracking-wide font-semibold">
              Flyers Designed
            </span>
          </main>

          <main className="flex items-center gap-2 px-4 lg:px-6 lg:py-3 py-2 rounded-full bg-main w-max mr-[8rem] lg:mr-[30rem]">
            <span className="font-black text-xl lg:text-4xl tracking-widest">
              <span className="flex items-center gap-1">
                <Counter targetNumber={10} duration={500} />+
              </span>
            </span>
            <span className="text-sm lg:text-lg tracking-wide font-semibold">
              Logos Created
            </span>
          </main>

          <main className="flex items-center gap-2 px-4 lg:px-6 lg:py-3 py-2 rounded-full bg-main w-max mr-[9rem] lg:mr-[45rem]">
            <span className="font-black text-xl lg:text-4xl tracking-widest">
              <span className="flex items-center gap-1">
                <Counter targetNumber={50} duration={500} />+
              </span>
            </span>
            <span className="text-sm lg:text-lg tracking-wide font-semibold">
              Customers Satisfied
            </span>
          </main>
        </section>

        <main className=" flex flex-col items-center gap-5  ">
          <h1 className="text-2xl lg:text-4xl font-main font-black text-main ">
            Let’s Work Together to Create Impactful Graphic Design and Web
            Development Solutions That Drive Results
          </h1>
          <p className="font-medium text-[16px] lg:text-xl text-main lg:px-20">
            Together, we can create a lasting positive impact for future
            generations. Our goal is to contribute to this vision through
            sustainable, impactful design and development. If you share this
            commitment, I’d love to connect and explore how we can make a
            difference.
          </p>

          <section className="lg:p-24 p-6 max-[640px]:-mx-6 flex flex-col gap-6 lg:gap-10 bg-gray-100/40 lg:rounded-[4rem] ">
            <main className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              <div className="flex flex-col gap-5 w-full items-start">
                <span className="text-2xl font-black lg:text-5xl text-main/40 font-main">
                  01
                </span>
                <span className="text-xl font-black lg:text-3xl text-main font-main">
                  Design with Purpose
                </span>
                <p className="text-[16px] lg:text-lg text-main text-left font-medium">
                  Every project starts with a clear goal. Whether it's designing
                  or coding, we focus on solving real problems. The tools are
                  just a starting point—what matters is making it work in the
                  real world.
                </p>
              </div>

              <div className="flex flex-col gap-5 w-full items-start">
                <span className="text-2xl font-black lg:text-5xl text-main/40 font-main">
                  02
                </span>
                <span className="text-xl font-black lg:text-3xl text-main font-main">
                  Build Together
                </span>
                <p className="text-[16px] lg:text-lg text-main text-left font-medium">
                  Great work comes from collaboration. We involve the clients
                  throughout the process to ensure we’re aligned and the final
                  result reflects everyone’s vision.
                </p>
              </div>
            </main>

            <main className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              <div className="flex flex-col gap-5 w-full items-start">
                <span className="text-2xl font-black lg:text-5xl text-main/40 font-main">
                  03
                </span>
                <span className="text-xl font-black lg:text-3xl text-main font-main">
                  Accessible for Everyone
                </span>
                <p className="text-[16px] lg:text-lg text-main text-left font-medium">
                  Accessibility is key. We design and develop with inclusivity
                  in mind, making sure that everything I create is usable and
                  enjoyable for all.
                </p>
              </div>

              <div className="flex flex-col gap-5 w-full items-start">
                <span className="text-2xl font-black lg:text-5xl text-main/40 font-main">
                  04
                </span>
                <span className="text-xl font-black lg:text-3xl text-main font-main">
                  Always Evolving
                </span>
                <p className="text-[16px] lg:text-lg text-main text-left font-medium">
                  Design and development are ever-changing. We experiment,
                  learn, and grow with each project, knowing that every
                  challenge is an opportunity to improve.
                </p>
              </div>
            </main>
          </section>

          <div className="flex items-center gap-3 mx-auto flex-col lg:flex-row">
            <p className="font-medium text-lg lg:text-xl text-main l">
              Ready to take the next step?
            </p>
            <a
              href="mailto:business.cre8tiveforge@gmail.com"
              className="p-2 bg-main w-max text-white outline-none flex items-center gap-2 px-4"
            >
              <FaRegPaperPlane />
              <span> Let’s work together!</span>
            </a>
          </div>
        </main>
      </section>
    </>
  );
}
