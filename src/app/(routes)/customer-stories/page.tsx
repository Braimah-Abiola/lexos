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
            <Wrapper className=" md:px-6 flex flex-col gap-4 items-center -mt-[34rem] md:hidden">
                <CustomerStoryCard
                    logo="/assets/story-1.png"
                    detailedCase
                    name="Saady Bijani"
                    picture="/assets/customer-1.png"
                    position="CEO @Online Movers Miami"
                    review="We used to spend too much time piecing together photos and writing up inventory lists. Lexos does it for us in minutes. Our team doesn't dread surveys anymore."
                    url="/customer-stories/online-movers-miami"
                />
                <CustomerStoryCard
                    logo="/assets/story-2.png"
                    detailedCase={false}
                    name="Julia"
                    picture="/assets/customer-2.png"
                    position="Sales Manager @Flash Moving & Storage"
                    review="The CRM sync was surprisingly seamless. It also allows us to have our customers' information all in one place. It has saved Flash a lot of time, especially during peak season."
                    url="/"
                />
                <CustomerStoryCard
                    logo="/assets/story-3.png"
                    detailedCase={false}
                    name="Michael Cattan"
                    picture="/assets/customer-3.png"
                    position="Owner @Michael’s Moving & Storage"
                    review="We’ve tried a bunch of tools over the years, but Lexos is the first one that actually fits the way we work. It’s simple, and gives my team a complete inventory without all the back and forth."
                    url="/"
                />
                <CustomerStoryCard
                    logo="/assets/story-4.png"
                    detailedCase={false}
                    name="Alex"
                    picture="/assets/customer-4.png"
                    position="Owner @Best Quality Moving"
                    review="With Lexos, quoting is easier—our team uploads photos and instantly gets weight and volume, making us look more transparent and professional to customers."
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