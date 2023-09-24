import Image from "next/image";
import React from "react";
import { BiBell } from "react-icons/bi";

const MobileHeader = () => {
  return (
    <div className="w-full">
      {/* Bildirim simgesi */}
      <div className="relative mx-2 flex h-28 rounded-lg bg-white">
        <span className="absolute left-1 top-1">
          <BiBell className="text-2xl" />
        </span>

        {/* Profil bilgisi */}
        <div className="flex flex-1 items-end justify-start p-6">
          <div className="relative aspect-square w-20">
            {/* Kullanıcı resmi */}
            <Image src="/mobilecoms/man.png" alt="phone" fill sizes="100px" />
          </div>
          {/* Kullanıcı adı */}
          <span>Digital Mentor &#9013;</span>
        </div>

        {/* Bildirim metni */}
        <div className="flex flex-[3] flex-col items-start justify-center">
          <h1 className="text-xl font-bold">
            <em>Merhaba Murat Bey,</em>
          </h1>
          <span>
            Talep etmiş olduğunuz tedarik zinciri raporunu oluşturdum. Bu alana
            tıklayarak rapora erişim sağlayabiliriniz.
          </span>
        </div>
      </div>

      {/* Scope 1 bilgisi */}
      <div className="relative mx-2 mt-2 flex h-20 items-center justify-center rounded-bl-3xl rounded-br-3xl rounded-tl-md rounded-tr-md bg-[#0D1840]">
        <span className="absolute left-2 top-1 font-thin text-white">
          Scope 1
        </span>
        <div className="flex items-end justify-center gap-x-3">
          <div className="relative aspect-square w-11">
            {/* Dünya resmi */}
            <Image src="/mobilecoms/world.png" alt="world" fill sizes="100px" />
          </div>
          {/* Başlık */}
          <h1 className="text-2xl font-light uppercase text-white">
            Mobile Combustion
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
