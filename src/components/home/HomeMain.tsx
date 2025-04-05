import { HomeBannerSection } from "./HomeBannerSection";
import { PopularCategoriesCard } from "./PopularCategoriesCard";
import { RecentProjectCard } from "./RecentProjectsCard";
import { TalentCard } from "./TalentCard";
export function HomeMain(){
    return(
        <>
            <main className="pt-6 flex flex-col gap-6 md:pt-10 lg:pt-[4rem] lg:gap-[4rem]">
                <HomeBannerSection ></HomeBannerSection>


                <section className="px-4 py-6 flex flex-col gap-5 bg-[#fbfdffda] md:px-10 lg:px-[10rem] lg:py-[2rem]">
                    <h2 className="text-xl font-semibold mb-2 text-center md:text-2xl">Popular Categories</h2>    
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                        
                        <PopularCategoriesCard 
                            count={854} 
                            title="UI/UX Design"
                        />
                        <PopularCategoriesCard 
                            count={945} 
                            title="Mobile Development"
                        />
                        <PopularCategoriesCard 
                            count={697} 
                            title="Machine Learning"
                        />
                        <PopularCategoriesCard 
                            count={1047} 
                            title="Network Engineering"
                        />
                        <PopularCategoriesCard 
                            count={394} 
                            title="Digital Marketing"
                        />
                        <PopularCategoriesCard 
                            count={119} 
                            title="Content Writing"
                        />
                        <PopularCategoriesCard 
                            count={1.234} 
                            title="Web Development"
                        />
                        <PopularCategoriesCard 
                            count={321} 
                            title="Database Administration"
                        />               
                    </div>
                </section>
                <section className="px-4 flex flex-col md:px-10 lg:px-[10rem]">
                    <h2 className="text-xl font-semibold text-center mb-6 md:text-2xl lg:mb-[3rem]">Featured Talents</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[5rem]">
                        <TalentCard 
                            imageUrl="../../../public/img/1.jpg"
                            talentName="James Carter"
                            role="Senior UI/Designer"
                            rate={4.8}
                            reviews={95}
                            price={92.6}
                        />
                        <TalentCard 
                            imageUrl="../../../public/img/2.jpg"
                            talentName="Almeida Jaime"
                            role="Full Stack Developer"
                            rate={4.7}
                            reviews={120}
                            price={90.0}
                        />
                        <TalentCard 
                            imageUrl="../../../public/img/3.jpg"
                            talentName="Sophie Carter"
                            role="Digital Marketing Specialist"
                            rate={50}
                            reviews={108}
                            price={100.0}
                        />
                    </div>
                </section>
                <section className="px-4 py-6 bg-[#fbfdffda] md:px-10 lg:px-[10rem] lg:py-[2rem]">
                    <h2 className="text-xl font-semibold text-center mb-6 md:text-2xl lg:mb-[4rem]">Recent Projects</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[2rem]">
                        
                        <RecentProjectCard 
                            imgUrl="https://solutiondots.com/wp-content/uploads/2024/08/Future-of-Web-Development.jpg"
                            title="Mobile App Development"
                            subtitle="Client MounthTech Startup"
                            badge="Mobile Development"
                            price={28.00}
                        />
                        <RecentProjectCard 
                            imgUrl="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b3f45883159387.5d340beb5795d.png"
                            title="Brand Healthy Design"
                            subtitle="Client Organic Food Co"
                            badge="Branding"
                            price={9}
                        />
                        <RecentProjectCard 
                            imgUrl="https://dynamicwebdesign.com.au/wp-content/uploads/2018/10/online-clothes-website-design.jpg"
                            title="E-commerce Platform Design"
                            subtitle="Client Fashion Boutique"
                            badge="UI/UX Design"
                            price={12}
                        />
                    </div>
                </section>
                <section className="px-4 py-6 flex flex-col justify-center items-center gap-2 md:px-10 lg:px-[10rem] lg:py-[4rem]">
                    <h2 className="text-xl font-semibold text-center md:text-2xl">Ready to Get Started?</h2>
                    <p className="text-center text-sm md:text-base">Join Thousands of professionals and business on CreativeHub</p>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:mt-6 lg:mt-[2rem] text-center">
                        <a href="#" className="py-2 px-4 bg-[#123456] text-white rounded-[5rem]">Sign Up Now</a>
                        <a href="#" className="py-2 px-4 border-2 border-black rounded-[5rem]">Learn More</a>
                    </div>
                </section>
            </main>
        </>
        
    )
}