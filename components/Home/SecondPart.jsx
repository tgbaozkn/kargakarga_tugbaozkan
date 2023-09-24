import { dataFirst, dataSecond } from "@public/secondpartdata";
import Image from "next/image";
import React from "react";
import Card from "./Card";


const SecondPart = () => {
  return (
    <div className="relative h-full w-screen">
      <div className="absolute -right-32 top-0 -z-10">
        <div className="relative aspect-square w-[400px]">
          <Image src="/ellipse.png" fill alt="ellipse" />
        </div>
      </div>
      <h1 className="mb-20 pl-20 text-5xl font-extrabold uppercase">
        Our Services
      </h1>
      <div className="mx-auto w-11/12">
        <div className="grid-container">
          {dataFirst.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.img}
            />
          ))}
          {dataSecond.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.img}
            />
          ))}
        </div>
        <div className="flex gap-x-2"></div>
      </div>
    </div>
  );
};

export default SecondPart;