"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import MobileHeader from "@components/MobileComb/MobileCHeader";

const Header = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const isMobileCombustion =path === "/mobilecombustion";
  return (
   
      <div
      className={`${
        isMobileCombustion ? "hidden" : "block"
      } absolute left-0 top-0 z-50 flex h-24 w-full items-center justify-between px-14`}
    >
      <div className="left">
        <Link
          href="/"
          className="text-4xl font-extrabold tracking-wider text-[#145389]"
        >
          kargakarga
        </Link>
      </div>
      <div className="hidden items-center gap-4 text-white md:flex">
        <Link
          href="/projects"
          className="rounded-2xl bg-black px-4 py-2 text-sm"
        >
          Projects
        </Link>
        <Link
          href="/services"
          className="rounded-2xl bg-black px-4 py-2 text-sm"
        >
          Services
        </Link>
        <Link href="/about" className="rounded-2xl bg-black px-4 py-2 text-sm">
          About Us
        </Link>
        <Link
          href="/contact"
          className="rounded-2xl bg-black px-4 py-2 text-sm"
        >
          Contact Us
        </Link>
        <Link
          href="/mobilecombustion"
          className="group relative rounded-2xl bg-blue-600 px-4 py-2 text-sm"
        >
          Start a Project
         

        </Link>
      </div>

      <div
        className={`z-50 flex h-5 cursor-pointer items-center justify-center gap-x-1 transition-all md:hidden ${
          open ? "rotate-45" : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`h-full w-1 bg-red-400 transition-all ${
            open ? "translate-x-2 rotate-90" : ""
          }`}
        ></div>
        <div className="h-full w-1 bg-red-400"></div>
        <div
          className={`h-full w-1 bg-red-400 transition-all ${
            open ? "-translate-x-2 rotate-90" : ""
          }`}
        ></div>
      </div>
      <div
        className={`${
          open ? "left-0 opacity-100" : "-left-full opacity-0"
        } absolute top-20 z-50 flex h-screen w-full flex-col items-center justify-center gap-y-10 bg-white text-4xl transition-all md:hidden`}
      >
        <button>Projects</button>
        <button>Services</button>
        <button>About Us</button>
        <button>Contact Us</button>
        <button className="text-blue-500">Start a Project</button>
      </div>
    </div>
  
  );
};

export default Header;