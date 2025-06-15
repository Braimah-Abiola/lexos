import CustomerStoryCard from "@/components/common/customer-story-card";
import Wrapper from "@/components/common/wrapper";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const CustomerStoryHero = () => {
    const t = useTranslations("CustomerStoriesHero");
    const t2 = useTranslations("CustomerStoriesMarquee");

    return (
        <section className=" w-full h-fit md:h-screen min-h-screen">
            <Wrapper className="px-2 md:px-6 w-full h-full">
                <div className=" h-full w-full relative flex flex-col items-center pt-20 md:pt-32">
                    <Link href="/customer-stories/online-movers-miami">
                        <span className=" pl-1.5 pr-3 py-1.5 inline-flex items-center gap-2 bg-white border border-black/10 rounded-full">
                            <Image width={24} height={24} src="/assets/miami.png" alt={t("companyLogoAlt")} />
                            <span className=" text-sm flex gap-1"><span className=" hidden md:inline-flex">{t("badgeTextPart1")}</span> {t("badgeTextPart2")}</span>
                            <ArrowRight className=" size-4" />
                        </span>
                    </Link>
                    <h1 className=" mt-2 font-manrope text-4xl md:text-5xl md:leading-[60px] font-bold text-center">
                        {t("titlePart1")} <br className=" hidden md:block" />
                        <span className=" relative md:ml-2 md:pl-2 pr-2">
                            {t("titlePart2")}
                            <div className=" bg-primary/40 border-2 border-primary -z-[1] absolute inset-0 hidden md:block">
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -left-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -right-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -left-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -right-[5px]" />
                            </div>
                        </span>
                    </h1>
                    <p className=" max-w-[40ch] mt-2 text-center text-base text-foreground opacity-70">
                        {t("description")}
                    </p>
                    <div className="hidden  md:grid md:grid-cols-3 max-w-2xl w-full mt-8">
                        <div className="flex flex-col gap-2 items-center">
                            <h6 className=" font-semibold text-4xl text-foreground">{t("stat1Value")}</h6>
                            <span className=" text-foreground opacity-70">{t("stat1Label")}</span>
                        </div>

                        <div className="flex flex-col gap-2 items-center">
                            <h6 className=" font-semibold text-4xl text-foreground">{t("stat2Value")}</h6>
                            <span className=" text-foreground opacity-70 text-nowrap">{t("stat2Label")}</span>
                        </div>

                        <div className="flex flex-col gap-2 items-center">
                            <div className=" inline-flex items-center -space-x-3">
                                <Image width={40} height={40} src="/assets/featured-1.png" className="" quality={100} alt="Featured company" />
                                <Image width={40} height={40} src="/assets/featured-2.png" className="" quality={100} alt="Featured company" />
                                <Image width={40} height={40} src="/assets/featured-3.png" className="" quality={100} alt="Featured company" />
                                <Image width={40} height={40} src="/assets/featured-4.png" className="" quality={100} alt="Featured company" />
                                <Image width={40} height={40} src="/assets/featured-5.png" className="" quality={100} alt="Featured company" />

                            </div>
                            <span className=" text-foreground opacity-70">{t("stat3Label")}</span>

                        </div>
                    </div>

                    <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" opacity-80 rounded-t-xl object-cover object-top z-[-1]" alt={t("heroBackgroundAlt")} />
                </div>
            </Wrapper>
            <Wrapper className=" md:px-6 mt-8 flex flex-col gap-4 items-center md:hidden">
                <CustomerStoryCard
                    logo="/assets/story-1.png"
                    detailedCase
                    name={t2("story1Name")}
                    picture="/assets/customer-1.png"
                    position={t2("story1Position")}
                    review={t2("story1Review")}
                    url="/customer-stories/online-movers-miami"
                />
                <CustomerStoryCard
                    logo="/assets/story-2.png"
                    detailedCase={false}
                    name={t2("story2Name")}
                    picture="/assets/customer-2.png"
                    position={t2("story2Position")}
                    review={t2("story2Review")}
                    url="/"
                />
                <CustomerStoryCard
                    logo="/assets/story-3.png"
                    detailedCase={false}
                    name={t2("story3Name")}
                    picture="/assets/customer-3.png"
                    position={t2("story3Position")}
                    review={t2("story3Review")}
                    url="/"
                />
                <CustomerStoryCard
                    logo="/assets/story-4.png"
                    detailedCase={false}
                    name={t2("story4Name")}
                    picture="/assets/customer-4.png"
                    position={t2("story4Position")}
                    review={t2("story4Review")}
                    url="/"
                />
            </Wrapper>
        </section>
    );
}

export default CustomerStoryHero;