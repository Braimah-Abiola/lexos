import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const CustomerStoryHero = () => {
    const t = useTranslations("CustomerStoryHero");
    return (
        <section className=" py-20">
            <Wrapper className="flex flex-col md:flex-row items-start gap-8 md:gap-0 md:items-center md:max-w-[1480px]">
                <div className=" w-full">
                    <div className=" max-w-[31rem]">
                        <span className=" pl-1.5 pr-3 py-1.5 inline-flex items-center gap-2 bg-white border border-black/10 rounded-full">
                            <Image width={24} height={24} src="/assets/miami.png" alt={t("logoAlt")} />
                            <span className=" text-sm">{t("companyName")}<span className=" hidden md:inline-flex">{t("lexosSuffix")}</span></span>
                            <span className=" text-sm text-primary">{t("caseStudyBadge")}</span>
                        </span>
                        <h1 className=" mt-2 font-manrope text-4xl md:text-5xl font-bold text-start">
                            {t("title")}
                        </h1>
                        <p className=" mt-2 md:mt-4 text-foreground opacity-70 text-base">
                            {t("description")}
                        </p>
                        <Link href="/customer-stories/online-movers-miami/#case">
                            <Button className=" mt-4 md:mt-6">{t("readStoryButton")} <ArrowDown /> </Button>
                        </Link>
                    </div>
                </div>
                <div className=" w-full h-[16rem] md:h-[30rem] relative">
                    <Image fill src="/assets/case.png" className=" rounded-xl object-cover" alt={t("heroImageAlt")} />
                </div>
            </Wrapper>
            <Wrapper className="md:max-w-[1480px] mt-12 md:mt-20">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-12 w-fit mx-auto md:w-full">
                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-col gap-8 border-l pl-8">
                            <p className=" font-medium text-foreground text-lg">{t("stat1Title")}</p>
                            <h6 className=" font-semibold text-primary text-4xl md:text-5xl">{t("stat1Value")}</h6>
                        </div>
                        <span className="text-[15px] text-foreground opacity-70" dangerouslySetInnerHTML={{ __html: t.raw("stat1Description") }}></span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-col gap-8 border-l pl-8">
                            <p className=" font-medium text-foreground text-lg">{t("stat2Title")}</p>
                            <h6 className=" font-semibold text-primary text-4xl md:text-5xl">{t("stat2Value")}</h6>
                        </div>
                        <span className="text-[15px] text-foreground opacity-70" dangerouslySetInnerHTML={{ __html: t.raw("stat2Description") }}></span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-col gap-8 border-l pl-8">
                            <p className=" font-medium text-foreground text-lg">{t("stat3Title")}</p>
                            <h6 className=" font-semibold text-primary text-4xl md:text-5xl">{t("stat3Value")}</h6>
                        </div>
                        <span className="text-[15px] text-foreground opacity-70" dangerouslySetInnerHTML={{ __html: t.raw("stat3Description") }}></span>
                    </div>
                </div>
            </Wrapper>
            <Separator orientation="horizontal" className=" w-full mt-12" />
        </section>
    );
}

export default CustomerStoryHero;