export const Contact = () => {
    return(
        <div className="w-full h-screen pt-10  text-t2  ">
            <div>
                <div className="text-5xl flex justify-center ">Contact</div>
                <div className="flex-row p-20">
                    <div className="flex items-center p-5">
                        <img src="/gmail.svg" className="w-14 mx-3" />
                        <div className="text-3xl  ">Email : abhiMukesh233@gmail.com</div>
                    </div>
                    <div className="flex items-center p-5 ">
                        <img src="/twitter.svg" className="w-14 mx-3" />
                        <div className="text-3xl  ">X : @MukeshAbhi16</div>
                    </div>
                    <div className="flex items-center p-5">
                        <img src="/li.svg" className="w-14 mx-3" />
                        <div className="text-3xl  ">LinkedIn : @MukeshAbhi16</div>
                    </div>
                </div>
            </div>

        </div>
    )
}