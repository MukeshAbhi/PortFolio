export const Intro = () => {
    return(
        <div className="w-full h-screen flex items-center  gap-4 text-t2">
                <div className="w-1/2 flex items-center justify-center">
                    <img src="/1.jpg" className="w-1/2 border border-none rounded-full"/>
                </div>
                <div className="w-1/2 h-full flex items-center ">
                <div>
                   <div className="flex-col pl-4">
                        <div className=" text-3xl lg:text-5xl md:text-4xl pb-2 font-bold">
                                Hello
                        </div>
                        <div className=" text-xl lg:text-3xl md:text-2xl pb-2 font-bold ">
                            I'm
                        </div>
                        <div className="text-6xl lg:text-9xl md:text-7xl pb-2 ">Mukesh</div>
                        <div className=" text-xl lg:text-3xl md:text-2xl font-bold ">
                            Web Developer
                        </div>
                   </div>
                   </div>
                </div>
        </div>
    )
}