import React, { useState } from "react";
import { BsArrow90DegDown } from "react-icons/bs";
import WebPortfolio from "../COMPONENTS/WebPortfolio";
import { FaRegPaperPlane } from "react-icons/fa6";
import FlyerPortfolio from "../COMPONENTS/FlyerPortfolio";
import { myPortfolio } from "../RESOURCES/links";
import { IoCheckmarkCircle, IoClose } from "react-icons/io5";

export default function Projects() {
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
          <WebPortfolio onPortfolioClick={handlePortfolioClick} />
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
                    <span className="flex items-center gap-2 text-left">
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
