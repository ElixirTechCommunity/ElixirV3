import React from "react";

type StatColorScheme = "purple" | "blue" | "green" | "orange";

interface StatItem {
  value: string;
  label: string;
  subtext: string;
  colorScheme: StatColorScheme;
}

interface QuickStatsProps {
  stats: StatItem[];
}

const colorSchemes = {
  purple: {
    gradient: "from-purple to-blue-500",
    hover: "hover:border-purple/50",
    subtext: "text-purple",
  },
  blue: {
    gradient: "from-blue-400 to-cyan-400",
    hover: "hover:border-blue-400/50",
    subtext: "text-blue-400",
  },
  green: {
    gradient: "from-green-400 to-emerald-400",
    hover: "hover:border-green-400/50",
    subtext: "text-green-400",
  },
  orange: {
    gradient: "from-orange-400 to-red-400",
    hover: "hover:border-orange-400/50",
    subtext: "text-orange-400",
  },
};

const QuickStats: React.FC<QuickStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const colors = colorSchemes[stat.colorScheme];
        return (
          <div
            key={index}
            className={`group rounded-xl p-6 bg-[rgba(17,25,40,0.75)] backdrop-blur-md border border-white/10 shadow ${colors.hover} transition-all duration-300`}
          >
            <div className="relative z-10">
              <span
                className={`text-4xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}
              >
                {stat.value}
              </span>
              <span className="text-white/80 mt-2 block">{stat.label}</span>
              <span className={`${colors.subtext} text-sm mt-1 block`}>
                {stat.subtext}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuickStats;
