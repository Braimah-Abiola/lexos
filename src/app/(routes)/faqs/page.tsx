import AllFaq from "@/sections/all-faqs";
import Cta2 from "@/sections/cta-2";
import FaqsHero from "@/sections/faqs-hero";

const Faqs = () => {
    return (
        <div>
            <FaqsHero />
            <AllFaq />
            <div className=" md:h-28" />
            <Cta2 />
        </div>
    );
}

export default Faqs;