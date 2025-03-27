export const TopBar = () => {
    return(
        <div className="flex items-center w-full fixed justify-between bg-b1 text-t2 h-14 text-2xl">
            <div className="px-8">
                DEV
            </div>
            <div className="flex items-center pr-20 ">
                <div className="hidden  md:flex justify-between md:px-8 ">
                    About
                </div>
                <div className="hidden  md:flex justify-between md:px-8 ">
                    Projects
                </div>
                <div className="hidden  md:flex justify-between md:px-8 ">
                    Contact
                </div>
            </div>
            <div className="md:hidden flex  items-center px-8">
                    HHH
            </div>
        </div>
    )
}