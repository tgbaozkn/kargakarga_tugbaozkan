"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { slides } from "@public/slidedata";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Slide = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [topValue, setTopValue] = useState(0);
  // Interval functions
  let interval;
  const handleSlideClick = (index) => {
    clearInterval(interval);
    setActiveSlide(index);
  };

  // Auto Slide
  const startInterval = () => {
    interval = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    const screenHeight = window.innerHeight;
    const calculatedTopValue = (screenHeight * 3.42) / 100;
      setTopValue(calculatedTopValue);
    return () => {
      clearInterval(interval);
    };
  }, [window.innerHeight]);

  return (
    <div className="relative h-screen w-screen ">
      <div className="center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute left-0 top-0 flex h-full w-full items-center justify-between p-4 sm:p-10 xl:p-20 opacity-0 transition-opacity duration-1000 ${
              activeSlide === index && "opacity-100"
            }`}
          >
            <div className="flex w-full flex-col items-start gap-8 sm:w-3/6 sm:text-xs">
              <h1 className="text-xl font-extrabold uppercase leading-5 md:text-3xl md:leading-10 xl:text-4xl xl:leading-[75px] ">
                {slide.title}
              </h1>
              <h3 className="text-xl font-bold">{slide.slogan}</h3>
              <button className="rounded-2xl bg-[#294DFA] px-3 py-2 font-bold text-white sm:px-4 sm:py-3 sm:text-xs">
                Join Us
              </button>
            </div>

              <div className="relative hidden aspect-video w-96 sm:mt-40 sm:block md:w-[600px]  xl:w-[800px]">
                <Image
                  src={slide.img}
                  fill
                  alt={slide.title}
                />
        
            </div>
            <div className={`absolute right-10 top-${topValue} -z-10 hidden sm:block`}>
              <div className="relative aspect-square w-96 xl:w-[500px]">
                <Image
                  src="/ellipse.png"
                  fill
                  alt="ellipse"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 w-full">
        <div className="hidden items-center justify-start gap-2 pl-20 md:flex">
          <button
            onClick={() =>
              setActiveSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide - 1
              )
            }
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 mb-3"
          >
            <FiArrowLeft className="text-md font-thin" />
          </button>
          <button
            onClick={() =>
              setActiveSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
              )
            }
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 mb-3"
          >
            <FiArrowRight className="text-md font-thin" />
          </button>
        </div>
        <div className="flex items-end justify-between gap-4 px-4 text-sm sm:px-10 md:px-20 md:text-lg ">
          <h1
            onClick={() => handleSlideClick(0)}
            className={`w-full cursor-pointer border-b-4 pb-4 transition-all ${
              activeSlide === 0
                ? "border-blue-600 text-black"
                : "border-gray-400 text-gray-400"
            }`}
          >
            Illustrations for the book "Red Sands of Durnwood"
          </h1>
          <h1
            onClick={() => handleSlideClick(1)}
            className={`w-full cursor-pointer border-b-4 pb-4 transition-all ${
              activeSlide === 1
                ? "border-blue-600 text-black"
                : "border-gray-400 text-gray-400"
            }`}
          >
            “UARMY” Mobile Card game
          </h1>
          <h1
            onClick={() => handleSlideClick(2)}
            className={`w-full cursor-pointer border-b-4 pb-4 transition-all ${
              activeSlide === 2
                ? "border-blue-600 text-black"
                : "border-gray-400 text-gray-400"
            }`}
          >
            “Easy Cargo” Brand identity
          </h1>
          <h1
            onClick={() => handleSlideClick(3)}
            className={`w-full cursor-pointer border-b-4 pb-4 transition-all ${
              activeSlide === 3
                ? "border-blue-600 text-black"
                : "border-gray-400 text-gray-400"
            }`}
          >
            UARMY Mobile Card game
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slide;
