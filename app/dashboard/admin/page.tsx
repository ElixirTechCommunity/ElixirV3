"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock Data
const mockStudents = [
  {
    id: 1,
    name: "Vaibhav Tripathi",
    email: "vxtr@abes.ac.in",
    role: "Student",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Akash Chaudhary",
    email: "akash@abes.ac.in",
    role: "Student",
    joinDate: "2024-02-01",
  },
  {
    id: 3,
    name: "Shreyash Singh",
    email: "shreyash@abes.ac.in",
    role: "Club Head",
    joinDate: "2024-01-20",
  },
];

const mockMentors = [
  {
    id: 1,
    name: "Dewank Rastogi",
    expertise: "Frontend",
    achievements: "3+ years experience",
    status: "Active",
  },
  {
    id: 2,
    name: "Rudraksh Tyagi",
    expertise: "Open Source",
    achievements: "LFX",
    status: "Active",
  },
  {
    id: 3,
    name: "Vandit Singh",
    expertise: "DevOps",
    achievements: "Google Summer of Code",
    status: "Active",
  },
];

const mockEvents = [
  {
    id: 1,
    name: "Binary Vault",
    club: "GFG_ABESEC",
    date: "2024-03-15",
    participants: 450,
  },
  {
    id: 2,
    name: "Hackhaven",
    club: "GDG_ABESEC",
    date: "2024-03-20",
    participants: 320,
  },
  {
    id: 3,
    name: "Some Event",
    club: "CodeChef_ABESEC",
    date: "2024-03-25",
    participants: 280,
  },
];

const mockBlogs = [
  {
    id: 1,
    title: "Future of AI",
    author: "Priya Kumari",
    status: "Pending",
    date: "2024-03-10",
  },
  {
    id: 2,
    title: "Web Development Trends",
    author: "Radhika Chauhan",
    status: "Approved",
    date: "2024-03-08",
  },
  {
    id: 3,
    title: "Cloud Computing Basics",
    author: "Granth Agarwal",
    status: "Pending",
    date: "2024-03-09",
  },
];

const AdminDashboard = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openModal = (modalType: string, item?: any) => {
    setActiveModal(modalType);
    if (item) setSelectedItem(item);
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedItem(null);
  };

  const Modal = ({
    isOpen,
    onClose,
    children,
  }: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[rgba(17,25,40,0.95)] border border-white/10 rounded-2xl p-6 w-full max-w-2xl mx-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-white">Details</h3>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white"
            >
              ✕
            </button>
          </div>
          {children}
        </motion.div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto mt-40 px-4 pb-20">
        {/* Welcome Section */}
        <div className="rounded-2xl p-8 bg-[rgba(17,25,40,0.85)] backdrop-blur-lg border border-white/10 shadow-xl flex flex-col items-start relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-transparent to-blue-500/20 opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              Admin Dashboard
            </h2>
            <p className="text-white/80 text-lg">
              Manage your community and monitor platform metrics.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple/20 rounded-full blur-3xl" />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="group rounded-xl p-6 bg-[rgba(17,25,40,0.75)] backdrop-blur-md border border-white/10 shadow hover:border-purple/50 transition-all duration-300">
            <div className="relative z-10">
              <span className="text-4xl font-bold bg-gradient-to-r from-purple to-blue-500 bg-clip-text text-transparent">
                1.2k
              </span>
              <span className="text-white/80 mt-2 block">Total Students</span>
              <span className="text-green-400 text-sm mt-1 block">
                ↑ 120 new this month
              </span>
            </div>
          </div>
          <div className="group rounded-xl p-6 bg-[rgba(17,25,40,0.75)] backdrop-blur-md border border-white/10 shadow hover:border-blue-400/50 transition-all duration-300">
            <div className="relative z-10">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                45
              </span>
              <span className="text-white/80 mt-2 block">Upcoming Events</span>
              <span className="text-blue-400 text-sm mt-1 block">
                Next: 3 days
              </span>
            </div>
          </div>
          <div className="group rounded-xl p-6 bg-[rgba(17,25,40,0.75)] backdrop-blur-md border border-white/10 shadow hover:border-green-400/50 transition-all duration-300">
            <div className="relative z-10">
              <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                8
              </span>
              <span className="text-white/80 mt-2 block">Blog Submissions</span>
              <span className="text-blue-400 text-sm mt-1 block">
                3 pending approval
              </span>
            </div>
          </div>
          <div className="group rounded-xl p-6 bg-[rgba(17,25,40,0.75)] backdrop-blur-md border border-white/10 shadow hover:border-orange-400/50 transition-all duration-300">
            <div className="relative z-10">
              <span className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                24
              </span>
              <span className="text-white/80 mt-2 block">Mentors</span>
              <span className="text-purple text-sm mt-1 block">
                5 new additions
              </span>
            </div>
          </div>
        </div>

        {/* Main Management Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Student Management */}
          <div className="rounded-2xl p-6 bg-[rgba(17,25,40,0.80)] backdrop-blur-lg border border-white/10 shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">
                Student Management
              </h3>
              <button
                onClick={() => openModal("students")}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                View All Students
              </button>
            </div>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-white/60 text-sm">
                      <th className="pb-4">Name</th>
                      <th className="pb-4">Role</th>
                      <th className="pb-4">Join Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockStudents.slice(0, 3).map((student) => (
                      <tr
                        key={student.id}
                        onClick={() => openModal("studentDetails", student)}
                        className="cursor-pointer hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 text-white">{student.name}</td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              student.role === "Club Head"
                                ? "bg-purple/20 text-purple"
                                : "bg-blue-400/20 text-blue-400"
                            }`}
                          >
                            {student.role}
                          </span>
                        </td>
                        <td className="py-3 text-white/80">
                          {student.joinDate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Event Management */}
          <div className="rounded-2xl p-6 bg-[rgba(17,25,40,0.80)] backdrop-blur-lg border border-white/10 shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">
                Event Management
              </h3>
              <button
                onClick={() => openModal("events")}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                View All Events
              </button>
            </div>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-white/60 text-sm">
                      <th className="pb-4">Event Name</th>
                      <th className="pb-4">Club</th>
                      <th className="pb-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockEvents.slice(0, 3).map((event) => (
                      <tr
                        key={event.id}
                        onClick={() => openModal("eventDetails", event)}
                        className="cursor-pointer hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 text-white">{event.name}</td>
                        <td className="py-3 text-white/80">{event.club}</td>
                        <td className="py-3 text-white/80">{event.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mentor Management */}
          <div className="rounded-2xl p-6 bg-[rgba(17,25,40,0.80)] backdrop-blur-lg border border-white/10 shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">
                Mentor Management
              </h3>
              <button
                onClick={() => openModal("addMentor")}
                className="text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                Add New Mentor
              </button>
            </div>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-white/60 text-sm">
                      <th className="pb-4">Name</th>
                      <th className="pb-4">Expertise</th>
                      <th className="pb-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockMentors.slice(0, 3).map((mentor) => (
                      <tr
                        key={mentor.id}
                        onClick={() => openModal("mentorDetails", mentor)}
                        className="cursor-pointer hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 text-white">{mentor.name}</td>
                        <td className="py-3 text-white/80">
                          {mentor.expertise}
                        </td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-400/20 text-green-400">
                            {mentor.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Content Management */}
          <div className="rounded-2xl p-6 bg-[rgba(17,25,40,0.80)] backdrop-blur-lg border border-white/10 shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">
                Blog Management
              </h3>
              <button
                onClick={() => openModal("blogs")}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                View All Blogs
              </button>
            </div>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-white/60 text-sm">
                      <th className="pb-4">Title</th>
                      <th className="pb-4">Author</th>
                      <th className="pb-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockBlogs.slice(0, 3).map((blog) => (
                      <tr
                        key={blog.id}
                        onClick={() => openModal("blogDetails", blog)}
                        className="cursor-pointer hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 text-white">{blog.title}</td>
                        <td className="py-3 text-white/80">{blog.author}</td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              blog.status === "Approved"
                                ? "bg-green-400/20 text-green-400"
                                : "bg-orange-400/20 text-orange-400"
                            }`}
                          >
                            {blog.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl p-6 bg-[rgba(17,25,40,0.80)] backdrop-blur-lg border border-white/10 shadow">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">
              Recent Activity
            </h3>
            <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              View All
            </button>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
                <span className="text-green-400 text-sm">✓</span>
              </div>
              <div>
                <p className="text-white/90">
                  New student registration: Vansh Gupta
                </p>
                <p className="text-white/50 text-sm">2 minutes ago</p>
              </div>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center">
                <span className="text-blue-400 text-sm">📝</span>
              </div>
              <div>
                <p className="text-white/90">
                  New blog submission: "Future of AI"
                </p>
                <p className="text-white/50 text-sm">1 hour ago</p>
              </div>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-full bg-purple/20 flex items-center justify-center">
                <span className="text-purple text-sm">👥</span>
              </div>
              <div>
                <p className="text-white/90">New mentor added: Keshav Jha</p>
                <p className="text-white/50 text-sm">3 hours ago</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Modals */}
        <AnimatePresence>
          {activeModal === "studentDetails" && selectedItem && (
            <Modal isOpen={true} onClose={closeModal}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/60 text-sm">Name</p>
                    <p className="text-white">{selectedItem.name}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="text-white">{selectedItem.email}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Role</p>
                    <p className="text-white">{selectedItem.role}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Join Date</p>
                    <p className="text-white">{selectedItem.joinDate}</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button className="px-4 py-2 rounded-lg bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 transition-colors">
                    Edit Profile
                  </button>
                  {selectedItem.role === "Student" && (
                    <button className="px-4 py-2 rounded-lg bg-purple/20 text-purple hover:bg-purple/30 transition-colors">
                      Promote to Club Head
                    </button>
                  )}
                </div>
              </div>
            </Modal>
          )}

          {activeModal === "mentorDetails" && selectedItem && (
            <Modal isOpen={true} onClose={closeModal}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/60 text-sm">Name</p>
                    <p className="text-white">{selectedItem.name}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Expertise</p>
                    <p className="text-white">{selectedItem.expertise}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Achievements</p>
                    <p className="text-white">{selectedItem.achievements}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Status</p>
                    <p className="text-white">{selectedItem.status}</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button className="px-4 py-2 rounded-lg bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 transition-colors">
                    Edit Profile
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-red-400/20 text-red-400 hover:bg-red-400/30 transition-colors">
                    Remove Mentor
                  </button>
                </div>
              </div>
            </Modal>
          )}

          {activeModal === "addMentor" && (
            <Modal isOpen={true} onClose={closeModal}>
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/5 flex items-center justify-center overflow-hidden">
                    <svg
                      className="w-6 h-6 text-white/30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-2">
                      <label className="text-sm text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                        />
                        Upload photo
                      </label>
                      <span className="text-white/30">•</span>
                      <button className="text-sm text-white/40 hover:text-white/60 transition-colors">
                        Remove
                      </button>
                    </div>
                    <p className="text-white/30 text-xs mt-1">
                      Square image, max 2MB
                    </p>
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                    placeholder="Enter mentor's name"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Expertise
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                    placeholder="Enter area of expertise"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Achievements
                  </label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400 h-18"
                    placeholder="Enter achievements and qualifications"
                  />
                </div>
                <div className="flex gap-3 mt-6">
                  <button className="px-4 py-2 rounded-lg bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 transition-colors">
                    Add Mentor
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-purple/20 text-purple hover:bg-purple/30 transition-colors">
                    Save as Draft
                  </button>
                </div>
              </div>
            </Modal>
          )}

          {activeModal === "eventDetails" && selectedItem && (
            <Modal isOpen={true} onClose={closeModal}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/60 text-sm">Event Name</p>
                    <p className="text-white">{selectedItem.name}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Organizing Club</p>
                    <p className="text-white">{selectedItem.club}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Date</p>
                    <p className="text-white">{selectedItem.date}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Participants</p>
                    <p className="text-white">{selectedItem.participants}</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button className="px-4 py-2 rounded-lg bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 transition-colors">
                    Edit Event
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-green-400/20 text-green-400 hover:bg-green-400/30 transition-colors">
                    View Participants
                  </button>
                </div>
              </div>
            </Modal>
          )}

          {activeModal === "blogDetails" && selectedItem && (
            <Modal isOpen={true} onClose={closeModal}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/60 text-sm">Title</p>
                    <p className="text-white">{selectedItem.title}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Author</p>
                    <p className="text-white">{selectedItem.author}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Submission Date</p>
                    <p className="text-white">{selectedItem.date}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Status</p>
                    <p className="text-white">{selectedItem.status}</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button className="px-4 py-2 rounded-lg bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 transition-colors">
                    Review Content
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-green-400/20 text-green-400 hover:bg-green-400/30 transition-colors">
                    Approve
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-red-400/20 text-red-400 hover:bg-red-400/30 transition-colors">
                    Reject
                  </button>
                </div>
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AdminDashboard;
