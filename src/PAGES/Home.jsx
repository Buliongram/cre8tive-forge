import React, { useEffect, useState } from "react";
import { BsArrow90DegDown, BsPen, BsTv } from "react-icons/bs";
import WebPortfolio from "../COMPONENTS/WebPortfolio";
import TypingEffect from "../RESOURCES/TextEffect";
import {
  FaBullhorn,
  FaLaptopCode,
  FaPenNib,
  FaRegPaperPlane,
  FaXmark,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaThList } from "react-icons/fa";
import { myPortfolio } from "../RESOURCES/links";
import { IoCheckmarkCircle, IoClose } from "react-icons/io5";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const handlePortfolioClick = (id) => {
    const work = myPortfolio.find((item) => item.id === id);
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedWork(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="flex flex-col gap-10 lg:gap-28 pb-20 p-6 lg:p-10 w-full ">
        <main className="max-w-[1000px] mx-auto flex flex-col items-center gap-5 ">
          <h1 className="text-4xl lg:text-8xl font-main font-black text-main">
            Need a {TypingEffect()} website or design?
          </h1>
          <p className="font-medium text-lg lg:text-xl text-main lg:px-20">
            We specialize in graphic design and web development, delivering
            tailored solutions that align with your goals.
          </p>
          <button className="p-2 bg-main text-white outline-none flex items-center gap-2 px-4">
            <BsArrow90DegDown />
            <span> Let me show you...</span>
          </button>
        </main>

        <main className="flex flex-col gap-32 w-full">
          <section className="flex flex-col gap-20">
            <div className="flex flex-col gap-2 items-center">
              <h1
                className="text-3xl lg:text-5xl font-main font-black text-main"
              >
                A Glimpse Into Our Craft
              </h1>

              <Link
                to={"/projects"}
                className="p-2 bg-main w-max text-white outline-none flex items-center gap-2 px-4"
              >
                <FaThList />
                <span>See all projects</span>
              </Link>
            </div>
            <WebPortfolio onPortfolioClick={handlePortfolioClick} />

            <div className="flex items-center gap-3 mx-auto flex-col lg:flex-row">
              <p className="font-medium text-lg lg:text-xl text-main l">
                Ready to take the next step?
              </p>
              <a
                href="mailto:davidimade01@gmail.com"
                className="p-2 bg-main w-max text-white outline-none flex items-center gap-2 px-4"
              >
                <FaRegPaperPlane />
                <span> Let’s work together!</span>
              </a>
            </div>
          </section>

          <section className="flex flex-col gap-5 lg:gap-0 font-medium">
            <div className="flex flex-col gap-2">
              <h1
                className="text-3xl lg:text-5xl font-main font-black text-main mt-10 "
              >
                Bringing Your Vision to Life
              </h1>
              <span
                className="text-lg text-main lg:text-2xl font-semibold"
              >
                &lt; Our Services / &gt;
              </span>
            </div>

            <main className="lg:gap-20 flex flex-col lg:flex-row items-center lg:p-20">
              <main className="flex flex-col gap-3 items-center rounded-[2rem]  text-main cursor-pointer group p-6 lg:p-0">
                <span className="group-hover:rotate-[360deg]">
                  <FaLaptopCode className="text-3xl lg:text-4xl" />
                </span>
                <span className="text-lg lg:text-xl font-semibold font-main">
                  Web Development:
                </span>
                <span className="text-sm lg:text-[16px]">
                  We build websites that work for you. From responsive designs
                  to smooth functionality, we create custom websites that fit
                  your business needs and provide an awesome experience for your
                  users.
                </span>
              </main>

              <main className="flex flex-col gap-3 items-center rounded-[2rem]  text-main cursor-pointer group p-6 lg:p-0">
                <span className="group-hover:rotate-[360deg]">
                  <FaPenNib className="text-3xl lg:text-4xl" />
                </span>
                <span className="text-lg lg:text-xl font-semibold font-main">
                  Graphic Design:
                </span>
                <span className="text-sm lg:text-[16px]">
                  Your brand deserves to stand out. We craft creative,
                  eye-catching designs—from logos to marketing materials—that
                  not only look great but also communicate your message clearly.
                </span>
              </main>

              <main
                className="flex flex-col gap-3 items-center rounded-[2rem]  text-main cursor-pointer group p-6 lg:p-0"
              >
                <span className="group-hover:rotate-[360deg]">
                  <FaBullhorn className="text-3xl lg:text-4xl" />
                </span>
                <span className="text-lg lg:text-xl font-semibold font-main">
                  Marketing:
                </span>
                <span className="text-sm lg:text-[16px]">
                  We help your business grow with marketing strategies that
                  really connect. Our campaigns are designed to reach the right
                  people, build your brand, and deliver results that matter.
                </span>
              </main>
            </main>

            <div className="flex items-center gap-3 mx-auto flex-col lg:flex-row">
              <p className="font-medium text-lg lg:text-xl text-main l">
                Ready to take the next step?
              </p>
              <a
                href="mailto:davidimade01@gmail.com"
                className="p-2 bg-main w-max text-white outline-none flex items-center gap-2 px-4"
              >
                <FaRegPaperPlane />
                <span> Let’s work together!</span>
              </a>
            </div>
          </section>
        </main>
      </section>

      {isModalOpen && selectedWork && (
        <div className="modal fixed inset-0 bg-black/50 flex items-center justify-center z-[11]">
          <section className="bg-white max-h-[90%] h-max rounded-3xl p-8 lg:py-12  max-w-[800px] w-[90%] shrink-0 flex flex-col lg:flex-row lg:gap-12 gap-5 relative overflow-y-scroll hideOverflow">
            <button
              onClick={closeModal}
              class="text-xl group h-8 w-8 shrink-0 absolute top-6 right-6 flex items-center justify-center outline-none cursor-pointer border border-sky-900 border-dotted"
            >
              <IoClose className="text-2xl group-hover:rotate-180" />
            </button>
            <main
              className="w-full flex flex-col gap-5 items-center lg:gap-10
            "
            >
              <img
                src={selectedWork.image}
                className="w-[300px] lg:w-full"
                alt={selectedWork.name}
              />
              {selectedWork.link && (
                <a
                  href={`http://${selectedWork.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 px-10 bg-main text-white outline-none text-center w-full"
                >
                  Visit Site
                </a>
              )}
            </main>
            <main className="flex flex-col lg:gap-4 gap-2 w-full">
              <h2 className="text-2xl font-bold text-main">
                {selectedWork.name}
              </h2>
              <p className="text-left text-sm ">{selectedWork.description}</p>
              {selectedWork.package && (
                <div className="flex text-sm flex-col items-start gap-1">
                  {selectedWork.package.map((pack) => (
                    <span className="flex items-center gap-2">
                      {pack}
                      <IoCheckmarkCircle className="text-lg text-green-600" />
                    </span>
                  ))}
                </div>
              )}
            </main>
          </section>
        </div>
      )}
    </>
  );
}
