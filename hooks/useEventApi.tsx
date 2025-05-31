"use client";
import { useEffect } from "react";
import axios from "axios";
import { EVENT_API } from "@/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addEvents } from "@/store/slices/eventSlice";

const useEventApi = () => {
  const dispatch = useDispatch();
  const events = useSelector((store: any) => store?.event?.events);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = [
          {
            id: 31,
            name: "PULL 'N' MERGE",
            event_summary:
              "𝐂𝐨𝐝𝐞, 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬, 𝐚𝐧𝐝 𝐜𝐨𝐦𝐦𝐢𝐭𝐬\r\nReady to level up your 𝐆𝐢𝐭𝐇𝐮𝐛 skills?",
            form_link:
              "https://lu.ma/ojwix4ty?fbclid=PAZXh0bgNhZW0CMTEAAaaRE0zrGK3Ew2RvGCskr35SXmKe1H5k5WG74tGeo85mUAvmRIL23Mn2gbE_aem_K8DwexBZ8xF4pbPqcvhk7Q",
            date: "2024-10-16",
            img_link: "https://i.ibb.co/KGLr01J/pull-n-merge.png",
            club: "GFG",
          },
          {
            id: 30,
            name: "Aurora",
            event_summary:
              "A dynamic hackathon designed to immerse students in the world of Web3 technologies. Experience a unique blend of creativity and cutting-edge tech, and help shape the future of the decentralized web with the Elixir Tech community.",
            form_link: "https://forms.office.com/",
            date: "2024-10-04",
            img_link: "https://i.ibb.co/94xwZc1/Aurora.jpg",
            club: "GFG",
          },
          {
            id: 29,
            name: "Rust-Ed",
            event_summary:
              "Rust-Ed was an event focused on the Rust programming language, gathering developers and enthusiasts to share knowledge, discuss best practices, and explore Rust's applications in software development.",
            form_link: "https://bit.ly/rust_session",
            date: "2024-07-08",
            img_link:
              "https://i.ibb.co/PT5S9LW/Whats-App-Image-2024-07-04-at-23-32-37-f248b4f9.jpg",
            club: "CC",
          },
          {
            id: 32,
            name: "Branch & Beyond",
            event_summary:
              "Get ready to branch out and go beyond with 𝘽𝙧𝙖𝙣𝙘𝙝 𝙖𝙣𝙙 𝘽𝙚𝙮𝙤𝙣𝙙 \r\nUncover 𝙂𝙞𝙩 𝙚𝙨𝙨𝙚𝙣𝙩𝙞𝙖𝙡𝙨 on 𝙅𝙪𝙡𝙮 3 & delve into 𝙎𝙤𝙡𝙖𝙣𝙖 development on 𝙅𝙪𝙡𝙮 5 with us.",
            form_link: "https://forms.office.com/",
            date: "2024-07-05",
            img_link: "https://i.ibb.co/p33ZhGk/Branch-Beyond.jpg",
            club: "GDSC",
          },
          {
            id: 27,
            name: "Synapse",
            event_summary:
              "Feeling intrigued by the possibilities of AI/ML but unsure where to begin? 😔\r\nNeed a reliable, trusted, and adaptive path?\r\n\r\n“Hum hai na! Aap bas seekhne ka josh banaye rakhein” 🤚🏻😎\r\n\r\nThe Geeks of ABESEC bring you an electrifying session on AI and Machine Learning with Ojasvi Yadav, AI Lead at Write Sonic and postgraduate from Trinity College Dublin.",
            form_link: "https://bit.ly/Synapse-GFG",
            date: "2024-06-22",
            img_link: "https://i.ibb.co/kxp1DHV/Synapse.jpg",
            club: "GFG",
          },
          {
            id: 28,
            name: "T-Error 3.0",
            event_summary:
              "T-Error 3.0 pitted coding skills against real-world bugs in a Mario Magic-themed showdown. Participants debugged challenges in C, Java, and Python over two thrilling days, vying for exciting prizes.",
            form_link: "https://bitly.cx/T-ErrorCC",
            date: "2024-05-27",
            img_link: "https://i.ibb.co/gFxJPqn/terror.jpg",
            club: "CC",
          },
          {
            id: 25,
            name: "Beyond Code",
            event_summary:
              "This session by Elixir Community explores the importance of problem-solving and Data Structures & Algorithms (DSA) in coding interviews and careers.",
            form_link: "https://discord.gg/HTg8uP43?event=1243797161523675218",
            date: "2024-05-26",
            img_link: "https://i.ibb.co/QkWfwqQ/BEYOND-CODE.png",
            club: "CC",
          },
          {
            id: 23,
            name: "DevTalk",
            event_summary:
              "Kya aap thak gaye hain logon ke laval nikalte huye dekhkr?👀\r\nWorry not, 'cause GeeksforGeeks ABESEC Chapter has brought to you 𝘿𝙀𝙑𝙏𝘼𝙇𝙆.  \r\nA  two day extended event with sessions traversing you through various niche's of the Unknown-tech.",
            form_link: "https://bit.ly/DevTalkGFG",
            date: "2024-05-20",
            img_link: "https://i.ibb.co/sKrx9cV/2nd.png",
            club: "GFG",
          },
          {
            id: 26,
            name: "Ctrl+Up",
            event_summary:
              "Textbooks turn to PRs, Mundane screens teleport to hyperloops of codeflow, and your “code notebook m likho loyalists” become copilots.\r\nShift the tab, cut the CRAP!!\r\nWelcome to CTRL+UP\r\nYour very own Key shortcut to Level UP your geek game.\r\nExplore, enrich and excel with the BEST!",
            form_link: "https://bit.ly/Ctrl-Up_Gfg",
            date: "2024-04-15",
            img_link: "https://i.ibb.co/ZYTDk5H/ctrlup.jpg",
            club: "GFG",
          },
          {
            id: 24,
            name: "Wrap it Up",
            event_summary:
              'Unleash your creativity in an electrifying online graphic design event, "Wrap It Up," where participants replicate or innovate brand designs. 🚀🎨',
            form_link: "https://bit.ly/CC_WrapItUp",
            date: "2024-03-27",
            img_link:
              "https://i.ibb.co/MRZf2x5/Whats-App-Image-2024-03-27-at-23-29-45-2a7ca5ee.jpg",
            club: "CC",
          },
          {
            id: 22,
            name: "Once Upon a Crime",
            event_summary:
              "Case closed! A Murder Mystery pitted logic & code against a cunning culprit. Participants unraveled puzzles, cracked quizzes, & honed teamwork in a thrilling 2-day event. 🕵️‍♂️🔍🎭",
            form_link: "https://bit.ly/OnceUponACrimeCC",
            date: "2024-02-13",
            img_link: "https://i.ibb.co/d48tShy/Standee-Fn.jpg",
            club: "CC",
          },
          {
            id: 21,
            name: "Capture The Function",
            event_summary:
              "The glowing signboards tell half the truth!!\r\nThis is rebellion against the mundane.\r\nYour mission - should you choose to accept it -\r\nis to, Capture the Function.",
            form_link: "https://bit.ly/CaptureTheFunctionGFG",
            date: "2024-02-09",
            img_link: "https://i.ibb.co/jhpG4Pb/2.png",
            club: "GFG",
          },
          {
            id: 15,
            name: "Clash of Coders 2.0",
            event_summary:
              "Intense coding showdown as teams battled head-to-head, showcasing skill and innovation. A thrilling clash of minds in the ultimate coding contest! 💻🏆🚀",
            form_link: "http://bit.ly/ClashofCoders2023",
            date: "2023-12-21",
            img_link: "https://i.ibb.co/vj16cqg/COC-poster.jpg",
            club: "CC",
          },
          {
            id: 14,
            name: "Pydev101",
            event_summary:
              "The Geeks of ABESEC are here to up your Dev game with a 4-day bootcamp in Python Backend Web Development!!\r\nSher ab PyDev Banega 🐍",
            form_link: "https://forms.office.com/r/3Q9mE6jyPt",
            date: "2023-12-15",
            img_link: "https://i.ibb.co/V24fzNb/IMG-0393.png",
            club: "GFG",
          },
          {
            id: 16,
            name: "Head Node",
            event_summary:
              "Dynamic exchange of knowledge and experience as seasoned seniors shared insights, answered queries, and guided juniors for a collaborative learning experience. 💡🤝",
            form_link: "https://bit.ly/cc-session",
            date: "2023-12-09",
            img_link: "https://i.ibb.co/xzb64zT/Codechef-1.png",
            club: "CC",
          },
          {
            id: 7,
            name: "Pull 'N' Merge 2023",
            event_summary:
              "You call it October, but for us, it's Hacktober!🎃💻 Let's dive into the world of open source this season.It's time to serve the community one pull request at a time. 🌐",
            form_link: "https://forms.office.com/r/vieU1B8vN4",
            date: "2023-10-10",
            img_link: "https://i.ibb.co/v34XwFw/Hacktober-1.png",
            club: "GFG",
          },
          {
            id: 19,
            name: "Compose Camps (Android Dev)",
            event_summary:
              "GDSC ABESEC's 'Compose Camps' ignited Android development journeys with hands-on Jetpack Compose sessions. Participants enjoyed beginner-friendly workshops, earned Google DSC certificates, and gained insights from speaker Yash Grover in this transformative event.",
            form_link: "https://gdsc.community.dev/e/mpyqpw/",
            date: "2023-10-08",
            img_link: "https://i.ibb.co/C7y59BK/IMG-20240104-133554.jpg",
            club: "GDSC",
          },
          {
            id: 12,
            name: "Live The Code 2.0",
            event_summary:
              "Elixir X CodeChef ADGITM are joining forces to proudly present Live the Code 2.0, a 36-hour online Hackathon!$11,000 Prize Pool! 💰",
            form_link: "https://live-the-code.devfolio.co",
            date: "2023-09-08",
            img_link: "https://i.ibb.co/j4nqnF7/Live-The-Code-2-0.png",
            club: "GFG",
          },
          {
            id: 8,
            name: "Info Session",
            event_summary:
              "Embark on an innovation journey with an engaging introductory session. The opportunity to connect with like-minded individuals, expand your horizons, and be part of a community",
            form_link: "https://tinyurl.com/cc-info-session",
            date: "2023-09-01",
            img_link: "https://i.ibb.co/g6DKvZ2/image.png",
            club: "CC",
          },
          {
            id: 20,
            name: "Hack Haven",
            event_summary:
              '"Hack Haven," a groundbreaking hackathon on July 8, 2023, addressed real-world issues aligned with UN goals. The 12-hour event fostered learning, networking, and innovation, providing opportunities for skill development.',
            form_link: "https://hackhaven.devfolio.co",
            date: "2023-07-08",
            img_link: "https://i.ibb.co/gwgFnGz/IMG-20240101-WA0020.jpg",
            club: "GDSC",
          },
          {
            id: 11,
            name: "API Fetch",
            event_summary:
              "Navigate through the stellar pathways of data integration and explore the orbits of endpoints. Join us at API Fetch and see the API magic unfold!",
            form_link:
              "https://images.pexels.com/photos/13661636/pexels-photo-13661636.jpeg?auto=compress&cs=tinysrgb&w=126",
            date: "2023-06-15",
            img_link: "https://i.ibb.co/yNkgk2x/ApiFetch.jpg",
            club: "GFG",
          },
          {
            id: 5,
            name: "T-Error 2.0",
            event_summary:
              "Unleash your inner debugger at our event! Come on board with CodeChef ABESEC Chapter to scratch your minds and pull out the debugger in you.🪶 Join us in spotting bugs",
            form_link: "https://forms.office.com/r/dpnjYrCQfZ",
            date: "2023-06-12",
            img_link:
              "https://i.ibb.co/6HSD8ck/Whats-App-Image-2023-09-02-at-13-32-47.jpg",
            club: "CC",
          },
          {
            id: 18,
            name: "Flutter Extended",
            event_summary:
              "Flutter Extended was a two-day online event by GDSC-ABESEC, led by expert Yatharth Chauhan. Perfect for all levels, participants learnt Flutter basics on Day 1 and build a cross-platform app with hands-on guidance on Day 2.",
            form_link: "https://gdsc.community.dev/e/m9qqar/",
            date: "2023-03-11",
            img_link: "https://i.ibb.co/Th5p7Qx/cybergrrrr.jpg",
            club: "GDSC",
          },
          {
            id: 10,
            name: "NXT Quest",
            event_summary:
              "From Tech and Code-Decode to Movies and anime - the Twisted Trivia has it all. But the clock is ticking, scholars. Your expedition into the trivia realms starts now!",
            form_link:
              "https://images.pexels.com/photos/13661636/pexels-photo-13661636.jpeg?auto=compress&cs=tinysrgb&w=126",
            date: "2023-02-15",
            img_link: "https://i.ibb.co/5T9MdC3/NXTQuest.jpg",
            club: "GFG",
          },
          {
            id: 17,
            name: "Demystifying Web",
            event_summary:
              "Demystifying web offered an immersive experience led by professionals. Participants engaged in interactive sessions, gaining insights into the latest web development trends. Tailored for all skill levels, the event provided networking opportunities and inspired growth.",
            form_link: "https://gdsc.community.dev/e/m55ra9/",
            date: "2023-02-08",
            img_link: "https://i.ibb.co/3fXqYbt/IMG-20240104-WA0013.jpg",
            club: "GDSC",
          },
          {
            id: 6,
            name: "Re-Imagine",
            event_summary:
              "Unleash your inner designer and escape boredom with us! Get creative and craft your way to excitement! 🎨🌟",
            form_link: "https://forms.office.com/r/yvVe8WQDEp",
            date: "2023-01-23",
            img_link:
              "https://i.ibb.co/kJzXjG9/Whats-App-Image-2023-09-02-at-13-35-19.jpg",
            club: "CC",
          },
          {
            id: 9,
            name: "Dorking with Geeks",
            event_summary:
              "8,35,00,000 results (0.32 seconds) Okay, but you need that one. Don't parkour on links with every Google search, instead... just Dork!",
            form_link:
              "https://images.pexels.com/photos/13661636/pexels-photo-13661636.jpeg?auto=compress&cs=tinysrgb&w=126",
            date: "2023-01-21",
            img_link:
              "https://i.ibb.co/pLZjWGL/Snapinsta-app-326094475-527397002700053-6945585699872009637-n-1080.jpg",
            club: "GFG",
          },
          {
            id: 13,
            name: "UI/UX Unplugged",
            event_summary:
              "Unlock UI/UX mastery at our workshop with experts Shivangi Singh and Shivam Goel. Elevate your digital design skills!",
            form_link:
              "https://instagram.com/abesec.codechef?igshid=MzRlODBiNWFlZA==",
            date: "2022-12-20",
            img_link:
              "https://i.ibb.co/Mp18MrL/Whats-App-Image-2023-09-02-at-13-28-48.jpg",
            club: "CC",
          },
          {
            id: 4,
            name: "Cyber Path",
            event_summary:
              "Don't forget to 'authenticate' your 'access' with GFG ABESEC and Mr. Kartik Sachdeva(CEE, Cisco) in the world of Cybersecurity and be Firewalled for the future.",
            form_link:
              "https://images.pexels.com/photos/13661636/pexels-photo-13661636.jpeg?auto=compress&cs=tinysrgb&w=126",
            date: "2022-12-16",
            img_link:
              "https://i.ibb.co/yFRpVBW/Snapinsta-app-319724785-1829259920754684-747529075197985006-n-1080.jpg",
            club: "GFG",
          },
          {
            id: 3,
            name: "Become a MAANG",
            event_summary:
              "Well, clear out your schedule this Friday as we bring to you an engaging virtual session with our eminent alumni, Mr. Umang Agrawal- SDE at Microsoft.",
            form_link: "https://forms.office.com/r/Nueepv905p",
            date: "2022-11-25",
            img_link:
              "https://i.ibb.co/S7PgfdS/Snapinsta-app-316738928-930417624990103-6786221222350404171-n-1080.jpg",
            club: "GFG",
          },
          {
            id: 2,
            name: "Clash of Coders",
            event_summary:
              "A thrilling team coding competition which is a platform for the students to put their problem solving skills, teamwork abilities and coding knowledge to test.",
            form_link: "https://forms.office.com/r/zbPxDie16P",
            date: "2022-11-04",
            img_link: "https://i.ibb.co/Lv9Ln6s/photo-2023-09-02-14-11-37.jpg",
            club: "CC",
          },
          {
            id: 1,
            name: "Pull 'N' Merge",
            event_summary:
              "October is finally here, and with it comes the much-awaited Open Source carnival of the year, Hacktoberfest.",
            form_link: "https://forms.office.com/r/jdKzykSamW",
            date: "2022-10-13",
            img_link:
              "https://i.ibb.co/drr82t3/Snapinsta-app-311057485-123584480482160-1624516575949383604-n-1080.jpg",
            club: "GFG",
          },
        ];
        // const res = await axios.get(EVENT_API);
        dispatch(addEvents(res));
      } catch (err) {
        console.error("Failed to fetch events", err);
      }
    };

    if (!events || events.length === 0) {
      fetchEvents();
    }
  }, [dispatch, events]);

  return { events };
};

export default useEventApi;
