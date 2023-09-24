import Image from "next/image";
import React from "react";


const PersonCard = ({ name, role, img }) => {
    return (
      <div key={name} className="mt-8">
       <div className="relative md:mt-0   ml-8 w-48 h-35 md:w-72 md:h-60  xl:h-[270px] xl:w-[300px]">
          <Image src={img} alt="name"  fill  sizes="300"/>
        </div>
        <h1 className="font-bold text-lg md:text-2xl mt-5  ml-8">{name}</h1>
        <p className="mt-4 text-sm md:text-lg whitespace-break-spaces  ml-8">{role}</p>
      </div>
    );
  }
  export default PersonCard;