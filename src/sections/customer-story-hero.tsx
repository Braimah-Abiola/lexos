import Wrapper from "@/components/common/wrapper";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const CustomerStoryHero = () => {
    const t = useTranslations("CustomerStoriesHero");
    return (
        <section className=" w-full h-screen">
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
                        <span className=" relative md:ml-2 pl-2 pr-2">
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
                                <Image width={40} height={40} src="/assets/company-1.png" className="" quality={100} alt={t("company1Alt")} />
                                <Image width={40} height={40} src="/assets/company-2.png" className="" quality={100} alt={t("company2Alt")} />
                                <Image width={40} height={40} src="/assets/company-3.png" className="" quality={100} alt={t("company3Alt")} />

                            </div>
                            <span className=" text-foreground opacity-70">{t("stat3Label")}</span>

                        </div>
                    </div>
                    <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" opacity-80 rounded-t-xl object-cover object-top z-[-1]" alt={t("heroBackgroundAlt")} />
                </div>
            </Wrapper>
        </section>
    );
}

export default CustomerStoryHero;