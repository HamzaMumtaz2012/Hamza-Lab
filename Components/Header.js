'use client'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <>
        <div className="mx-auto flex min-h-11 w-full max-w-[1263px] items-center justify-between border-b border-[#e2e7ec] px-6 text-xs font-semibold text-[#697382] max-md:px-3">
        <span className="max-md:hidden">Free Home Collection on All Orders</span>
        <div className="flex items-center gap-5 max-md:mx-auto max-md:gap-2">
          <span className="flex items-center gap-[7px] border-r border-[#dce1e5] pr-5 max-md:pr-2 max-md:text-[10px]"><Image src="/call.png" alt="" width={15} height={15} />+92 (021) 111786986</span>
          <span className="flex items-center gap-[7px] max-md:text-[10px]"><Image src="/mail.png" alt="" width={15} height={15} />support@easalab.com</span>
        </div>
      </div>

      <header className="mx-auto flex w-full max-w-[1263px] items-center justify-between gap-14 border-b border-[#e6e9ed] px-6 py-[22px] pb-4 max-md:gap-4 max-md:px-3 max-md:py-[15px]">
        <Image className="h-auto w-[175px] max-md:w-[105px] rounded-lg" src="/logo.png" height={280} width={280} alt="Essa Laboratory" />
        <div className="flex h-11 w-[55%] max-w-[610px] items-center rounded-full bg-[#f4faff] px-[17px] max-md:h-[38px] max-md:w-auto max-md:flex-1" id="search">
          <input className="min-w-0 flex-1 bg-transparent text-[13px] text-[#273449] outline-none placeholder:text-[#929ca8]" type="text" placeholder="Search Our Store" aria-label="Search our store" />
          <Image src="/search.png" alt="Search" width={20} height={20} />
        </div>
        <Image className="h-[38px] w-[38px] cursor-pointer object-contain max-md:h-[30px] max-md:w-[30px]" src="/cart.png" alt="Cart" width={38} height={38} />
      </header>

      <nav className="mx-auto flex w-full max-w-[1263px] justify-center gap-[clamp(20px,4vw,58px)] overflow-x-auto whitespace-nowrap px-6 py-5 text-sm font-semibold max-md:justify-start max-md:gap-3.5 max-md:px-3 max-md:text-xs" aria-label="Main navigation">
        <a className="hover:text-red-400" href="#">Home</a><a className="hover:text-red-400" href="/About">About Us</a><a className="hover:text-red-400" href="/OnlineReports">Online Reports</a>
        <a className="hover:text-red-400" href="/LabTests">Lab Tests</a><a className="hover:text-red-400" href="/Packages">Packages</a><a className="hover:text-red-400" href="#">Mobile App</a>
      </nav>
      </>
  )
}

export default Header