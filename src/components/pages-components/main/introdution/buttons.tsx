import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex gap-x-5 w-full max-w-[950px] mx-auto mt-5">
      <Link href="/contact" className="bg-gradient-to-br from-rose-500 to-blue-800 px-5 py-3 rounded-md text-white font-medium tracking-widest flex">
        Hire Me
        <MoveRight className="ml-3" />
      </Link>
      <Link href="/projects" className=" px-5 py-3 rounded-md text-white font-semibold tracking-widest">
        My Projects
      </Link>
    </div>
  );
}