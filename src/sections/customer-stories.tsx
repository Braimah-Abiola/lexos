"use client"

import CustomerStoryCard from "@/components/common/customer-story-card";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Stars } from "lucide-react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { useCallback, useEffect, useRef, useState } from "react";

const CustomerStories = () => {
    const t = useTranslations("CustomerStories"); // Initialize useTranslations
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null); // Add this ref
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Dynamically get card width
    const getCardWidth = useCallback(() => {
        if (cardRef.current) {
            return cardRef.current.offsetWidth + 16; // 16px = gap-4, adjust if you change gap
        }
        // fallback to a default value if not rendered yet
        return 320;
    }, []);

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
        const cardWidth = getCardWidth();
        const currentScrollLeft = scrollContainerRef.current.scrollLeft;
        const newScrollLeft =
            direction === "left"
                ? currentScrollLeft - cardWidth
                : currentScrollLeft + cardWidth;
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
                </div>
            </Wrapper>

            <div className="w-full relative mt-6 md:mt-16 h-full">
                <div className="pl-2.5 md:pl-20 2xl:pl-[20rem] pr-2.5 md:pr-0 h-full">
                    <div
                        ref={scrollContainerRef}
                        className={cn(
                            "overflow-x-auto scroll-smooth scrollbar-hide pb-4 h-full"
                        )}
                    >
                        <div className="flex gap-4 md:gap-8 h-full w-max pr-2.5 md:pr-20 lg:pr-32">
                            <div className="" ref={cardRef}>
                                <CustomerStoryCard
                                    logo="/assets/story-1.png"
                                    detailedCase
                                    name={t("story1Name")}
                                    picture="/assets/customer-1.png"
                                    position={t("story1Position")}
                                    review={t("story1Review")}
                                    url="/customer-stories/online-movers-miami"
                                />
                            </div>
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