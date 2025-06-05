"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeSection from "../components/WelcomeSection";
import QuickStats from "../components/QuickStats";
import ManagementSection from "../components/ManagementSection";
import Modal from "../components/Modal";
import StatsCards from "../components/StatsCards";
import { ColorScheme } from "../types";

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

  const adminStats = [
    {
      heading: "1.2k",
      subheading: "Total Students",
      description: "+120 this month",
      colorScheme: "purple" as ColorScheme,
    },
    {
      heading: "45",
      subheading: "Upcoming Events",
      description: "Next: 3 days",
      colorScheme: "blue" as ColorScheme,
    },
    {
      heading: "8",
      subheading: "Blog Submissions",
      description: "3 pending approval",
      colorScheme: "green" as ColorScheme,
    },
    {
      heading: "24",
      subheading: "Mentors",
      description: "5 new additions",
      colorScheme: "orange" as ColorScheme,
    },
  ];

  const renderModalContent = () => {
    if (!selectedItem) return null;
    return (
      <div className="space-y-2">
        <table className="w-full text-left">
          <tbody>
            {Object.entries(selectedItem).map(([key, value]) => (
              <tr key={key}>
                <td className="pr-4 font-semibold text-white/80 capitalize">
                  {key}
                </td>
                <td className="text-white/60">{String(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto lg:mt-38 mt-20">
        <WelcomeSection
          title="Admin Dashboard"
          description="Manage your community and monitor platform metrics."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {adminStats.map((stat, idx) => (
            <StatsCards
              key={idx}
              heading={stat.heading}
              subheading={stat.subheading}
              description={stat.description}
              colorScheme={stat.colorScheme}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ManagementSection
            title="Student Management"
            data={mockStudents}
            columns={[
              { header: "Name", accessor: (row) => row.name },
              { header: "Role", accessor: (row) => row.role },
              { header: "Join Date", accessor: (row) => row.joinDate },
            ]}
            onViewAll={() => openModal("students")}
            onRowClick={(item) => openModal("Student Details", item)}
          />

          <ManagementSection
            title="Mentor Management"
            data={mockMentors}
            columns={[
              { header: "Name", accessor: (row) => row.name },
              { header: "Expertise", accessor: (row) => row.expertise },
              { header: "Status", accessor: (row) => row.status },
            ]}
            onViewAll={() => openModal("mentors")}
            onRowClick={(item) => openModal("Mentor Details", item)}
          />

          <ManagementSection
            title="Event Management"
            data={mockEvents}
            columns={[
              { header: "Event", accessor: (row) => row.name },
              { header: "Club", accessor: (row) => row.club },
              { header: "Date", accessor: (row) => row.date },
            ]}
            onViewAll={() => openModal("events")}
            onRowClick={(item) => openModal("Event Details", item)}
          />

          <ManagementSection
            title="Blog Management"
            data={mockBlogs}
            columns={[
              { header: "Title", accessor: (row) => row.title },
              { header: "Author", accessor: (row) => row.author },
              { header: "Status", accessor: (row) => row.status },
            ]}
            onViewAll={() => openModal("blogs")}
            onRowClick={(item) => openModal("Blog Details", item)}
          />
        </div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <Modal
            isOpen={true}
            onClose={closeModal}
            title={activeModal.charAt(0).toUpperCase() + activeModal.slice(1)}
          >
            {renderModalContent()}
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminDashboard;
