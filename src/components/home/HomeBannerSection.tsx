export function HomeBannerSection(){
    return(
        <>
            <section className="px-4 py-6 flex flex-col justify-center items-center gap-5 text-center md:px-10 lg:px-[10rem] lg:py-[5rem]">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Where Talent Meets Opportunity</h2>
            <p className="text-sm md:text-base">Connect with top creative professionals and bring your projects to life <br /> Find work that matches your skills and aspirations</p>
            <div className="flex flex-col gap-3 mt-3 sm:flex-row sm:gap-4">
                <a href="#" className="py-2 px-4 border-2 bg-[#123456] text-white rounded-[5rem]">Find Talent</a>
                <a href="#" className="py-2 px-4 border-2 border-black rounded-[5rem]">Find Work</a>
            </div>
        </section>
        </>
    )
}