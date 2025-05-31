import { cn } from "@/lib/utils";
import { GridPattern } from "../magicui/grid-pattern";
import { Spotlight } from "../ui/Spotlight";

export default function BackDrop() {
  return (
    <>
      <Spotlight className="top-0 right-80" fill="indigo" />
      <Spotlight className="top-20 right-80" fill="grey" />
      <Spotlight className="top-0 left-full" fill="indigo" />
      <Spotlight className="top-3/4" fill="grey" />
      <GridPattern
        width={49}
        height={49}
        x={-1}
        y={-1}
        strokeDasharray={"4 4"}
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]",
          "opacity-65"
        )}
      />
    </>
  );
}
