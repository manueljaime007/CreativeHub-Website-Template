export function Navbar(){
    return(
        <header className="px-4 pt-5 flex flex-col gap-4 sm:flex-row sm:px-6 md:px-10 lg:px-[10rem] justify-between items-center">
        <a href="html.html" className="flex justify-between items-center gap-2">
            <i className="fas fa-lightbulb text-3xl text-[#ffd600] text-shadow "></i>
            <h1 className="text-2xl font-semibold">SparkVibe</h1>
        </a>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <nav className="hidden sm:block">
                <ul className="flex justify-between gap-3">
                    <li className="text-[.9rem] text-gray-700"><a href="#">Free Work</a></li>
                    <li className="text-[.9rem] text-gray-700"><a href="#">Find Talent</a></li>
                    <li className="text-[.9rem] text-gray-700"><a href="#">Why SparkVibe</a></li>
                </ul>
            </nav>
            <div className="flex gap-4 sm:hidden">
                <button id="darkmode">
                    <i className="fas fa-moon text-[.9rem] text-gray-700"></i>
                </button>
                <a href="#" className="py-2 px-4 rounded-md bg-[#123456] text-white text-[.9rem]">Get Started</a>
            </div>
        </div>
    </header>
    )
}