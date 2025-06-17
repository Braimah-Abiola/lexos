import Cta2 from "@/sections/cta-2";
import CustomerStoriesMarquee from "@/sections/cusomter-stories-marquee";
import CustomerStoryHero from "@/sections/customer-story-hero";
import Statistics from "@/sections/statistics";

const CustomerStories = () => {

    return (
        <div className=" w-full overflow-x-hidden">
            <CustomerStoryHero />
            <CustomerStoriesMarquee />

            <div className=" mt-20 md:mt-40 py-12 mb-40 bg-accent">
                <Statistics />
            </div>
            <Cta2 />
        </div>
    );
}

export default CustomerStories;