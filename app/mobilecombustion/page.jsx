import MobileHeader from '@components/MobileComb/MobileCHeader'
import Inputs from '@components/MobileComb/input';
import Navbar from '@components/MobileComb/navbar';
import React from 'react'

const page = () => {
  return (
    <div
    className="flex h-auto w-screen"
    style={{ backgroundColor: "#ECECEC" }}
  >
    <Navbar />
    <div className="w-full overflow-hidden">
      <MobileHeader />
      <Inputs />
    </div>
  </div>
  )
}

export default page;
