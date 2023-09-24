"use client";
import Image from "next/image";

import React, { useState } from "react";


const FormPart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(false);

  const handleClick = () => {
    if (!state) {
      setIsOpen(true);
    } else setState(false);
  };

  return (
    <div className="flex h-screen w-full flex-col text-white">
      <div className="flex h-[850px] items-center justify-between bg-blue-600">
        <div className="p-10 xl:pl-20 xl:pr-60 w-full flex flex-col xl:items-start items-center justify-center">
          <h1 className="mb-10 md:text-3xl text-xl xl:text-5xl font-extrabold uppercase">
            Let's start your project!
          </h1>
          <p className="mb-10 md:text-xl text-base xl:text-2xl">
            Leave your contact details and we will contact you
          </p>
          <form method="dialog" className="flex flex-col gap-y-10">
            <input
              className="w-full xl:w-[600px] border-b-2 bg-transparent pb-4 outline-none"
              type="text"
              placeholder="How can I contact you?"
            />
            <input
              className="w-full xl:w-[600px] border-b-2 bg-transparent pb-4 outline-none"
              type="text"
              placeholder="Phone/email"
            />
            <input
              className="w-full xl:w-[600px] border-b-2 bg-transparent pb-4 outline-none"
              type="text"
              placeholder="Add a message"
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="checkbox"
                onChange={() => handleClick()}
                checked={state}
                className="h-8 w-8 border-2 accent-black outline-none"
              />
              <label htmlFor="checkbox" className="select-none">
                I agree to the processing of personal data.
              </label>
           
            </div>
            <button className="w-max xl:w-64 rounded-2xl bg-white p-3 xl:px-6 xl:py-6 text-2xl font-bold text-blue-700">
              Send
            </button>
          </form>
        </div>
        <div className="xl:block hidden relative h-[650px] w-full">
          <Image src="/group.png" fill alt="group" sizes="500px" className="object-contain" />
        </div>
      </div>

   
    </div>
  );
};

export default FormPart;