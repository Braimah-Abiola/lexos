import { Marquee } from "@/components/common/marquee";
import CustomerStoryCard from "@/components/common/customer-story-card";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CustomerStoriesMarquee = () => {
    const t = useTranslations("CustomerStoriesMarquee");
    return (
        <section className=" hidden md:block">
            <Wrapper className=" md:px-6 flex flex-col items-center">
                
                <div className=" w-full h-fit relative">
                    <div className="pointer-events-none absolute z-20 inset-y-0 left-0 w-[12%] bg-gradient-to-r from-background"></div>

                    <Marquee pauseOnHover reverse className=" [--gap:1rem] [--duration:42s]">
                        <CustomerStoryCard
                            logo="/assets/story-5.png"
                            detailedCase={false}
                            name={t("story5Name")}
                            picture="/assets/customer-5.png"
                            position={t("story5Position")}
                            review={t("story5Review")}
                            url="/"
                        />
                        <CustomerStoryCard
                            logo="/assets/story-6.png"
                            detailedCase={false}
                            name={t("story6Name")}
                            picture="/assets/lu.png"
                            position={t("story6Position")}
                            review={t("story6Review")}
                            url="/"
                        />
                        <CustomerStoryCard
                            logo="/assets/story-7.png"
                            detailedCase={false}
                            name={t("story7Name")}
                            picture="/assets/customer-7.png"
                            position={t("story7Position")}
                            review={t("story7Review")}
                            url="/"
                        />
                        <CustomerStoryCard
                            logo="/assets/story-8.png"
                            detailedCase={false}
                            name={t("story8Name")}
                            picture="/assets/customer-8.png"
                            position={t("story8Position")}
                            review={t("story8Review")}
                            url="/"
                        />
                    </Marquee>

                    <div className="pointer-events-none absolute z-20 inset-y-0 right-0 w-[12%] bg-gradient-to-l from-background"></div>

                </div>
                <Link href="/customer-stories/online-movers-miami">
                    <Button className=" mt-12">{t("readCustomerStoryButton")} <ArrowUpRight /></Button>
                </Link>
            </Wrapper>
        </section>
    );
}

export default CustomerStoriesMarquee;