import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    const t = useTranslations("NotFound");
    return (
        <main className=" w-full h-screen flex items-center justify-center">
            <Wrapper className=" flex flex-col items-center -mt-40">
                <div className=" w-full md:w-[620px] h-[280px] relative">
                    <Image fill src="/assets/404.svg" className="object-contain" alt={t("imageAlt")} />
                </div>
                <h3 className="md:mt-12 font-manrope font-bold text-2xl md:text-3xl text-foreground">{t("title")}</h3>
                <p className=" text-base text-foreground opacity-70 max-w-sm text-center mt-2">{t("description")}</p>
                <Link href="/">
                    <Button className=" mt-4">{t("homeButton")} <ArrowUpRight /></Button>
                </Link>
            </Wrapper>
        </main>
    );
}

export default NotFound;