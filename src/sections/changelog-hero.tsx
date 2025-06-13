import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, QrCode } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const ChangelogHero = () => {
    const t = useTranslations("ChangelogHero");
    return (
        <section className=" w-full h-screen">
            <Wrapper className="px-2 md:px-6 w-full h-full">
                <div className=" h-full w-full relative flex flex-col items-center pt-20">
                    <span className=" bg-white text-primary rounded-full pl-2 md:pl-1 py-1 pr-3 inline-flex items-center gap-2">
                        <div className=" hidden bg-primary text-white rounded-full py-1 pl-2 pr-3 md:inline-flex items-center gap-1">
                            <QrCode className=" size-5" />
                            <p className=" text-sm">{t("versionText")}</p>
                        </div>
                        <QrCode className=" md:hidden size-5" />
                        <p className=" text-foreground text-sm opacity-70">{t("featureHighlight")}</p>
                        <ArrowRight className=" text-foreground opacity-70 size-4" />
                    </span>
                    <h1 className=" mt-2 font-manrope flex gap-2 text-4xl md:text-5xl leading-[60px] font-bold text-center">
                        <span className=" hidden md:block">{t("titlePrefix")}</span> {t("title")}
                    </h1>
                    <p className=" px-8 md:px-0 max-w-[48ch] md:mt-2 text-center text-base text-foreground opacity-70">
                        {t("description")}
                    </p>
                    <aside className=" inline-flex gap-4 items-center mt-4 z-50">
                        <Link href="/demo">
                            <Button>{t("getStartedButton")}</Button>
                        </Link>
                        <Link href="/demo">
                            <Button variant="outline">{t("bookDemoButton")}</Button>
                        </Link>
                    </aside>
                    <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" opacity-80 rounded-t-xl object-cover object-top z-[-1]" alt={t("imageAlt")} />
                </div>
            </Wrapper>
        </section>
    );
}

export default ChangelogHero;