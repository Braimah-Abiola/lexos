import CustomerStoryCard from "@/components/common/customer-story-card";
import Wrapper from "@/components/common/wrapper";
import Cta2 from "@/sections/cta-2";
import CustomerStoriesMarquee from "@/sections/cusomter-stories-marquee";
import CustomerStoryHero from "@/sections/customer-story-hero";
import Statistics from "@/sections/statistics";
import { useTranslations } from "next-intl";

const CustomerStories = () => {
    const t = useTranslations("CustomerStoriesMarquee");

    return (
        <div>
            <CustomerStoryHero />
            <CustomerStoriesMarquee />
            <Wrapper className=" md:px-6 flex flex-col gap-4 items-center -mt-[34rem] md:hidden">
                <CustomerStoryCard
                    logo="/assets/story-1.png"
                    detailedCase
                    name={t("story1Name")}
                    picture="/assets/customer-1.png"
                    position={t("story1Position")}
                    review={t("story1Review")}
                    url="/customer-stories/online-movers-miami"
                />
                <CustomerStoryCard
                    logo="/assets/story-2.png"
                    detailedCase={false}
                    name={t("story2Name")}
                    picture="/assets/customer-2.png"
                    position={t("story2Position")}
                    review={t("story2Review")}
                    url="/"
                />
                <CustomerStoryCard
                    logo="/assets/story-3.png"
                    detailedCase={false}
                    name={t("story3Name")}
                    picture="/assets/customer-3.png"
                    position={t("story3Position")}
                    review={t("story3Review")}
                    url="/"
                />
                <CustomerStoryCard
                    logo="/assets/story-4.png"
                    detailedCase={false}
                    name={t("story4Name")}
                    picture="/assets/customer-4.png"
                    position={t("story4Position")}
                    review={t("story4Review")}
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