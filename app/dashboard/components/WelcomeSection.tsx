interface WelcomeSectionProps {
  title: string;
  description: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="rounded-2xl p-8 bg-[rgba(17,25,40,0.85)] backdrop-blur-lg border border-white/10 shadow-xl flex flex-col items-start relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-transparent to-blue-500/20 opacity-50" />
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white/80 text-lg">{description}</p>
      </div>
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple/20 rounded-full blur-3xl" />
    </div>
  );
};

export default WelcomeSection;
