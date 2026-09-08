import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-red-500 text-4xl font-bold font-sans text-center my-10 mb-2'>About Us</h1>
      
<ol className='flex gap-3 justify-center items-center my-2' role="list">
        <li >
            <a className='flex gap-2 items-center ' href="/">
                <svg className='h-4.5' aria-hidden="true" focusable="false" data-prefix="fal" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="icon icon-home"><path fill="currentColor" d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z" class=""></path></svg>
                Home 
            </a>
        </li>
        <div>/</div>
            <li className=''>
                <span class="breadcrumb__link" ap-currentaria="page">About Us</span>
            </li>
        
    </ol>
        <main className="min-h-screen bg-white text-gray-700">

      {/* Hero */}
      <section className="bg-red-50 px-6 py-20 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
          Hamza Lab
        </p>

        <h1 className="text-4xl font-extrabold text-gray-900 md:text-6xl">
          Trusted <span className="text-red-600">Laboratory</span> Services
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Reliable diagnostic testing supported by modern technology,
          professional procedures, and a commitment to accurate results.
        </p>

        <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-red-600"></div>
      </section>


      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-red-600">
              About Us
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              About Hamza Lab
            </h2>

            <div className="mt-4 h-1 w-12 rounded-full bg-red-600"></div>
          </div>

          <p className="leading-8 text-gray-600">
            Hamza Lab is a modern diagnostic laboratory dedicated to providing
            reliable, accurate, and timely laboratory testing services. Our
            laboratory combines modern technology with carefully designed
            testing procedures to provide dependable diagnostic services for
            patients and healthcare professionals.
          </p>

        </div>
      </section>


      {/* Services */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              What We Do
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Our Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              A range of laboratory services designed around accuracy,
              efficiency, and patient convenience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-xl text-red-600">
                🩸
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                Blood Testing
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Routine blood investigations performed using organized
                laboratory procedures and modern testing equipment.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-xl text-red-600">
                🔬
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                Diagnostic Tests
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                A variety of diagnostic examinations designed to provide
                useful laboratory information.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-xl text-red-600">
                ❤️
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                Health Screening
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Convenient laboratory screening services to help monitor
                general health and support informed medical decisions.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Quality */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-red-600 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-red-100">
              Our Standard
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Quality & Accuracy
            </h2>

            <p className="mt-5 leading-8 text-red-50">
              At Hamza Lab, quality is an important part of every testing
              process. Our procedures focus on accurate sample handling,
              careful analysis, and organized reporting.
            </p>
          </div>


          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Innovation
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Modern Technology
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our laboratory concept is built around modern diagnostic
              technology and efficient testing workflows. By combining
              technology with professional laboratory practices, Hamza Lab
              aims to provide a smooth and dependable diagnostic experience.
            </p>

          </div>

        </div>
      </section>


      {/* Mission */}
      <section className="bg-gray-900 px-6 py-20 text-center text-white">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Our Mission
        </p>

        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold md:text-4xl">
          Making laboratory testing simpler, reliable, and accessible.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
          Hamza Lab aims to build a trusted laboratory service focused on
          accuracy, efficiency, professionalism, and patient convenience.
        </p>

        <button className="mt-8 rounded-full bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700">
          Explore Our Services
        </button>

      </section>

    </main>

    </div>
  )
}

export default page