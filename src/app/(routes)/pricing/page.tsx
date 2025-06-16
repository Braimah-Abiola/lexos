import Cta2 from "@/sections/cta-2";
import Faq from "@/sections/faq";
import PriceComparison from "@/sections/price-comparison";
import PricingCards from "@/sections/pricing-cards";
import PricingHero from "@/sections/pricing-hero";
import SocialProof from "@/sections/social-proof";

const Pricing = () => {
    return (
        <main>
            <PricingHero />
            <div className=" -mt-[76vh] md:hidden ">
                <PricingCards />
            </div>
            <PriceComparison />
            <SocialProof />
            <Faq />
            <Cta2 />
        </main>
    );
}

export default Pricing;