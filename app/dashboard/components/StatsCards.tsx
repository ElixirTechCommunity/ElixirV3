import { StatCardProps } from "../types";
import { colorSchemes, baseCardStyles } from "../styles";

const StatsCards: React.FC<StatCardProps> = ({
  heading,
  subheading,
  description,
  colorScheme,
  className = "",
}) => {
  const colors = colorSchemes[colorScheme];

  return (
    <div
      className={`group ${baseCardStyles.container} ${colors.hover} ${className}`}
    >
      <div className="relative z-10">
        <span
          className={`${baseCardStyles.heading} bg-gradient-to-r ${colors.gradient}`}
        >
          {heading}
        </span>
        <span className={baseCardStyles.subheading}>{subheading}</span>
        <span className={`${baseCardStyles.description} ${colors.text}`}>
          {description}
        </span>
      </div>
    </div>
  );
};

export default StatsCards;
