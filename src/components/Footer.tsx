export function Footer(){
    return(
        <footer  className="px-4 py-6 bg-[#fcfcd9da] md:px-10 lg:px-[10rem] lg:py-[3rem]">
            <section  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div  className="flex flex-col">
                    <h4  className="font-semibold mb-[.3rem]">For Client</h4>
                    <a href="#"  className="text-[.9rem] text-gray-700">How It Works</a>
                    <a href="#"  className="text-[.9rem] text-gray-700">Talent Marketplace</a>
                    <a href="#"  className="text-[.9rem] text-gray-700">Project Creating</a>
                    <a href="#"  className="text-[.9rem] text-gray-700">Enterprise</a>
                </div>
                <div  className="flex flex-col">
                    <h4  className="font-semibold mb-[.3rem]">For Talent</h4>
                    <a href="#"  className="text-[.9rem] text-gray-700">Hire or Find Work</a>
                    <a href="#"  className="text-[.9rem] text-gray-700">Client Contacts</a>
                    <a href="#"  className="text-[.9rem] text-gray-700">Portfolio Tips</a>
                    <a href="#"  className="text-[.9rem] text-gray-700">Resources</a>
                </div>
                <div  className="flex flex-col">
                    <h4  className="font-semibold mb-[.3rem]">Resources</h4>
                    <a href="#"  className="text-[.9rem] text-gray-700">Support</a>
                    <a href="#"  className="text-[.9rem] text-gray-700">Success</a>
                    <a href="#"  className="text-[.9rem] text-gray-700">Blog</a>
                    <a href="#"  className="text-[.9rem] text-gray-700">Community</a>
                </div>
                <div  className="flex flex-col">
                    <h4  className="font-semibold mb-[.3rem]">Company</h4>
                    <a href="#"  className="text-[.9rem] text-gray-700">About Us</a>
                    <a href="#"  className="text-[.9rem] text-gray-700">Leadership</a>
                    <a href="#"  className="text-[.9rem] text-gray-700">Careers</a>
                    <a href="#"  className="text-[.9rem] text-gray-700">Contact Us</a>
                </div>
            </section>
            <div  className="text-center text-[.8rem] text-gray-900 mt-6 lg:mt-[2rem]">
                <p>@ 2025 SparkVibe - All Rights Reserved</p>
            </div>
        </footer>
    )
}