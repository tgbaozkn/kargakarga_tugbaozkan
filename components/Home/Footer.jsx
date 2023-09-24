import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex h-60 flex-col items-center justify-center bg-blue-950">
        <div className="flex w-full items-center justify-center gap-x-4">
          <div className="relative h-14 w-8 md:w-14">
            <Link href="https://www.instagram.com/secenory" target="_blank">
              <Image src="/insta.svg" fill alt="insta" />
            </Link>
          </div>

          <div className="relative h-14 w-8 md:w-14">
            <Link href="https://www.linkedin.com/in/emresates/" target="_blank">
              <Image src="/linkedin.svg" fill alt="linkedin" />
            </Link>
          </div>

          <div className="relative h-14 w-8 md:w-14">
            <Link href="/" target="_blank">
              <Image src="/twitter.svg" fill alt="twitter" />
            </Link>
          </div>
        </div>
        <span className="mt-8 md:text-base text-sm text-center">
          Üretken insanların tanışıp, proje üretebildiği açık inovasyon merkezi.
        </span>
      </div>
  )
}

export default Footer
