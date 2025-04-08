import { useRef } from "react"
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import david from "../assets/David.webp";

export const Hero = () => {
  const heroRef = useRef(null);
  return (
    <div className="flex min-h-screen flex-col items-center" ref={heroRef}>
      <div className="mt-24 flex flex-col items-center justify-center text-center px-4 gap-4 lg:gap-6 lg:mt-40">
        <div className="hero-title text-4xl uppercase  lg:text-7xl" >{PROFILE.name}</div>
        <div className="hero-subheading bg-gradient-to-b from-violet-500 to-blue-300 bg-clip-text text-2xl tracking-tighter text-transparent lg:text-4xl">
          {PROFILE.role}
        </div>
        <div className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl">
          {PROFILE.subheading}
        </div>
        <a href="/Mukesh.pdf" target="_blank" rel="noopener noreferrer" download className="hero-btn flex gap-1 rounded-full border border-blue-500/50 px-3 py-2 tracking-tighter">
          <span className="hover:text-stone-300">
            Download Resume  
          </span>       
          <RiArrowRightUpLine/>
        </a>
        <img src={david} alt={PROFILE.name} width={400} height={400} className="hero-img rounded-3xl border border-blue-700/20 p-1" />
      </div>
    </div>
    )
}
