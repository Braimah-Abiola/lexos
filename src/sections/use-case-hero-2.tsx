import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const UseCaseHero2 = () => {
    const t = useTranslations("UseCaseHero2");
    return (
        <section className=" w-full h-[80vh] relative">
            <Wrapper className=" max-w-[1480px]">
                <div className="flex flex-col items-start absolute top-1/2 -translate-y-1/2 z-20">
                    <Link href="/customer-stories/online-movers-miami">
                        <span className=" pl-1.5 pr-3 py-1.5 inline-flex items-center gap-2 bg-white border border-black/10 rounded-full">
                            <Image width={24} height={24} src="/assets/miami.png" alt={t("badgeLogoAlt")} />
                            <span className=" text-sm">{t("badgeText")}</span>
                            <ArrowRight className=" size-4" />
                        </span>
                    </Link>
                    <h1 className=" text-4xl md:text-5xl font-bold font-manrope text-white mt-2" dangerouslySetInnerHTML={{ __html: t.raw("title") }}></h1>
                    <p className=" text-base mt-2 text-white font-normal max-w-xl">
                        {t("description")}
                    </p>
                    <Link className=" mt-6" href="/demo">
                        <Button>{t("bookDemoButton")} <ArrowUpRight /></Button>
                    </Link>
                </div>
            </Wrapper>

            <div className=" w-full h-full relative">
                <Image fill src="/assets/junk-movers.png" className=" object-cover" alt={t("backgroundImageAlt")} />
            </div>
        </section>
    );
}

export default UseCaseHero2;