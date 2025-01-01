import { link } from "fs";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "Events", link: "/events" },
  { name: "Notes", link: "/notes" },
  { name: "Mentors", link: "/mentors" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const Chapters = [
  {
    id: 1,
    title: "CodeChef ABESEC",
    des: "In CodeChef ABESEC, we create an environment for members to challenge themselves, collaborate, and improve their skills, leading to unanimous success.",
    img: "/ccThumbnail.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.instagram.com/abesec.codechef/",
  },
  {
    id: 2,
    title: "GeeksforGeeks ABESEC",
    des: "GeeksforGeeks ABESEC aims to create an advanced community where learning and fun coexist.This motivates developers to grow and excel together.",
    img: "/gfgThumbnail.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://www.instagram.com/geeksforgeeks_abesec/",
  },
  {
    id: 3,
    title: "GDSC ABESEC",
    des: "GDSC ABESEC fosters learning, collaboration, and personal growth, exploring new technologies and exchanging knowledge for success.",
    img: "/gdscThumbnail.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://www.instagram.com/gdg.abesec/",
  },
];

export const testimonials = [
  {
    quote:
      "I've been with the Elixir Tech Community for 3+ years, starting as the Open Source Coordinator via GFG in 2022. This role helped me grow by finding peers, teaching, and expanding my network beyond college. My advice: Follow your interests and find like-minded peers. For the community, I suggest more innovative sessions like Twitter Spaces and increased activity on the official Elixir Twitter account.",
    name: "Anvesh Mishra",
    title: "Batch 2024",
    img: "/mentors/anvesh.png",
  },
  {
    quote:
      "Since joining Elixir in 2020, I've led the CodeChef chapter, gaining skills in event organization and teamwork. This experience taught me to prioritize my interests and excel in them. My advice: focus on what you love and pursue it passionately. Teaching is my passion, and I enjoy hosting engaging talk sessions. I'm eager for ideas to enhance our sessions and community engagement. Let's innovate and grow together.",
    name: "Tanveer Raza",
    title: "Batch 2023",
    img: "/mentors/tanveer.jpg",
  },
  {
    quote:
      "Since joining Elixir in 2022, I've managed Discord, organized events, and mentored juniors. I've led sessions on GSoC, open source opportunities, and resume building, and organized hackathons to foster a development mindset. Elixir's flat hierarchy and supportive mentors ensure accessible guidance. Moving forward, we aim to uphold a vibrant community atmosphere alongside our educational initiatives.",
    name: "Shlok Mishra",
    title: "Batch 2025",
    img: "/mentors/shlok.png",
  },
  {
    quote:
      "I've been a member of Elixir for over 4 years, benefiting from invaluable career guidance from senior members and offering mentorship to juniors. My contributions span organizing and participating in community events that foster strong relationships among members. Elixir's well-structured approach ensures cohesive interaction from newcomers to seasoned participants. I'm dedicated to supporting our community's growth and enhancement efforts.",
    name: "Yash Grover",
    title: "Batch 2024",
    img: "/mentors/yash.png",
  },
  {
    quote:
      "Since joining Elixir in 2020, I've grown my skills and leadership while fostering team success. The inclusive community has been pivotal, enhancing connection and growth. Our Discord server, with engaging game nights and discussions, serves as our hub. Elixir embraces all skill levels, creating a genuine community where everyone contributes and thrives together.",
    name: "Anmol Gupta",
    title: "Batch 2023",
    img: "/mentors/anmol.png",
  },

  {
    quote:
      "Since joining Elixir in November 2020, I've honed essential people skills and made significant contributions through hacknights and open-source drives. Elixir feels more like a family than just a club, fostering strong connections. To enhance our community, expanding our presence and engagement on Discord would be highly beneficial, ensuring we reach more members and continue to grow together.",
    name: "Manav Agarwal",
    title: "Batch 2022",
    img: "/mentors/manav.png",
  },
  {
    quote:
      "Since my first year, Elixir has connected me with an incredible senior community, fostering a strong sense of brotherhood. Unlike other groups, everyone here is relaxed and eager to assist. We thrive on guiding juniors and organizing engaging talks and sessions to enhance our skills continuously. This supportive atmosphere ensures constant improvement and a welcoming environment for all.",
    name: "Ishan Grover",
    title: "Batch 2026",
    img: "/mentors/ishan.png",
  },
  {
    quote:
      "I've been part of Elixir for around 1-1.5 years. It's been invaluable when I've faced challenges, providing prompt assistance and diverse perspectives. Elixir distinguishes itself by maintaining long-term member engagement, which sets it apart from other communities. Keep up the excellent work in fostering this supportive environment where everyone can thrive and contribute effectively.",
    name: "Ram Goel",
    title: "Batch 2024",
    img: "/mentors/ram.png",
  },
  {
    quote:
      "Since 2023, I've been active in Elixir, drawn by its supportive community and members' achievements. My journey evolved into becoming GFG ML Coordinator, guided by seniors in skills and leadership. Elixir emphasizes mutual support and collective success, fostering collaboration. Moving forward, we aim to recruit top members and host impactful events to strengthen our community, inspiring and empowering each other.",
    name: "Satyam Namdev",
    title: "Batch 2026",
    img: "/mentors/satyam.png",
  },
  {
    quote:
      "Since 2021, Elixir has been instrumental in my personal growth through tech upscaling and peer learning. The community's diverse expertise encourages open discussions and mentorship, creating a hub of motivation. Our collaborative spirit sets us apart, as we strive for collective growth and host impactful events that leave a lasting impression.",
    name: "Abhinav Jha",
    title: "Batch 2025",
    img: "/mentors/abhinav.png",
  },
  {
    quote:
      "Since 2020, Elixir has been more than a network; it's a supportive community that felt like family throughout college. I played a role in reviving our Discord server, enjoying enriching discussions and launching our website. Elixir stands out for nurturing growth without judgment. Introducing regular game nights on Discord would further enhance our community, making it even more engaging and enjoyable for everyone involved.",
    name: "Dewank Rastogi",
    title: "Batch 2024",
    img: "/mentors/dewank.png",
  },
  {
    quote:
      "I joined Elixir in 2022 as a complete novice in CS. The guidance from Elixir members kickstarted my career. My impactful contributions include promoting and leading sessions on the Elixir Discord server and offline. Elixir stands out as an inclusive community where I've interacted with FAANG engineers, open-source contributors, and many amazing individuals. Looking forward to implementing community mentorship to enhance Elixir further.",
    name: "Vandit Singh",
    title: "Batch 2025",
    img: "/mentors/vandit.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ElixirTechCommunity",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/TheElixirTech",
  },
  {
    id: 3,
    img: "/discord.svg",
    link: "http://dsc.gg/elixirtechcommunity",
  },
];
