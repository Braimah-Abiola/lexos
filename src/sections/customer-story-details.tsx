import { useTranslations } from "next-intl";
import Image from "next/image";

const CustomerStoryDetails = () => {
    const t = useTranslations("CustomerStoryDetails");
    return (
        <section id="case" className=" py-20 md:py-20 md:max-w-3xl mx-auto flex flex-col items-start px-4 md:px-0">
            <h4 className=" font-semibold text-xl md:text-2xl mb-4 md:mb-6">{t("caseStudyTitle")}</h4>
            <p className=" text-base md:text-lg font-normal text-foreground">
                {t("paragraph1")}
            </p>

            <div className=" border-l-[2px] border-l-primary my-4">
                <p className=" text-base md:text-lg font-normal pl-4 text-primary">
                    {t("quote1")}
                </p>
            </div>

            <p className=" text-base md:text-lg font-normal text-foreground">
                {t("paragraph2")}
            </p>

            <p className=" text-base md:text-lg font-normal text-foreground">
                {t("paragraph3")}
            </p>

            <div className=" w-full relative h-[16rem] md:h-[28rem] my-4 md:my-6">
                <Image fill src="/assets/case-1.png" className=" rounded-xl object-cover" alt={t("image1Alt")} />
            </div>
            <div className=" border-l-[2px] border-l-primary my-4">
                <p className=" text-base md:text-lg font-normal pl-4 text-primary">
                    {t("quote2")}
                </p>
            </div>
            <p className=" text-base md:text-lg font-normal text-foreground mt-4">
                {t("paragraph4")}
            </p>
        </section>
    );
}

export default CustomerStoryDetails;