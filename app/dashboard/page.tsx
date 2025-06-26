import StatsCards from "./components/StatsCards";
import WelcomeCard from "./components/WelcomeCard";
import RecentActivity from "./components/RecentActivity";

const Dashboard = () => {
  const recentActivities = [
    {
      icon: <span>📝</span>,
      iconBg: "bg-green-400/20",
      title: "Added a new note",
      description: "Next.js Tips",
      time: "2 hours ago",
    },
    {
      icon: <span>🎉</span>,
      iconBg: "bg-blue-400/20",
      title: "Attended Event",
      description: "Elixir Community Meetup",
      time: "Yesterday",
    },
    {
      icon: <span>📝</span>,
      iconBg: "bg-purple/20",
      title: "Created a new project",
      description: "",
      time: "2 days ago",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto lg:mt-38 mt-20">
        <WelcomeCard name="User" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCards
            heading="5"
            subheading="Events Attended"
            description="+ 2 this month"
            colorScheme="purple"
          />
          <StatsCards
            heading="12"
            subheading="Notes Created"
            description="+ 5 this week"
            colorScheme="blue"
          />
          <StatsCards
            heading="2"
            subheading="Upcoming Events"
            description="Next: 3 days"
            colorScheme="green"
          />
        </div>
        <RecentActivity activities={recentActivities} heading="Activity" />
        <RecentActivity activities={recentActivities} heading="Recent Activity" />

      </div>
    </>
  );
};

export default Dashboard;
