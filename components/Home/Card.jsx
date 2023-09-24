import Image from "next/image";
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div key={title} className="my-custom-card rounded-md" style={{ background: '#F5F5F5' }}>
      <h1 className="mb-4 text-xl md:text-2xl font-medium ml-5 mt-3">{title}</h1>
      <div className="relative h-32 md:h-40 xl:h-[200px] w-52 md:w-72 xl:w-[280px] ml-5">
        <Image src={image} alt={title} width={280} height={200}  />
      </div>
      <p className=" text-gray-400  text-center text-sm">{description}</p>
      {/* Ekran genişliği 768 pikselden küçükse, kartı dikey olarak düzenle */}
      <style jsx>{`
        @media (max-width: 768px) {
          .my-custom-card {
            /* Kartın dikey düzeni */
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .my-custom-card h1 {
            margin: 0; /* Üst ve alt marjları kaldır */
          }

          .my-custom-card .relative {
            width: 100%;
            max-width: 300px; /* Örnek bir maksimum genişlik ayarı */
          }


        }
      `}</style>
    </div>
  );
};

export default Card;
