import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

const MentorCard = ({ data }: { data: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group w-[320px] h-[420px] rounded-3xl overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <Image
          src={
            "https://res.cloudinary.com/dta8uzpup/image/upload/v1719346276" +
            data.image
          }
          alt={data.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105 pointer-events-none"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* Content overlay */}
      <div className="relative h-full flex flex-col justify-end p-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <h3 className="text-2xl font-semibold text-white tracking-tight">
            {data.name}
          </h3>
          <p className="text-sm text-gray-300/90 font-light tracking-wide">
            {data.techStack}
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mt-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={data.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <FaLinkedin className="text-blue-400 w-4 h-4" />
            <span className="text-sm text-white/90 font-light">LinkedIn</span>
          </motion.a>

          {/* Hidden for now */}
          {/* {data.discord && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://discord.com/users/${data.discord}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <FaDiscord className="text-indigo-400 w-4 h-4" />
              <span className="text-sm text-white/90 font-light">Discord</span>
            </motion.a>
          )} */}

          {data.github && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <FaGithub className="text-gray-300 w-4 h-4" />
              <span className="text-sm text-white/90 font-light">GitHub</span>
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 group-hover:from-black/20 group-hover:via-black/10 group-hover:to-black/20 transition-all duration-700 pointer-events-none" />
    </motion.div>
  );
};

export default MentorCard;
