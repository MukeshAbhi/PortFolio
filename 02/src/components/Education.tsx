import { useRef } from "react"
import { EDUCATION } from "../constants";
import CS50 from "../assets/CS50x.png";

export const Education = () => {
    const eduRef = useRef(null);
    return(
        <div id="education" ref={eduRef} className="my-16 px-2 sm:px-6 lg:px-8">
            <div className="mb-12 text-center text-3xl font-medium lg:text-4xl" >Education</div>
            <div className="flex flex-col mx-4 lg:flex-row lg:mx-0 gap-10 items-center  ">
                <div className="w-full lg:w-1/2 ">{EDUCATION.map((edu)=>(
                    <div key={edu.id} className=" border border-blue-500/20 p-4 mb-4 rounded-2xl">
                        <div className="text-3xl font-medium">{edu.degree}</div>
                        <div className="my-2 text-xl">{edu.institution}</div>
                        <div className="mb-4">{edu.description}</div>
                    </div>
                ))}</div>
                <div className="w-full lg:w-1/2 ">
                    <img src={CS50} alt="CS50X" className="rounded-2xl" />
                </div>
            </div>
        </div>
    )
} 