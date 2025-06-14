import Wrapper from "@/components/common/wrapper";
import { Gem } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PricingCards from "./pricing-cards";

const PricingHero = () => {
    const t = useTranslations("Pricing");
    return (
        <section className=" h-screen min-h-screen">
            <Wrapper className="px-2 md:px-6 w-full h-full">
                <div className=" h-full w-full relative flex flex-col items-center pt-20">
                    <span className=" bg-white text-primary rounded-full pl-2 py-1.5 pr-3 inline-flex items-center gap-2">
                        <Gem />
                        <p className=" text-foreground">{t("badgeText")}</p>
                    </span>
                    <h1 className=" mt-2 font-manrope text-4xl md:text-5xl md:leading-[60px] font-bold text-center">
                        {t("heroTitle").split(" ").slice(0, 4).join(" ")} <br className=" hidden md:block" /> {t("heroTitle").split(" ").slice(4).join(" ")}
                    </h1>
                    <div className=" hidden md:block">
                        <PricingCards />
                    </div>
                    <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" rounded-t-xl object-cover object-top z-[-1]" alt={t("heroBackgroundImageAlt")} />
                </div>
            </Wrapper>
        </section>
    );
}

export default PricingHero;