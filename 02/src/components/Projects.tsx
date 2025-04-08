import { useRef } from "react";
import { PROJECTS } from "../constants";

export const Projects = () => {

  const projectsRef = useRef(null);

  return(
    <div className="pt-16" id="projects" ref={projectsRef}>
			<div className="px-4">
				<div className="mb-8 text-center text-3xl font-medium lg:text-4xl">Projects</div>
				<div className="flex flex-wrap justify-center">
					{PROJECTS.map((project) => (
						<div key={project.id} className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/3">
							<div className="grow overflow-hidden rounded-lg border border-blue-600/20">
								<a href={project.link}
										target="_blank"
										rel="noopener noreferrer">
											<img src={project.imgSrc} alt={project.title} className="h-60 w-full object-cover"/>
								</a>
								<div className="p-6">
									<div className="mb-2 text-lg font-medium lg:text-2xl">
										{project.title}
									</div>
									<div className="mb-4">{project.description}</div>
									<div className="mb-4">
										<strong>Tech Stack</strong>
										<ul>
											{project.techStack.map((text, index) => (
												<li className="mb-1 mr-2 inline-block rounded-full border border-blue-600/30 px-3 py-1 text-sm font-semibold" key={index}>{text}</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div> 
					))}	
				</div>
			</div>
    </div>
  )

}