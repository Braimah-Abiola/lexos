"use client"

import CustomerStoryCard from "@/components/common/customer-story-card";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button"; 
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Stars } from "lucide-react"; 
import { useEffect, useRef, useState } from "react"; 

const CustomerStories = () => {
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
                        <p>Customer Stories</p>
                    </span>
                    <h2 className="mt-2 font-manrope text-4xl md:text-5xl font-bold text-center">
                        See what our customers say
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
                <div className=" hidden md:block absolute inset-y-0 left-0 md:left-20 z-20 bottom-0 h-full w-1/4 bg-gradient-to-r from-background" />
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
                            <CustomerStoryCard
                                logo="/assets/story-5.png"
                                detailedCase={false}
                                name="Ash"
                                picture="/assets/customer-5.png"
                                position="Sales Manager @Royal Moving"
                                review="Customers really like how easy it is to take photos through Lexos, and we love that we get clean inventories back without chasing them down"
                                url="/"
                            />
                            <CustomerStoryCard
                                logo="/assets/story-6.png"
                                detailedCase={false}
                                name="Lu Annatone"
                                picture="/assets/lu.png"
                                position="Owner @The Junk Removers"
                                review="Having a fully itemized inventory cleaned up our entire process—especially in an industry where everything we handle is, well, junk."
                                url="/"
                            />
                            <CustomerStoryCard
                                logo="/assets/story-7.png"
                                detailedCase={false}
                                name="Sara Bauman"
                                picture="/assets/customer-7.png"
                                position="Inside Sales Manager @ All Service Moving"
                                review="Just in the 2 surveys I have done, Lexos has helped me land two jobs for about $20k! Not to mention the amount of admin time the software eliminates"
                                url="/"
                            />
                            <CustomerStoryCard
                                logo="/assets/story-8.png"
                                detailedCase={false}
                                name="Ali Olzhas"
                                picture="/assets/customer-8.png"
                                position="Owner @Amanat Moving & Storage"
                                review="Lexos has helped us cut down on miscommunication and wasted trips, which, in Boston, is priceless."
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
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="default"
                            size="icon"
                            className="rounded-full pointer-events-auto disabled:opacity-50 z-30"
                            onClick={() => handleScroll("right")}
                            disabled={!canScrollRight}
                            aria-label="Scroll right"
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