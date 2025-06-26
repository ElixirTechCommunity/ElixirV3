export const colorSchemes = {
  purple: {
    gradient: "from-purple to-blue-500",
    hover: "hover:border-purple/50",
    text: "text-purple",
    bg: "bg-purple/20",
  },
  blue: {
    gradient: "from-blue-400 to-cyan-400",
    hover: "hover:border-blue-400/50",
    text: "text-blue-400",
    bg: "bg-blue-400/20",
  },
  green: {
    gradient: "from-green-400 to-emerald-400",
    hover: "hover:border-green-400/50",
    text: "text-green-400",
    bg: "bg-green-400/20",
  },
  orange: {
    gradient: "from-orange-400 to-red-400",
    hover: "hover:border-orange-400/50",
    text: "text-orange-400",
    bg: "bg-orange-400/20",
  },
};

export const baseCardStyles = {
  container:
    "rounded-xl p-6 bg-[rgba(17,25,40,0.75)] backdrop-blur-md border border-white/10 shadow transition-all duration-300",
  heading: "text-4xl font-bold bg-clip-text text-transparent",
  subheading: "text-white/80 mt-2 block",
  description: "text-sm mt-1 block",
};

export const managementStyles = {
  container:
    "rounded-2xl p-6 bg-[rgba(17,25,40,0.80)] backdrop-blur-lg border border-white/10 shadow",
  header: "flex justify-between items-center mb-6",
  title: "text-xl font-semibold text-white",
  viewAll: "text-sm text-blue-400 hover:text-blue-300 transition-colors",
  table: {
    container: "overflow-x-auto",
    table: "w-full",
    header: "text-left text-white/60 text-sm",
    headerCell: "pb-4",
    row: "cursor-pointer hover:bg-white/5 transition-colors",
    cell: "py-3 text-white",
  },
};

export const modalStyles = {
  overlay:
    "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center",
  container:
    "bg-[rgba(17,25,40,0.95)] border border-white/10 rounded-2xl p-6 w-full max-w-2xl mx-4",
  header: "flex justify-between items-center mb-4",
  title: "text-xl font-semibold text-white",
  closeButton: "text-white/60 text-3xl hover:text-white",
};
