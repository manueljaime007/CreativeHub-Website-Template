import categoryComponents from "../../../CategorieComponets";
import { PopularCategoriesCard } from "./PopularCategoriesCard";
import { RecentProjectCard } from "./RecentProjectsCard";
import { TalentCard } from "./TalentCard";



export function HomeMain(){
    return(
        <>
            <main className="pt-6 flex flex-col gap-6 md:pt-10 lg:pt-[4rem] lg:gap-[4rem]">
                <section className="px-4 py-6 flex flex-col justify-center items-center gap-5 text-center md:px-10 lg:px-[10rem] lg:py-[5rem]">
                    <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Ignite Your Creative Journey</h2>
                    <p className="text-sm md:text-base">Link up with visionary talents and spark your next big project <br /> Discover opportunities that fuel your skills and dreams</p>
                    <div className="flex flex-col gap-3 mt-3 sm:flex-row sm:gap-4">
                        <a href="#" className="py-2 px-4 border-2 border-transparent bg-[#1f1f1f] text-white rounded-[5rem] transition duration-200 ease-in-out hover:bg-amber-400 ">Find Talent</a>
                        <a href="#" className="py-2 px-4 border-2 border-black rounded-[5rem] transition duration-200 ease-in-out hover:border-transparent hover:bg-[#1f1f1f] hover:text-white">Find Work</a>
                    </div>
                </section>

                <section>
                    {categoryComponents}
                </section>

                <section className="px-4 py-6 flex flex-col gap-5 bg-[#fcfcd9da] md:px-10 lg:px-[10rem] lg:py-[2rem]">
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
                        <PopularCategoriesCard 
                            count={245} 
                            title="Web Development"
                        />

                        <PopularCategoriesCard 
                            count={178} 
                            title="Graphic Design"
                        />

                        <PopularCategoriesCard 
                            count={392} 
                            title="Mobile App Development"
                        />

                        <PopularCategoriesCard 
                            count={134} 
                            title="Digital Marketing"
                        />

                        <PopularCategoriesCard 
                            count={287} 
                            title="Cloud Computing"
                        />

                        <PopularCategoriesCard 
                            count={95} 
                            title="UI/UX Design"
                        />

                        <PopularCategoriesCard 
                            count={410} 
                            title="Data Analysis"
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
                        <TalentCard 
                            imageUrl="../../../public/img/4.jpg"
                            talentName="Lucas Mendes"
                            role="Frontend Developer"
                            rate={85}
                            reviews={92}
                            price={120.0}
                        />

                        <TalentCard 
                            imageUrl="../../../public/img/5.jpg"
                            talentName="Ana Oliveira"
                            role="Graphic Designer"
                            rate={90}
                            reviews={150}
                            price={80.0}
                        />

                        <TalentCard 
                            imageUrl="../../../public/img/6.jpg"
                            talentName="James Patel"
                            role="Data Analyst"
                            rate={75}
                            reviews={64}
                            price={95.0}
                        />

                    </div>
                </section>
                <section className="px-4 py-6 bg-[#fcfcd9da] md:px-10 lg:px-[10rem] lg:py-[2rem]">
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
                        <RecentProjectCard 
                            imgUrl="https://cdn.dribbble.com/users/123456/screenshots/7890123/media/food-delivery-app.jpg"
                            title="Food Delivery App"
                            subtitle="Client QuickBite"
                            badge="Mobile App Design"
                            price={15}
                        />

                        <RecentProjectCard 
                            imgUrl="https://www.webdesignerdepot.com/uploads/2019/05/landing-page-example.jpg"
                            title="Landing Page Redesign"
                            subtitle="Client TechStartup"
                            badge="Web Design"
                            price={10}
                        />

                        <RecentProjectCard 
                            imgUrl="https://cdn.pixabay.com/photo/2020/05/25/17/03/travel-website.jpg"
                            title="Travel Booking Website"
                            subtitle="Client Wanderlust Agency"
                            badge="UI/UX Design"
                            price={18}
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