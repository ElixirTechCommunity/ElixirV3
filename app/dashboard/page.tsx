"use client"
import React from 'react'


const Dashboard = () => {

  return (
    <>

      {/* Main Dashboard Content */}
      <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto lg:mt-44 mt-20">
        {/* Welcome Card */}
        <div className="rounded-2xl p-8 bg-[rgba(17,25,40,0.85)] backdrop-blur-lg border border-white/10 shadow-xl flex flex-col items-start relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-transparent to-blue-500/20 opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome back, <span className='text-[#CBACF9]'>User!</span></h2>
            <p className="text-white/80 text-lg">Here's what's happening with your account today.</p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple/20 rounded-full blur-3xl" />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group rounded-xl p-6 bg-[rgba(17,25,40,0.75)] backdrop-blur-md border border-white/10 shadow hover:border-purple/50 transition-all duration-300 flex flex-col items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <span className="text-4xl font-bold bg-gradient-to-r from-purple to-blue-500 bg-clip-text text-transparent">5</span>
              <span className="text-white/80 mt-2 block text-center">Events Attended</span>
              <span className="text-green-400 text-sm mt-1 block">↑ 2 this month</span>
            </div>
          </div>
          <div className="group rounded-xl p-6 bg-[rgba(17,25,40,0.75)] backdrop-blur-md border border-white/10 shadow hover:border-blue-400/50 transition-all duration-300 flex flex-col items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">12</span>
              <span className="text-white/80 mt-2 block text-center">Notes Created</span>
              <span className="text-green-400 text-sm mt-1 block">↑ 5 this week</span>
            </div>
          </div>
          <div className="group rounded-xl p-6 bg-[rgba(17,25,40,0.75)] backdrop-blur-md border border-white/10 shadow hover:border-green-400/50 transition-all duration-300 flex flex-col items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">2</span>
              <span className="text-white/80 mt-2 block text-center">Upcoming Events</span>
              <span className="text-blue-400 text-sm mt-1 block">Next: 3 days</span>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="rounded-2xl p-6 bg-[rgba(17,25,40,0.80)] backdrop-blur-lg border border-white/10 shadow flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple/10 opacity-30" />
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Upcoming Events</h3>
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">View All</button>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-purple/20 flex items-center justify-center">
                  <span className="text-purple font-semibold">10</span>
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-purple transition-colors">Hackathon 2024</h4>
                  <p className="text-white/60 text-sm">July 10 • 9:00 AM</p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-blue-400/20 flex items-center justify-center">
                  <span className="text-blue-400 font-semibold">15</span>
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">React Workshop</h4>
                  <p className="text-white/60 text-sm">July 15 • 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl p-6 bg-[rgba(17,25,40,0.80)] backdrop-blur-lg border border-white/10 shadow flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-transparent to-blue-500/10 opacity-30" />
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">View All</button>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
                  <span className="text-green-400 text-sm">✓</span>
                </div>
                <div>
                  <p className="text-white/90 group-hover:text-white transition-colors">Added a new note: "Next.js Tips"</p>
                  <p className="text-white/50 text-sm">2 hours ago</p>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center">
                  <span className="text-blue-400 text-sm">🎉</span>
                </div>
                <div>
                  <p className="text-white/90 group-hover:text-white transition-colors">Attended "Elixir Community Meetup"</p>
                  <p className="text-white/50 text-sm">Yesterday</p>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-purple/20 flex items-center justify-center">
                  <span className="text-purple text-sm">📝</span>
                </div>
                <div>
                  <p className="text-white/90 group-hover:text-white transition-colors">Created a new project</p>
                  <p className="text-white/50 text-sm">2 days ago</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard