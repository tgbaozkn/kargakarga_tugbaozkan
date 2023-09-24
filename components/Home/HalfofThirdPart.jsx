"use client";

import { feedbacks } from "@public/customerfeedback";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HalfofThirdPart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexMobile, setActiveIndexMobile] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === feedbacks.length - 2 ? 0 : prevIndex + 1,
      );
    }, 3000);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      const interval = setInterval(() => {
        setActiveIndexMobile((prevIndex) =>
          prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1,
        );
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [windowWidth]);

  return (
    <div className="relative mt-20 h-[500px] pt-20">
      <div className="absolute -left-20 -top-10 -z-10">
        <div className="relative aspect-square w-[350px]">
          <Image src="/ellipse.png" fill alt="ellipse" />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="mb-10 ml-20 text-4xl font-extrabold uppercase">
          Customer Feedback
        </h1>

        <div className="relative mx-auto hidden w-11/12 overflow-hidden rounded-2xl bg-white md:block">
          <div
            className={`z-10 flex h-full flex-row transition-transform `}
            style={{ transform: `translateX(-${activeIndex * 700}px)` }}
          >
            {feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="mx-auto px-4 py-8 sm:min-w-[700px]"
              >
                <div className="rounded p-4">
                  <div className="flex">
                    <div className="relative aspect-square w-16">
                      <Image
                        src={feedback.img}
                        alt={feedback.name}
                        fill
                        sizes="50px"
                      />
                    </div>
                    <div className="ml-6">
                      <h2 className="text-2xl font-bold capitalize">
                        {feedback.name}
                      </h2>
                      <span className="text-sm text-gray-500">
                        {feedback.date}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-800">{feedback.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto block w-full overflow-hidden rounded-2xl bg-white md:hidden">
          <div
            className={`z-10 flex h-full flex-row transition-transform `}
            style={{ transform: `translateX(-${activeIndexMobile * 100}vw)` }}
          >
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="min-w-[100vw] px-2 py-4">
                <div className="rounded p-4">
                  <div className="flex">
                    <div className="relative aspect-square w-8 md:w-16">
                      <Image
                        src={feedback.img}
                        alt={feedback.name}
                        fill
                        sizes="50px"
                      />
                    </div>
                    <div className="ml-6">
                      <h2 className="text-lg font-bold capitalize md:text-2xl">
                        {feedback.name}
                      </h2>
                      <span className="text-xs text-gray-500 md:text-sm">
                        {feedback.date}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-800 md:text-base">
                    {feedback.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfofThirdPart;