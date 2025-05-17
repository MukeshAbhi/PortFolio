import { useEffect, useRef } from "react"
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import dp from "../assets/db.jpeg"
import gsap from "gsap";

export const Hero = () => {
  const heroRef = useRef(null);

  useEffect((() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6}
      });

      tl.from(".hero-title", {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 0.8,
      })
        .from(".hero-subheading", {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 0.8,
        }, "-=0.4"
      )
        .from(".hero-text",{
          opacity: 0,
          y: 30,
          duration: 0.8,
        }, "-=0.4"
      )
        .from(".hero-btn", {
          opacity: 0,
          scale: 0.9,
          duration: 0.7,
        }, "-=0.3"
      )
        .from(".hero-img", {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 0.8,
        }, "-=0.5"
      )
    }, heroRef)

    return () => ctx.revert();
  }),[])

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
        <a
          href="/Mukesh.pdf"
          download
          className="hero-btn flex gap-1 rounded-full border border-blue-500/50 px-3 py-2 tracking-tighter"
        >
          <span className="hover:text-stone-300">
            Download Resume
          </span>
          <RiArrowRightUpLine />
        </a>
        <img src={dp} alt={PROFILE.name} width={400} height={400} className="hero-img rounded-3xl border border-blue-700/20 p-1" />
      </div>
    </div>
    )
}
