import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    const t = useTranslations("Cta");
    return (
        <section className=" w-full bg-gradient-to-b from-white to-[#E8E2FF]">
            <Wrapper>
                <div className=" w-full flex flex-col items-center z-10 relative">
                    <Image width={60} height={60} src="/assets/logo-icon.svg" quality={100} alt={t("logoAlt")} />
                    <h1 className=" mt-6 md:mt-2 font-manrope text-4xl md:text-5xl md:leading-[60px] font-bold text-center">
                        {t("titlePart1")} <br />
                        <span className=" relative ml-2 pl-2 pr-2">
                            {t("titlePart2")}
                            <div className=" bg-primary/40 border-2 border-primary -z-1 absolute inset-0 hidden md:block">
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -left-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -top-[5px] -right-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -left-[5px]" />
                                <div className=" h-2 w-2 aspect-square rotate-45 flex-nowrap bg-primary absolute -bottom-[5px] -right-[5px]" />
                            </div>
                        </span>{" "}
                    </h1>
                    <p className=" text-base max-w-[42ch] text-foreground opacity-70 text-center mt-2">{t("description")}</p>

                    <Link href="/demo">
                        <Button className=" mt-6">{t("getStartedButton")}</Button>
                    </Link>

                </div>
            </Wrapper>
            <div className=" w-full h-[20rem] md:h-[38rem] relative -mt-12 md:-mt-40 z-1">
                <Image fill quality={100} src="/assets/cta-img.png" className=" object-cover md:object-contain" alt={t("imageAlt")} />
            </div>
        </section>
    );
}

export default Cta;