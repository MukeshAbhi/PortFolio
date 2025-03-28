import { Card } from "./Card"

export const Projects = () => {
    return(
        <div className="w-full h-screen flex items-start pt-10 justify-center">
            <div >
                <div className="text-5xl py-16 text-t2  flex items-start  justify-center">Projects</div>
                <Card />
            </div>
        </div>
    )
}