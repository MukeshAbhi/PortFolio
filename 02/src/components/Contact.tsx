import { useRef } from "react"
import { CONTACT } from "../constants";

export const Contact = () => {
    const contactRef = useRef(null);

    return(
        <div id="contact" ref={contactRef} className="py-16 ">
            <div className="mb-6 text-center text-3xl font-medium lg:text-4xl">Contact</div>
            <div className="mb-6 text-center text-lg font-medium lg:text-2xl">Fell free to reach out to me via email: abhimukesh284@gmail.com</div>
            
            <div className=" mb-12 flex gap-5 items-center justify-center">
                {CONTACT.map((con) => (
                    <a  className="w-10 h-10 flex items-center justify-center mb-2" 
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