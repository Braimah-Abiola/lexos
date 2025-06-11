import CustomerStoryCard from "@/components/common/customer-story-card";
import Wrapper from "@/components/common/wrapper";
import Cta2 from "@/sections/cta-2";
import CustomerStoriesMarquee from "@/sections/cusomter-stories-marquee";
import CustomerStoryHero from "@/sections/customer-story-hero";
import Statistics from "@/sections/statistics";

const CustomerStories = () => {
    return (
        <div>
            <CustomerStoryHero />
            <CustomerStoriesMarquee />
            <Wrapper className=" md:px-6 flex flex-col gap-4 items-center -mt-[34rem]">
                <CustomerStoryCard
                    logo="/assets/olympia-logo.png"
                    detailedCase
                    name="John Doe"
                    picture="/assets/customer-1.png"
                    position="Manager of Olympia Moving"
                    review="Just in the 2 surveys I have done, Lexos has helped me land two jobs for about $20k! Not to mention the amount of admin time the software eliminates."
                    url="/customer-stories/olympia"
                />
                <CustomerStoryCard
                    logo="/assets/olympia-logo.png"
                    detailedCase={false}
                    name="John Doe"
                    picture="/assets/customer-2.png"
                    position="Manager of Olympia Moving"
                    review="Just in the 2 surveys I have done, Lexos has helped me land two jobs for about $20k! Not to mention the amount of admin time the software eliminates."
                    url="/"
                />
            </Wrapper>
            <div className=" py-12 mb-40 bg-accent">
                <Statistics />
            </div>
            <Cta2 />
        </div>
    );
}

export default CustomerStories;