import { Marquee } from "@/components/common/marquee";
import CustomerStoryCard from "@/components/common/customer-story-card";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CustomerStoriesMarquee = () => {
    return (
        <section className=" hidden md:block -mt-[30rem] mb-40">
            <Wrapper className=" md:px-6 flex flex-col items-center">
                <Marquee pauseOnHover className=" [--gap:1rem] [--duration:30s]">
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
                </Marquee>
                <div className=" w-full h-fit relative">
                    <div className="pointer-events-none absolute z-20 inset-y-0 left-0 w-[12%] bg-gradient-to-r from-background"></div>

                    <Marquee pauseOnHover reverse className=" [--gap:1rem] [--duration:42s]">
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
                    </Marquee>

                    <div className="pointer-events-none absolute z-20 inset-y-0 right-0 w-[12%] bg-gradient-to-l from-background"></div>

                </div>
                <Link href="/customer-stories/online-movers-miami">
                    <Button className=" mt-12">Read Customer Story <ArrowUpRight /></Button>
                </Link>
            </Wrapper>
        </section>
    );
}

export default CustomerStoriesMarquee;