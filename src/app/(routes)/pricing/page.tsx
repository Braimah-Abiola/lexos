import Cta from "@/sections/cta";
import Faq from "@/sections/faq";
import PricingHero from "@/sections/pricing-hero";
import PriceComparison from "@/sections/price-comparison";
import SocialProof from "@/sections/social-proof";
import PricingCards from "@/sections/pricing-cards";

const Pricing = () => {
    return (
        <main>
            <PricingHero />
            <div className=" -mt-[76dvh] md:hidden ">
                <PricingCards />
            </div>
            <PriceComparison />
            <SocialProof />
            <Faq />
            <Cta />
        </main>
    );
}

export default Pricing;