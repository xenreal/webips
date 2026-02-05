import React from 'react'

const TeCon = () => {
  return (
    <div>
      {/* HEADING */}
      <h1 className="text-4xl text-black font-bold text-center mb-12">Our Team</h1>

      {/* CORE MEMBERS */}
      <div className="mb-16 text-black ">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Core Members
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-black border border-gray-700 p-5 rounded-xl">
            <h3 className="text-xl font-semibold">Aman Sharma</h3>
            <p className="text-gray-400">President</p>
            <p className="text-sm text-gray-500">3rd Year • CSE</p>
          </div>

          <div className="text-black border border-gray-700 p-5 rounded-xl">
            <h3 className="text-xl font-semibold">Priya Verma</h3>
            <p className="text-gray-400">Vice President</p>
            <p className="text-sm text-gray-500">3rd Year • IT</p>
          </div>
        </div>
      </div>

      {/* LEADS */}
      <div className="mb-16 text-black ">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Leads</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-black border border-gray-700 p-5 rounded-xl">
            <h3 className="text-xl font-semibold">Rahul Singh</h3>
            <p className="text-gray-400">Technical Lead</p>
            <p className="text-sm text-gray-500">2nd Year • CSE</p>
          </div>

          <div className="text-black border border-gray-700 p-5 rounded-xl">
            <h3 className="text-xl font-semibold">Sneha Patel</h3>
            <p className="text-gray-400">Design Lead</p>
            <p className="text-sm text-gray-500">2nd Year • ECE</p>
          </div>
        </div>
      </div>

      {/* COORDINATORS */}
      <div>
        <h2 className="text-black text-2xl font-semibold mb-6 border-b pb-2">
          Coordinators
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-black border border-gray-700 p-5 rounded-xl">
            <h3 className="text-xl font-semibold">Karan Gupta</h3>
            <p className="text-gray-400">Event Coordinator</p>
            <p className="text-sm text-gray-500">1st Year • ME</p>
          </div>

          <div className="text-black border border-gray-700 p-5 rounded-xl">
            <h3 className="text-xl font-semibold">Neha Joshi</h3>
            <p className="text-gray-400">Content Coordinator</p>
            <p className="text-sm text-gray-500">1st Year • CE</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TeCon
