import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className=" text-[#536274]">
        <div className="mx-auto grid w-full max-w-[1263px] grid-cols-[1.35fr_1fr_1fr_1.35fr] gap-12 px-6 py-16 max-md:grid-cols-2 max-md:gap-10 max-md:px-3">
          <div>
            <img className='mb-5 h-20' src="/logo.png" alt="" />
            <p className="m-0 max-w-xs text-sm leading-7">Pakistan&apos;s #1 Diagnostic Centre, providing quality diagnostic services in Karachi since 1987.</p>
          </div>
          <div><h3 className="mb-5 text-xs font-bold tracking-widest text-[#273449]">INFORMATION</h3><div className="grid gap-3 text-sm"><a href="#">Shipping Policy</a><a href="#">Careers</a><a href="#">FAQs</a><a href="#">Contact Us</a></div></div>
          <div><h3 className="mb-5 text-xs font-bold tracking-widest text-[#273449]">SERVICES</h3><div className="grid gap-3 text-sm"><a href="#services">All Services</a><a href="#lab-tests">Lab Tests</a><a href="#services">Physiotherapy</a><a href="#services">Vaccination</a></div></div>
          <div><h3 className="mb-5 text-xs font-bold tracking-widest text-[#273449]">CONTACT US</h3><p className="m-0 text-sm leading-7">SC-13, Block H North Nazimabad Town, Karachi</p><p className="mt-3 text-sm">+92 (021) 111 786 986</p><p className="text-sm">info@essalab.com</p></div>
        </div>
        <div className="border-t border-[#dce6ed] px-6 py-5 text-center text-xs max-md:px-3">© 2026 Dr. Essa Lab. All rights reserved.</div>
      </footer>

      <div className="fixed bottom-7 right-[34px] z-10 grid gap-[22px] max-md:bottom-4 max-md:right-[15px] max-md:gap-3" aria-label="Contact options">
        <a className="grid h-14 w-14 place-items-center rounded-full bg-[#ffc107] text-[27px] text-black shadow-[0_2px_5px_#a2a2a2] no-underline max-md:h-[46px] max-md:w-[46px] max-md:text-[21px]" href="tel:+9221111786986" aria-label="Call us">☎</a>
        <a className="grid h-14 w-14 place-items-center rounded-full bg-[#ffc107] text-[27px] text-black shadow-[0_2px_5px_#a2a2a2] no-underline max-md:h-[46px] max-md:w-[46px] max-md:text-[21px]" href="https://wa.me/9221111786986" aria-label="Chat on WhatsApp">◔</a>
      </div>
      </>
  )
}

export default Footer