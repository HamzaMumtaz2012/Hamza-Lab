'use client'
import Image from "next/image";


const serviceCards = [
  ["BOOK BLOOD TESTS", "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85"],
  ["BOOK PHYSIOTHERAPY", "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=85"],
  ["BOOK ULTRASOUND", "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85"],
  ["BOOK VACCINATION", "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=85"],
];

const labTests = [
  ["CBC Test (Complete Blood Count)", "RS.790.00", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85"],
  ["Liver Functions Test - LFT", "RS.2,130.00", "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85"],
  ["UCE Profile", "RS.3,030.00", "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85", "RS.3,100.00"],
  ["Lipid Profile Test", "RS.2,440.00", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85"],
];

const testimonials = [
  ["Khawar Hayat", "I am a regular visitor of Dr Essa Lab. It is open 24 hours and the staff is cooperative, qualified and efficient. Highly recommended for lab screening."],
  ["Sumaira Hameed", "The staff is supportive and caring. Everyone was experienced, well-behaved and made the whole process comfortable."],
  ["Ammar Islam", "I had a fantastic experience with Dr. Essa Lab. The staff was friendly and professional, and the lab was clean and well organized."],
];

const faqs = [
  ["How do I book a lab test online?", "Choose a test from the Lab Tests section, add it to your cart, and complete the checkout form with your details."],
  ["How do I get free home sample collection?", "Free home collection is available on eligible orders. Select home collection at checkout and our team will contact you to confirm a time."],
  ["How can I pay for my test or service?", "You can pay through the available payment options at checkout, or confirm the payment method with our support team."],
];

function AddToCartButton() {
  return (
      <button className="add-to-cart mt-3 inline-flex h-10 w-10 items-center gap-2 overflow-visible rounded-full border-0 bg-[#83c95d] px-2.75 text-black transition-[width,background-color,color] duration-200 hover:w-35.25 hover:bg-[#76bd51] hover:text-white" type="button" aria-label="Add to cart">
      <Image className="cart-icon shrink-0" src="/cart.png" alt="" width={18} height={18} />
      <span className="cart-label ml-1.75 whitespace-nowrap text-xs font-bold">ADD TO CART</span>
    </button>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden text-[#273449]">
  

      <section>
        <img className="block max-h-[440px] w-full object-cover max-md:min-h-[180px]" src="/hero-image.webp" alt="Essa Laboratory services" />
        <span className="mx-auto my-[18px] mb-[50px] block h-[5px] w-[108px] rounded-full relative -top-12 bg-[#d7dce0]" />
      </section>

      <section className="mx-auto mb-28 w-full max-w-[1263px] px-6 max-md:mb-[60px] max-md:px-3" id="services">
        <div className="grid grid-cols-4 gap-7 max-md:grid-cols-2 max-md:gap-3.5">
          {serviceCards.map(([title, image]) => (
            <a className="group relative aspect-[1.18] overflow-hidden rounded border border-[#0876d7] bg-[#80cf5c] text-white" href="#lab-tests" key={title}>
              <img className="absolute inset-0 h-full w-full object-cover" src={image} alt="" />
              <div className="service-overlay absolute inset-0" />
              <strong className="absolute bottom-[25px] left-[30px] max-w-[calc(100%-50px)] bg-[#0766c2] px-2 py-[5px] text-[clamp(16px,1.7vw,24px)] leading-[1.15] shadow-[0_2px_4px_rgba(0,45,90,0.55)] max-md:bottom-3 max-md:left-2.5 max-md:text-[13px]">{title}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-[1263px] px-6 max-md:mt-16 max-md:px-3" id="lab-tests">
        <div className="mb-7 flex items-center justify-center gap-4 max-md:flex-col max-md:items-start max-md:gap-2.5">
          <h1 className="m-0 text-[clamp(24px,2.4vw,31px)] leading-tight text-[#086ac8] max-md:text-[23px]">Lab Tests With Free Home Collection</h1>
          <a className="rounded-[5px] bg-[#83c95d] px-3 py-2 text-[13px] text-white no-underline" href="#lab-tests">All Lab Tests</a>
        </div>
        <div className="grid grid-cols-4 gap-7 max-md:grid-cols-2 max-md:gap-3.5">
          {labTests.map(([title, price, image, oldPrice]) => (
            <article className="min-w-0" key={title}>
              <div className="relative aspect-[1.03] overflow-hidden"><img className="h-full w-full object-cover" src={image} alt="" />{oldPrice && <span className="absolute left-3.5 top-3.5 rounded bg-[#76c84f] px-1.5 py-1 text-[11px] font-bold text-white">-2%</span>}</div>
              <h2 className="my-3 min-h-[42px] text-base font-bold leading-[1.35] text-[#273449] max-md:text-sm">{title}</h2>
              <div className="flex min-h-7 items-center gap-2.5"><strong className="text-base text-[#fa4167]">{price}</strong>{oldPrice && <del className="text-xs font-semibold text-[#8d9296]">{oldPrice}</del>}</div>
              <AddToCartButton />
            </article>
          ))}
        </div>
      </section>

      <section className="mt-28 bg-[#f5faff] px-6 py-20 max-md:mt-20 max-md:px-3 max-md:py-14">
        <div className="mx-auto w-full max-w-[1263px]">
          <h2 className="mb-10 text-center text-[clamp(25px,3vw,36px)] font-bold text-[#086ac8]">Trusted by Over 10 Million Customers Across Pakistan</h2>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {testimonials.map(([name, quote]) => (
              <article className="border border-[#e0eaf2] bg-white p-7 shadow-[0_8px_25px_rgba(26,92,135,0.06)]" key={name}>
                <div className="mb-4 text-lg tracking-[3px] text-[#83c95d]">★★★★★</div>
                <p className="m-0 min-h-28 text-sm leading-7 text-[#667384]">{quote}</p>
                <div className="mt-5 border-t border-[#e7edf2] pt-4">
                  <strong className="text-sm text-[#273449]">{name}</strong>
                  <span className="mt-1 block text-xs text-[#9aa5b1]">Verified customer</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1263px] grid-cols-4 gap-5 px-6 py-20 max-md:grid-cols-2 max-md:gap-3 max-md:px-3 max-md:py-14">
        {["Free Home Collection", "24/7 Support Online", "Fastest Turnaround Time", "Reliable & Trusted"].map((feature, index) => (
          <div className="border-r border-[#dce6ed] px-4 text-center last:border-0 max-md:border-b max-md:border-r-0 max-md:pb-5" key={feature}>
            <span className="mb-4 inline-grid h-12 w-12 place-items-center rounded-full bg-[#eaf6e4] text-xl font-bold text-[#83c95d]">{index + 1}</span>
            <h3 className="m-0 text-sm font-bold text-[#273449]">{feature}</h3>
          </div>
        ))}
      </section>

      <section className="mx-auto grid w-full max-w-[1263px] grid-cols-2 gap-16 px-6 pb-24 max-md:grid-cols-1 max-md:gap-10 max-md:px-3 max-md:pb-16">
        <div>
          <h2 className="mb-7 text-3xl font-bold text-[#086ac8]">Frequently Asked Questions</h2>
          <div className="divide-y divide-[#dfe8ef] border-y border-[#dfe8ef]">
            {faqs.map(([question, answer]) => (
              <details className="group py-5" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-bold text-[#273449] marker:hidden">
                  {question}<span className="text-xl font-normal text-[#83c95d] group-open:rotate-45">+</span>
                </summary>
                <p className="mb-0 mt-4 text-sm leading-6 text-[#718092]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center rounded bg-[#086ac8] px-10 py-12 text-white max-md:px-6">
          <h2 className="m-0 text-3xl font-bold">Need help with a test?</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-blue-100">Our team is available around the clock to help you choose the right test and arrange home collection.</p>
          <a className="mt-5 w-fit rounded bg-[#83c95d] px-5 py-3 text-sm font-bold text-white no-underline hover:bg-[#72b84f]" href="tel:+9221111786986">Call +92 (021) 111786986</a>
        </div>
      </section>

      <section className="bg-[#f6f7f7] px-6 py-14 text-black max-md:px-3">
        <div className="mx-auto flex w-full max-w-[800px] flex-col items-center text-center">
          <h2 className="m-0 text-3xl font-bold">Sign Up For Exclusive Discount Offers</h2>
          <p className="mt-3 text-sm text-gray-500">Stay updated about our limited discount offers on tests and services.</p>
          <form className="mt-7 flex w-full max-w-[560px] gap-2 max-md:flex-col" onSubmit={(event) => event.preventDefault()}>
            <input className="min-w-0 flex-1 rounded-full border-0 px-4 py-3 text-sm text-[#273449] outline-none bg-white" type="email" placeholder="Enter your email address" aria-label="Email address" />
            <button className=" bg-[#83c95d] px-6 py-3 text-sm font-bold text-white hover:bg-[#72b84f] rounded-full" type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </section>

    
    </main>
  );
}
