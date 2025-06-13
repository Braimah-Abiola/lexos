"use client";
import { Gem } from "lucide-react";
import PricingCards from "./pricing-cards";
import Wrapper from "@/components/common/wrapper";
import { useTranslations } from "next-intl";

const Pricing = () => {
    const t = useTranslations("Pricing");
    return (
        <section className=" py-10 md:py-12 bg-white">
            <Wrapper className=" flex flex-col items-center">
                <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                    <Gem />
                    <p>{t("badgeText")}</p>
                </span>
                <h1 className="mt-2 font-manrope text-4xl md:text-5xl font-bold text-center">{t("title")}</h1>
            </Wrapper>
            <PricingCards />
        </section>
    );
}

export default Pricing;