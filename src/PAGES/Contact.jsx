import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { ICON } from "../ASSETS/IMAGES/images";

export default function Contact({ showContact, setShowContact }) {
  const [state, setState] = useState("default"); // 'default', 'hello', 'hire', 'options'
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi!" },
    {
      type: "bot",
      text: "I'm Cre8tive Bot. I'm here to help you with any questions you might have about Cre8tive Forge.",
    },
    { type: "bot", text: "How can I help you today?" },
  ]);

  const handleHelloClick = () => {
    setState("default");
    setMessages((prev) => [
      ...prev,
      { type: "user", text: "Just saying hello!" },
      { type: "bot", text: "Hello!" },
      { type: "bot", text: "Thanks for saying hi 😁" },
      { type: "bot", text: "I hope you've enjoyed browsing our website" },
      { type: "bot", text: "Can I help you with anything else?" },
    ]);
  };

  const handleHireClick = () => {
    setState("hire");
    setMessages((prev) => [
      ...prev,
      { type: "user", text: "We'd like to hire you" },
      { type: "bot", text: "Ok, great!" },
      { type: "bot", text: "Exciting times 🕺" },
      { type: "bot", text: "Send me a message and let's chat further!" },
    ]);
  };

  const handleOptionsClick = () => {
    setState("default");
    setMessages((prev) => [
      ...prev,
      { type: "user", text: "Other options?" },
      { type: "bot", text: "Ok, here you go" },
    ]);
  };

  return (
    <>
      <section
        className={`${
          showContact ? "lg:right-6" : "-right-full"
        } fixed top-0  bg-white/40 backdrop-blur-md lg:h-[90%] w-full lg:w-[380px] overflow-y-scroll rounded-b-3xl z-[12] h-full`}
      >
        <main className="p-4 bg-main text-white flex lg:hidden items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <span className="h-10 w-10 rounded-full border-2 border-white p-1">
              <img src={ICON} alt="Icon" />
            </span>
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold">Cre8tive Bot</span>
              <p className="text-[13px]">Ask me a question</p>
            </div>
          </div>
          <span
            onClick={() => setShowContact(false)}
            className="h-7 w-7 flex items-center justify-center cursor-pointer"
          >
            <IoClose className="text-2xl" />
          </span>
        </main>
        <main className="flex flex-col gap-2 px-5 pt-4 ">
          {messages.map((message, idx) => (
            <p
              key={idx}
              data-aos="fade-in"
              className={`px-4 py-3 rounded-xl ${
                message.type === "bot"
                  ? "bg-white w-max text-left break-words max-w-full"
                  : "bg-main/20 ml-auto text-main w-max text-left"
              }`}
            >
              {message.text}
            </p>
          ))}

          {state === "default" && (
            <div className="flex flex-col gap-2">
              <button
                onClick={handleHelloClick}
                className="px-10 py-3 rounded-full border-2 border-main text-main text-[16px] font-medium w-max"
              >
                Just saying hello!
              </button>
              <button
                onClick={handleHireClick}
                className="px-10 py-3 rounded-full border-2 border-main text-main text-[16px] font-medium w-max"
              >
                We'd like to hire you
              </button>
            </div>
          )}

          {state === "hire" && (
            <div className="flex gap-2 flex-col">
              <a
                href="mailto:davidimade01@gmail.com"
                className="px-10 py-3 rounded-full border-2 border-main text-main text-[16px] font-medium w-max"
              >
                Send a message
              </a>
              <button
                className="px-10 py-3 rounded-full border-2 border-main text-main text-[16px] font-medium w-max"
                onClick={handleOptionsClick}
              >
                Other options?
              </button>
            </div>
          )}
        </main>
      </section>
    </>
  );
}
