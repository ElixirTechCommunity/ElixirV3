import React from "react";
import { ActivityItem } from "../types";
import { baseCardStyles } from "../styles";

interface RecentActivityProps {
  heading: string;
  activities: ActivityItem[];
  className?: string;
}

const RecentActivity: React.FC<RecentActivityProps> = ({
  heading,
  activities,
  className = "",
}) => {
  return (
    <div className={`${baseCardStyles.container} ${className}`}>
      <h2 className="text-xl font-semibold text-white">{heading}</h2>
      <div className="mt-4 space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className={`p-2 rounded-lg ${activity.iconBg}`}>
              {activity.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">{activity.title}</p>
              <p className="text-xs text-white/60">{activity.description}</p>
              <p className="text-xs text-white/40 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
