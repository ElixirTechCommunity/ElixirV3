"use client";
import React from "react";
import dynamic from "next/dynamic";
import { sampleArcs } from "@/constants/sampleArcs";
import PageHeading from "./PageHeading";

const World = dynamic(() => import("./ui/Globe").then((m) => m.World), {
  ssr: false,
  loading: () => <div className="text-white text-sm">Loading globe...</div>,
});

export function GlobeSection() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className='flex flex-col items-center h-[30rem] my-20'>
      <PageHeading
        longHeading='SMALL GROWING WORLD OF GEEKS'
        smallHeading='Join our Discord'
        link='https://discord.gg/2WtZ4jeKVa'
      />
      <div className='w-[30rem] h-[30rem]'>
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}
