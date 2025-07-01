import { useRef } from "react"
import { CONTACT } from "../constants";

export const Contact = () => {
    const contactRef = useRef(null);

    return(
        <div id="contact" ref={contactRef} className="py-64 ">
            <div className="mb-6 text-center text-3xl font-medium lg:text-4xl">Contact</div>
            <div className="mb-6 text-center text-lg font-medium lg:text-xl">Fell free to reach out to me via email:{" "} 
                <a href="mailto:abhimukesh284@gmail.com" className="block underline underline-offset-4 lg:inline">abhimukesh284@gmail.com</a>
            </div>
            
            <div className=" mb-12 flex gap-5 items-center justify-center">
                {CONTACT.map((con) => (
                    <a  className="w-10 h-10 flex items-center justify-center mb-2 sm:text-white" 
                    key={con.id}
                    dangerouslySetInnerHTML={{ __html: con.icon }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={con.link}
                    aria-label={con.lable}
                    />
                ))}
            </div> 
        </div>
    )
}