import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Cta2 = () => {
    const t = useTranslations("Cta2");
    return (
        <section className=" h-[92vh] md:h-[72vh] overflow-hidden mb-28 rounded-2xl">
            <Wrapper className="w-full h-full overflow-hidden rounded-2xl">
                <div className=" h-full w-full relative flex flex-col md:flex-row z-10">
                    <div className=" w-full md:w-[60%] pt-12 md:pt-0">
                        <div className=" h-full flex flex-col items-center md:items-start justify-center md:pl-20 max-w-lg z-20 relative">
                            <Image width={60} height={60} src="/assets/logo-icon.png" className=" md:ml-4 scale-90 md:scale-100 h-auto aspect-square" quality={100} alt={t("logoAlt")} />
                            <h2 className=" mt-2 md:mt-4 font-manrope text-4xl md:text-5xl md:leading-[60px] font-bold text-center md:text-start">
                                <span className=" md:ml-4">{t("titlePart1")}</span> <br className=" hidden md:block" />
                                <span className=" relative md:ml-2 md:pl-2 pr-2">
                                    {t("titlePart2")}
                                    <div className=" bg-primary/40 border-2 border-primary  absolute inset-0 z-1 hidden md:block">
                                        <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -left-[5px]" />
                                        <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -right-[5px]" />
                                        <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -left-[5px]" />
                                        <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -right-[5px]" />
                                    </div>
                                </span>{" "}
                            </h2>
                            <p className=" md:ml-4 mt-2 text-base text-center md:text-start text-foreground opacity-70">{t("description")}</p>
                            <Link href="/demo">
                                <Button className=" w-fit md:ml-4 mt-4">{t("getStartedButton")} <ArrowUpRight /></Button>
                            </Link>

                            <div className=" hidden md:grid md:grid-cols-2 w-full ml-4 mt-8">
                                <div className="flex flex-col gap-2">
                                    <span className=" text-foreground opacity-70">{t("stat1Label")}</span>
                                    <h6 className=" font-semibold text-4xl text-foreground">{t("stat1Value")}</h6>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <span className=" text-foreground opacity-70 text-nowrap">{t("stat2Label")}</span>
                                    <h6 className=" font-semibold text-4xl text-foreground">{t("stat2Value")}</h6>
                                </div>

                                <div className=" inline-flex items-center -space-x-5 mt-8">
                                    <Image width={52} height={52} src="/assets/featured-1.png" className=" object-cover h-auto aspect-square" quality={50} alt={t("company1Alt")} />
                                    <Image width={52} height={52} src="/assets/featured-2.png" className=" object-cover h-auto aspect-square" quality={50} alt={t("company2Alt")} />
                                    <Image width={52} height={52} src="/assets/featured-3.png" className=" object-cover h-auto aspect-square" quality={50} alt={t("company3Alt")} />
                                    <Image width={52} height={52} src="/assets/featured-4.png" className=" object-cover h-auto aspect-square" quality={50} alt={t("company3Alt")} />
                                    <Image width={52} height={52} src="/assets/featured-5.png" className=" object-cover h-auto aspect-square" quality={50} alt={t("company3Alt")} />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-[100%] h-[48rem] relative mt-12 md:mt-0 rounded-b-2xl">
                        <Image fill src="/assets/happy-client.png" quality={75} sizes="(max-width: 768px) 100vw, 40vw" className=" object-cover object-top md:object-contain rounded-b-2xl md:rounded-b-none " alt={t("happyClientImageAlt")} />
                    </div>

                    <Image fill quality={50} priority src="/assets/cta-bg.svg" className=" overflow-clip border rounded-2xl object-cover object-top z-[-1]" alt={t("backgroundImageAlt")} />
                </div>
            </Wrapper>
        </section >
    );
}

export default Cta2;