"use client"

import CustomerStoryCard from "@/components/common/customer-story-card";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Stars } from "lucide-react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { useEffect, useRef, useState } from "react";

const CustomerStories = () => {
    const t = useTranslations("CustomerStories"); // Initialize useTranslations
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const SCROLL_AMOUNT = 580;

    const updateScrollButtons = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    };

    useEffect(() => {
        updateScrollButtons();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButtons);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", updateScrollButtons);
            }
        };
    }, []);


    const handleScroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return;
        const currentScrollLeft = scrollContainerRef.current.scrollLeft;
        const newScrollLeft =
            direction === "left"
                ? currentScrollLeft - SCROLL_AMOUNT
                : currentScrollLeft + SCROLL_AMOUNT;
        scrollContainerRef.current.scrollTo({
            left: newScrollLeft,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-20 overflow-x-hidden">
            <Wrapper>
                <div className=" w-full flex flex-col items-center">
                    <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                        <Stars />
                        <p>{t("badgeText")}</p>
                    </span>
                    <h2 className="mt-2 font-manrope text-4xl md:text-5xl font-bold text-center">
                        {t("title")}
                    </h2>

                    {/* <div className=" hidden md:grid md:grid-cols-5 gap-8 px-20 mt-12">
                        <div className="border-t-[2px] border-t-primary">
                            <Image width={180} height={60} src="/assets/olympia-logo.png" className=" object-contain mt-4" quality={100} alt="Olympia" />
                        </div>

                        <div className="border-t-[2px] border-t-black/10">
                            <Image width={190} height={60} src="/assets/maximoving.png" className=" object-contain mt-2" quality={100} alt="Olympia" />
                        </div>

                        <div className="border-t-[2px] border-t-black/10">
                            <Image width={184} height={60} src="/assets/armstrong.png" className=" object-contain mt-6" quality={100} alt="Olympia" />
                        </div>
                        <div className="border-t-[2px] border-t-black/10">
                            <Image width={168} height={60} src="/assets/allegiance.png" className=" object-contain mt-2" quality={100} alt="Olympia" />
                        </div>
                        <div className="border-t-[2px] border-t-black/10">
                            <Image width={150} height={60} src="/assets/pink-zebra.png" className=" object-contain mt-1 ml-4" quality={100} alt="Olympia" />
                        </div>
                    </div> */}
                </div>
            </Wrapper>

            <div className="w-full relative mt-6 md:mt-16">
                <div className="pl-2.5 md:pl-20 2xl:pl-[20rem] pr-2.5 md:pr-0">
                    <div
                        ref={scrollContainerRef}
                        className={cn(
                            "overflow-x-auto scroll-smooth scrollbar-hide pb-4"
                        )}
                    >
                        <div className="flex gap-8 w-max pr-2.5 md:pr-20 lg:pr-32">
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
                                logo="/assets/story-7.png"
                                detailedCase={false}
                                name={t("story7Name")}
                                picture="/assets/customer-7.png"
                                position={t("story7Position")}
                                review={t("story7Review")}
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
                                logo="/assets/story-8.png"
                                detailedCase={false}
                                name={t("story8Name")}
                                picture="/assets/customer-8.png"
                                position={t("story8Position")}
                                review={t("story8Review")}
                                url="/"
                            />
                        </div>
                    </div>
                </div>
                <Wrapper className=" mt-10">
                    <div className=" w-full flex items-center gap-3 justify-center">
                        <Button
                            variant="default"
                            size="icon"
                            className="rounded-full pointer-events-auto disabled:opacity-50 z-30"
                            onClick={() => handleScroll("left")}
                            disabled={!canScrollLeft}
                            aria-label={t("scrollLeftAriaLabel")}
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="default"
                            size="icon"
                            className="rounded-full pointer-events-auto disabled:opacity-50 z-30"
                            onClick={() => handleScroll("right")}
                            disabled={!canScrollRight}
                            aria-label={t("scrollRightAriaLabel")}
                        >
                            <ArrowRight className="h-6 w-6" />
                        </Button>
                    </div>
                </Wrapper>
            </div>
        </section>
    );
}

export default CustomerStories;