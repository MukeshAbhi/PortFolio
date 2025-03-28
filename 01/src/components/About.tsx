export const About = () => {
    return(
        <div className="w-full h-screen flex items-start pt-10 justify-center ">
            <div className="w-3/4 text-t2 ">
                <div className="text-5xl pb-16 ">About me</div>
                <div className="text-3xl pb-10">Hello, I’m Mukesh Papanna, a passionate tech enthusiast.</div>
                <div className="text-2xl">
                        Although I graduated with a degree in finance, my true interests lie in technology.
                        My journey into tech began with CS50x, a certification course from Harvard University.
                        After completing it, I delved into web development, which is now my primary focus.
                        Over time, I’ve built a solid foundation in web development and have worked on a variety of projects, making it my strong suit.
                </div>
                <div>
                    <div className="text-5xl py-16">Technical skills</div>

                    <div className="flex items-center justify-around">
                        <div className="grid grid-cols-10  grid-rows-2 gap-6 ">
                                <img src="/c.webp"className="row-span-2" />
                                <img src="/js.webp"  className="w-14"/>
                                <img src="/ts.png"  className="w-14"/>
                                <img src="/py.svg"  className="w-14 "/>
                                <img src="/css.webp"  className="w-14 "/>
                                <img src="/html.webp"  className="w-14 "/>
                                <img src="/tailwind.svg"  className="w-14 "/>
                                <img src="/mern.webp"  className=" w-40 bg-t2 row-span-2 col-span-3"/>
                                <img src="/docker.webp"  className="w-14 "/>
                                <img src="/react.svg"  className="w-14 "/>
                                <img src="/sql.png"  className="w-20"/>
                                <img src="/sqlite.png"  className="w-20"/>
                                <img src="/postgresql.webp"  className="w-14 "/>
                                <img src="/github.webp"  className="w-14 "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}