import React from 'react'

const ConCon = () => {
  return (
    <div>
      {/* HEADING */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 font-[font1] uppercase">
        Contact Us
      </h1>

      {/* CONTACT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

        {/* EMAIL */}
        <div className="group relative overflow-hidden transition-all hover:rounded-[60px] border border-black border-8 p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase group-hover:text-green-400 transition">
            Email
          </h2>
          <p className="text-gray-800">
            Tech_club@gmail.com
          </p>
        </div>

        {/* INSTAGRAM */}
        <div className="group relative overflow-hidden transition-all hover:rounded-[60px] border border-black border-8 p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase group-hover:text-green-400 transition">
            Instagram
          </h2>
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 hover:text-green-400 transition"
          >
            @Insta_page
          </a>
        </div>

        {/* COLLEGE ADDRESS */}
        <div className="group relative overflow-hidden transition-all hover:rounded-[60px] border border-black border-8 p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase group-hover:text-green-400 transition">
            Address
          </h2>
          <p className="text-gray-800">
            IES IPS Academy 
          </p>
        </div>

      </div>

      {/* GOOGLE FORM SECTION */}
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center uppercase font-[font1]">
          Join Us
        </h2>

        <div className="w-full h-[600px] border border-white overflow-hidden rounded-[40px]">
          
          {/* Replace src with your Google Form link */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfExample/viewform?embedded=true"
            className="w-full h-full bg-white"
            title="Google Form"
          >
            Loading…
          </iframe>

        </div>
      </div>
    </div>
  )
}

export default ConCon
