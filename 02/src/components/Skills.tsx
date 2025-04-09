import {  useRef } from "react";
import { SKILLS } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const skillRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline();

  //     tl.from(".skill-content", {
  //       opacity: 0,
  //       x: -50,
  //       scale: 0.95,
  //       duration: 1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: skillRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //         markers: true, // This will add markers to help debug
  //       },
  //     })
  //       .from(
  //         ".skill-card",
  //         {
  //           opacity: 0,
  //           x: 50,
  //           scale: 0.95,
  //           duration: 0.1,
  //           ease: "power3.out",
  //           stagger: 0.2,
  //           scrollTrigger: {
  //             trigger: skillRef.current,
  //             start: "top 80%",
  //             toggleActions: "play none none none",
  //             markers: true, // This will add markers to help debug
  //           },
  //         },
  //         "<" // Ensures the second animation starts before the first one finishes
  //       );
  //   }, skillRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div id="skills" ref={skillRef} className="my-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="mb-12 text-center text-3xl font-medium lg:text-4xl">Skills</div>

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Text Section */}
        <div className="skill-content w-full lg:w-1/2 text-center lg:text-left">
          <div className="text-2xl font-bold lg:text-4xl">
            The technologies of the future that I master
          </div>
          <div className="text-sm mt-4 lg:text-xl">
            All the languages, libraries, and frameworks that I know and offer in my services...
            I am of course open to new discoveries and to learning other technologies!
          </div>
        </div>

        {/* Skills Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="skill-card opacity-100 border border-blue-500/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-lg transition-all"
            >
              <div
                className="w-16 h-16 flex items-center justify-center mb-2"
                dangerouslySetInnerHTML={{ __html: skill.icon }}
              />
              <div className="text-lg font-medium">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
