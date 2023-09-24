"use client"
import React, { useState, useEffect } from "react";
import Cookies from "./Home/Cookies";
import SecondPart from "./Home/SecondPart";
import Slide from "./Home/Slide";
import ThirdPart from "./Home/ThirdPart";

import HalfofThirdPart from "./Home/HalfofThirdPart";
import DisableMobileSection from "./Home/DisableMobileSection";
import FaqPart from "./Home/FaqPart";
import FormPart from "./Home/FormPart";
import Footer from "./Home/Footer";

const ScrollingHome = () => {
    const [visiblePages, setVisiblePages] = useState([0, 1, 2,3]); // Sayfa eklenen veya kaydırılan durumda görüntüleniyor

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;

        if (scrollPosition + windowHeight >= pageHeight) {
          addNextPage();
        }
      };

      window.addEventListener("scroll", handleScroll);
      console.log(visiblePages);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [visiblePages]);

    const addNextPage = () => {
      // Görünen sayfalar dizisine bir sonraki sayfayı ekliyoruz
      // Örneğin, mevcut `visiblePages` durumuna bir sonraki sayfa numarasını ekleyebiliriz
      // Bu örnekte, her sayfa eklenmeden önce sayfanın maksimum sırasını kontrol ediyoruz
      if (visiblePages[visiblePages.length - 1] < 8) {
        setVisiblePages((prevPages) => {
          const nextPage = prevPages[prevPages.length - 1] + 1;
          return [...prevPages, nextPage];
        });
      }

      // Sayfanın şu anda görünen sayfalarını güncelle
      const currentVisiblePages = visiblePages.filter((page) => page <= window.scrollY / window.innerHeight * 2);
      setVisiblePages(currentVisiblePages);

      // Kullanıcının kaydırdığı sayfayı da ekle
      const targetPage = visiblePages[visiblePages.length - 1];
      setVisiblePages((prevPages) => [...prevPages, targetPage]);
    };

    return (
      <div style={{ overflowX: "hidden" }}>
        
        {visiblePages.includes(0) && <Cookies />}
        {visiblePages.includes(1) && <Slide />}
        {visiblePages.includes(2) && <SecondPart />}
        {visiblePages.includes(3) && <ThirdPart />}
        {visiblePages.includes(3) && <HalfofThirdPart />}
        {visiblePages.includes(3) && <DisableMobileSection />}
        {visiblePages.includes(3) && <FaqPart />}
        {visiblePages.includes(3) && <FormPart />}
        {visiblePages.includes(3) && <Footer />}

      </div>
    );
  };

  export default ScrollingHome;
