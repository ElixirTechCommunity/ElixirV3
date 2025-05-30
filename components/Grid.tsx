/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import { useEffect, useState } from "react";
// import axios from "axios";
import { randomProblemConst } from "@/constants/randomProblem";

const Grid = () => {
  const [randomProblem, setRandomProblem] = useState<any>({});
  //@ts-ignore
  // eslint-disable-next-line
  const getRandomProblem = (problemsMap) => {
    const problemKeys = Object?.keys(problemsMap);
    const randomIndex = Math.floor(Math.random() * problemKeys.length);
    const randomKey = problemKeys[randomIndex];
    if (!problemsMap[randomKey].free) {
      return getRandomProblem(problemsMap);
    }
    return problemsMap[randomKey];
  };

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        // const url = "https://us-central1-neetcode-dd170.cloudfunctions.net/getProblemListFunction";
        // const response = await axios.post(url, { data: {} });
        // const data = response.data;
        const randomProblem = getRandomProblem(randomProblemConst.result);
        // console.log(randomProblem);

        setRandomProblem(randomProblem);
      } catch (error) {
        console.error("Error fetching problem list:", error);
        throw error;
      }
    };
    fetchQuestion();
  }, []);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full'>
      <WobbleCard
        containerClassName='col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]'
        className=''
      >
        <div className='max-w-xs'>
          <h2 className='text-left text-balance text-3xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            Daily DSA Question by NeetCode
          </h2>
          {randomProblem && Object.keys(randomProblem).length != 0 && (
            //@ts-ignore
            <a
              href={"https://neetcode.io/problems/" + randomProblem.id}
              target='_blank'
            >
              <div className='absolute top-48 md:top-52 text-xl px-4 cursor-pointer py-2 border border-white rounded-lg'>
                {
                  //@ts-ignore
                  randomProblem.name
                }
              </div>
            </a>
          )}
          <div className='absolute left-48 top-36 md:top-40 -rotate-12 '>
            <div className='flex gap-1'>
              <svg
                width='45'
                height='25'
                viewBox='0 0 45 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z'
                  fill='currentColor'
                  className='fill-white'
                ></path>
              </svg>
              <div>Click here</div>
            </div>
          </div>
        </div>
        <Image
          src='/DSA.png'
          width={500}
          height={500}
          alt='linear demo image'
          className='absolute -right-4 lg:-right-[18%]  filter -bottom-16 md:-bottom-36 object-contain rounded-2xl'
        />
      </WobbleCard>
      <WobbleCard containerClassName='col-span-1 min-h-[300px]'>
        <h2 className='max-w-80  text-left text-balance text-2xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
          No Projects, no skills, Build on your own
        </h2>
        <p className='mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200'></p>
        <a
          href={"https://codingchallenges.fyi/challenges/intro"}
          target='_blank'
        >
          <div className='absolute top-48 md:top-52 text-xl px-4 cursor-pointer py-2 border border-white rounded-lg'>
            codingchallenges.fyi
          </div>
        </a>
        <div className='absolute left-48 top-36 md:top-40 -rotate-12 '>
          <div className='flex gap-1'>
            <svg
              width='45'
              height='25'
              viewBox='0 0 45 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z'
                fill='currentColor'
                className='fill-white'
              ></path>
            </svg>
            <div>Click here</div>
          </div>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName='col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]'>
        <div className='max-w-2xl'>
          <h2 className='max-w-sm md:max-w-7xl  text-left text-balance text-xl md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white'>
            Elixir is a collaborative tech community that encourages a
            comprehensive learning environment.
          </h2>
          <p className='mt-4 max-w-[30rem] text-left  text-base/6 text-neutral-200'>
            This supportive network promotes young enthusiasts to explore, learn
            and grow together in the dynamic tech industry.
          </p>
        </div>
        <Image
          src='/linear.webp'
          width={500}
          height={500}
          alt='linear demo image'
          className='absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl'
        />
      </WobbleCard>
    </div>
  );
};

export default Grid;
