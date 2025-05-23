import {Footer} from "@/components/sections/Footer";
import {Testimonial} from "@/components/sections/Testimonial";
import {Community} from "@/components/sections/Community";
import {Clients} from "@/components/sections/Clients";
import {Hero} from "@/components/sections/Hero";
import {Navigation} from "@/components/sections/Navigation";
import {Marketing} from "@/components/sections/Marketing";
import {CaseStudy2} from "@/components/sections/CaseStudy2";
import {CTA} from "@/components/sections/CTA";
import {Stats} from "@/components/sections/Stats";
import {CaseStudy1} from "@/components/sections/CaseStudy1";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation/>
            <Hero/>
            <Clients/>
            <Community/>
            <CaseStudy1/>
            <Stats/>
            <CaseStudy2/>
            <Testimonial/>
            <Marketing/>
            <CTA/>
            <Footer/>
        </div>
    )
}
