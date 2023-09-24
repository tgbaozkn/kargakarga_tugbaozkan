import Image from "next/image";
import React from "react";
import {
  AiOutlinePieChart,
  AiOutlineFile,
  AiOutlineMessage,
} from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsFillPersonFill, BsPersonGear } from "react-icons/bs";
import { RiLockPasswordLine, RiSettings4Line } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[850px] w-[13%] bg-white">
      <div className="flex h-64 w-full flex-col items-center justify-center bg-blue-950 text-white">
        <div className="relative mb-2 aspect-square w-28">
          <Link href="/">
            <Image src="/profile.png" fill alt="person" sizes="300px" />
          </Link>
        </div>
        <h2>Murat Turan</h2>
        <span className="font-thin">Tedarik Zinciri Yöneticisi</span>
      </div>
      <div className="flex flex-col items-start justify-center px-6 py-4">
        <ul className="mt-6 w-full">
          <h1 className="mb-4 font-bold uppercase text-gray-400">Menü</h1>
          <li className="flex w-full items-center gap-x-4 rounded-lg py-2 pl-4">
            <AiOutlinePieChart />
            Eğitimler
          </li>
          <li className="flex w-full items-center gap-x-4 rounded-lg bg-[#0D1840] py-2 pl-4 text-white">
            <LuLayoutDashboard />
            Analiz
          </li>
          <li className="flex w-full items-center gap-x-4 rounded-lg py-2 pl-4">
            <AiOutlineFile />
            Raporlar
          </li>
          <li className="flex w-full items-center gap-x-4 rounded-lg py-2 pl-4">
            <BsFillPersonFill />
            Profil
          </li>
          <li className="flex w-full items-center gap-x-4 rounded-lg py-2 pl-4">
            <AiOutlineMessage />
            TİM'e Yaz
          </li>
        </ul>
        <ul className="mt-10 w-full">
          <h1 className="mb-4 font-bold uppercase text-gray-400">Tercihler</h1>
          <li className="flex w-full items-center gap-x-4 rounded-lg py-2 pl-4">
            <BsPersonGear />
            Yetkilendirme
          </li>
          <li className="flex w-full items-center gap-x-4 rounded-lg py-2 pl-4">
            <RiLockPasswordLine />
            Şifremi Değiştir
          </li>
          <li className="flex w-full items-center gap-x-4 rounded-lg py-2 pl-4">
            <RiSettings4Line />
            Gizlilik Politikası
          </li>
        </ul>
        <div className="relative mx-auto mt-2 h-8 w-24">
          <Image src="/mobilecoms/logo.png" fill alt="logo" sizes="300px" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;