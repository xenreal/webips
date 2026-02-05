import React from 'react'

const AbCon = () => {
  return (
    <div>
        {/* HEADING */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 font-[font1] uppercase">
        About Us
      </h1>

      {/* CLUB DESCRIPTION */}
      <div className="group transition-all hover:rounded-[60px] border border-black border-8 p-8 md:p-12 mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase group-hover:text-green-400 transition">
          Our Club
        </h2>

        <p className="text-gray-800 max-w-[900px] mx-auto text-sm md:text-lg">
          The Tech Club is a student-driven community focused on innovation,
          learning, and collaboration in modern technology domains such as
          Programming, Robotics, Artificial Intelligence, IoT, and Web
          Development. The club provides students opportunities to develop
          technical skills, participate in competitions, and work on real-world
          projects.
        </p>
      </div>

      {/* VISION + MISSION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

        {/* VISION */}
        <div className="group transition-all hover:rounded-[60px] border border-black border-8 p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase group-hover:text-green-400 transition">
            Vision
          </h2>

          <p className="text-gray-800">
            To create a strong technical community that encourages creativity,
            innovation, and technological excellence among students while
            preparing them for future industry challenges.
          </p>
        </div>

        {/* MISSION */}
        <div className="group transition-all hover:rounded-[60px] border border-black border-8 p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase group-hover:text-green-400 transition">
            Mission
          </h2>

          <p className="text-gray-800">
            To organize workshops, hackathons, and project-based learning
            sessions that help students gain practical knowledge, teamwork
            experience, and exposure to emerging technologies.
          </p>
        </div>

      </div>

      {/* FACULTY LEADS */}
      <div className="mb-20">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 uppercase font-[font1]">
          Faculty Leads
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="group border border-black border-8 p-8 text-center transition-all hover:rounded-[60px]">
            <h3 className="text-xl font-bold group-hover:text-green-400 transition">
              Faculty Lead 1
            </h3>
            <p className="text-gray-800">Faculty Coordinator</p>
          </div>

          <div className="group border border-black border-8 p-8 text-center transition-all hover:rounded-[60px]">
            <h3 className="text-xl font-bold group-hover:text-green-400 transition">
              Faculty Lead 2
            </h3>
            <p className="text-gray-800">Technical Mentor</p>
          </div>

        </div>
      </div>

      {/* STUDENT LEADS */}
      <div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 uppercase font-[font1]">
          Student Leads
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="group border border-black border-8 p-8 text-center transition-all hover:rounded-[60px]">
            <h3 className="text-lg font-bold group-hover:text-green-400 transition">
              Student Name 1
            </h3>
            <p className="text-gray-800">Club President</p>
          </div>

          <div className="group border border-black border-8 p-8 text-center transition-all hover:rounded-[60px]">
            <h3 className="text-lg font-bold group-hover:text-green-400 transition">
              Student Name 2
            </h3>
            <p className="text-gray-800">Technical Lead</p>
          </div>

          <div className="group border border-black border-8 p-8 text-center transition-all hover:rounded-[60px]">
            <h3 className="text-lg font-bold group-hover:text-green-400 transition">
              Student Name 3
            </h3>
            <p className="text-gray-800">Event Coordinator</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AbCon
