import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="mx-auto mt-5 flex w-full max-w-[950px] gap-x-5">
      <div className="group relative flex w-auto items-center justify-center overflow-hidden rounded-md p-[1px]">
        <div className="absolute z-20 h-52 w-52 from-rose-500 to-blue-800 repeat-infinite group-hover:animate-spin-slow group-hover:bg-gradient-to-t" />
        <div className="absolute z-10 h-full w-full rounded-md bg-transparent" />
        <div className="absolute z-20 h-[99%] w-[99%] rounded-md bg-gradient-to-br from-rose-500 to-blue-800 transition-all duration-300 ease-in-out group-hover:bg-[#131223] group-hover:from-transparent group-hover:to-transparent" />
        <Link
          href="/contact"
          className="z-20 flex rounded-md  px-8 py-4 font-semibold tracking-wide text-white hover:shine-text"
        >
          Hire Me
          <MoveRight className="ml-3" />
        </Link>
      </div>
      <div className="group relative flex w-auto items-center justify-center overflow-hidden rounded-md p-[1px]">
        <div className="absolute z-20 h-52 w-52 animate-spin-slow bg-gradient-to-t from-rose-500 to-blue-800 repeat-infinite" />
        <div className="absolute z-10 h-full w-full rounded-md bg-transparent" />
        <div className="absolute z-20 h-[99%] w-[99%] rounded-md bg-[#131223] transition-all duration-300 ease-in-out group-hover:bg-transparent" />
        <Link
          href="/projects"
          className="group-hover:milkblur-mid z-20 flex rounded-md bg-gradient-to-br from-rose-400 to-blue-400 bg-clip-text px-8 py-4 font-semibold  tracking-wide text-transparent transition-all duration-300 ease-in-out group-hover:text-white"
        >
          Download-cv
        </Link>
      </div>
    </div>
  );
}
