import Wrapper from "@/components/common/wrapper";
import { MessageCircleQuestion } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FaqsHero = () => {
    const t = useTranslations("FaqsHero");
    return (
        <section className=" w-full h-screen">
            <Wrapper className="px-2 md:px-6 w-full h-full">
                <div className=" h-full w-full relative flex flex-col items-center pt-20">
                    <span className=" bg-white text-primary rounded-full pl-2 py-1.5 pr-3 inline-flex items-center gap-2">
                        <MessageCircleQuestion />
                        <p className=" text-foreground">{t("badgeText")}</p>
                    </span>
                    <h1 className=" mt-2 px-8 md:px-0 font-manrope text-4xl md:text-5xl md:leading-[60px] font-bold text-center">
                        {t("titlePart1")} <br className=" hidden md:block" /> {t("titlePart2")}
                    </h1>
                    <p className=" max-w-[48ch] mt-2 text-center text-base text-foreground opacity-70">
                        {t("description")}
                    </p>

                    <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" opacity-80 rounded-t-xl object-cover object-top z-[-1]" alt={t("imageAlt")} />
                </div>
            </Wrapper>
        </section>
    );
}

export default FaqsHero;