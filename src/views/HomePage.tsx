import { Footer } from "../components/Footer";
import { HomeMain } from "../components/home/HomeMain";
import { Navbar } from "../components/Navbar";

export function HomePage(){
    return(
        <>
            <Navbar></Navbar>
            <HomeMain></HomeMain>
            <Footer></Footer>
        </>
        
    )
}