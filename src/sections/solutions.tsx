"use client";
import Wrapper from "@/components/common/wrapper";
import { Separator } from "@/components/ui/separator";
import { Stars } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Solutions = () => {
    const t = useTranslations("Solutions");
    return (
        <section id="about" className=" pt-20 bg-accent">
            <Wrapper className="flex flex-col items-center">
                <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                    <Stars />
                    <p>{t("badgeText")}</p>
                </span>
                <h2 className="mt-2 font-manrope text-4xl md:text-5xl font-bold text-center">{t("title")}</h2>
                <p className="text-base mt-2 text-foreground opacity-70 text-center">{t("description")}</p>
            </Wrapper>


            <Separator className=" w-full mt-12" orientation="horizontal" />
            <Wrapper className="flex flex-col items-center">
                <div className=" max-w-7xl mx-auto w-full border-l border-r">
                    <div className=" w-full grid grid-cols-1 md:grid-cols-2">
                        <div className="flex flex-col items-center md:items-start border-b border-r md:pl-20 pt-12 pb-12">
                            <Image width={80} height={80} src="/assets/solution-1.png" alt="" />
                            <h3 className=" font-plex-sans font-semibold text-2xl text-foreground">{t("step1Title")}</h3>
                            <p className=" text-foreground text-base text-center md:text-start px-12 md:px-0 opacity-70">{t("step1Description")}</p>
                        </div>

                        <div className="flex flex-col items-center md:items-start border-b md:pl-20 pt-12 pb-12">
                            <Image width={80} height={80} src="/assets/solution-2.png" alt="" />
                            <h3 className=" font-plex-sans font-semibold text-2xl text-foreground">{t("step2Title")}</h3>
                            <p className=" text-foreground text-base text-center md:text-start px-12 md:px-0 opacity-70">{t("step2Description")}</p>
                        </div>

                        <div className="flex flex-col items-center md:items-start border-r border-b md:border-b-0 md:pl-20 pt-12 pb-12">
                            <Image width={80} height={80} src="/assets/solution-3.png" alt="" />
                            <h3 className=" font-plex-sans font-semibold text-2xl text-foreground">{t("step3Title")}</h3>
                            <p className=" text-foreground text-base text-center md:text-start px-12 md:px-0 opacity-70">{t("step3Description")}</p>
                        </div>

                        <div className="flex flex-col items-center md:items-start md:pl-20 pt-12 pb-12">
                            <Image width={80} height={80} src="/assets/solution-4.png" alt="" />
                            <h3 className=" font-plex-sans font-semibold text-2xl text-foreground">{t("step4Title")}</h3>
                            <p className=" text-foreground text-base text-center md:text-start px-12 md:px-0 opacity-70">{t("step4Description")}</p>
                        </div>
                    </div>

                    <div className=" h-[36rem] hidden md:block overflow-clip bg-gradient-to-b from-[#D9D5FB] to-primary px-2 pt-10 rounded-t-[2rem] w-[95%] mx-auto">
                        <div className=" w-full h-full relative">
                            <Image fill src="/assets/preview.png" className=" object-cover object-top" alt="" />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Solutions;