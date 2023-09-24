"use client";

import { useEffect, useState } from "react";

function getCookieValue(cookieName) {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === cookieName) {
      return value;
    }
  }
  return null;
}

export default function Cookies() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);

  const handleAcceptCookies = () => {
    const cookieKey1 = "username";
    const cookieValue1 = "abcabc";

    const cookieKey2 = "password";
    const cookieValue2 = "1234578";
   
    // Kalıcı çerezler - Son kullanma tarihi 30 gün sonraya ayarlandı
    const expire = new Date();
    expire.setDate(expire.getDate() + 30);

    document.cookie = `${cookieKey1}=${cookieValue1}; expires=${expire.toUTCString()}; path=/`;
    document.cookie = `${cookieKey2}=${cookieValue2}; expires=${expire.toUTCString()}; path=/`;

    setAcceptedCookies(true);
  };

  const handleRejectCookies = () => {
    const cookieKey1 = "username";
    const cookieKey2 = "password";

    // İlgili çerezleri silmek için
    const expire = new Date(0); // Geçmiş bir tarih

    document.cookie = `${cookieKey1}=; expires=${expire.toUTCString()}; path=/`;
    document.cookie = `${cookieKey2}=; expires=${expire.toUTCString()}; path=/`;
    console.log( document.cookie)
    setAcceptedCookies(true);
    setInitialLoad(true);
    
  };

  useEffect(() => {
    const username = getCookieValue("username");
    const password = getCookieValue("password");

    if (username != null || password != null) {
      setAcceptedCookies(true);
    }

    setInitialLoad(true);
    // console.log( document.cookie )
  }, []);

  if (acceptedCookies || !initialLoad) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 flex h-24 w-full items-center justify-between bg-black px-20 py-10 text-white">
      <p className="flex-[2] text-base font-normal leading-6">
        privacy setting — This site uses third-party website traking
        technologies to provide and continially improve our services. I agree
        and may revoke or change my consent at any time with effect for the
        future. See also our <span className="underline">Privacy Policy </span>
        and <span className="underline">Cookies </span>
      </p>
      <div className="flex flex-1 items-center justify-end gap-3">
        <button
          onClick={handleRejectCookies}
          className="rounded-2xl bg-[#4A4A4A] px-6 py-3 font-semibold"
        >
          Deny
        </button>
        <button
          onClick={handleAcceptCookies}
          className="rounded-2xl bg-white px-6 py-3 font-semibold text-black"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
