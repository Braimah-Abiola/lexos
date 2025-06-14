import Cta2 from "@/sections/cta-2";
import CustomerStories from "@/sections/customer-stories";
import Faq from "@/sections/faq";
import Hero from "@/sections/hero";
import Pricing from "@/sections/pricing";
import SocialProof from "@/sections/social-proof";
import Solutions from "@/sections/solutions";
import Statistics from "@/sections/statistics";

const HomePage = () => {
    return (
        <main>
            <Hero />
            <SocialProof />
            <Solutions />
            <Statistics />
            <CustomerStories />
            <Pricing />
            <Faq />
            <Cta2 />
        </main>
    );
}

export default HomePage;