import ProblemCard from "@/components/common/problem-card";
import SolutionCard from "@/components/common/solution-card";
import Wrapper from "@/components/common/wrapper";
import Cta2 from "@/sections/cta-2";
import FaqImportManagement from "@/sections/faq-import-management";
import UseCaseHero3 from "@/sections/use-case-hero-3";
import { CircleCheck, Stars } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ImportManagement = () => {
    const t = useTranslations("ImportManagement");
    return (
        <div>
            <UseCaseHero3 />
            <Wrapper className=" py-20">
                <div className=" w-full flex flex-col items-center max-w-7xl mx-auto">
                    <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                        <Stars />
                        <p>{t("problemBadgeText")}</p>
                    </span>
                    <h2 className="mt-2 font-manrope text-4xl md:text-5xl font-bold text-center">{t("challengesTitle")}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10">
                        <ProblemCard title={t("challenge1Title")} description={t("challenge1Description")} />
                        <ProblemCard title={t("challenge2Title")} description={t("challenge2Description")} />
                        <ProblemCard title={t("challenge3Title")} description={t("challenge3Description")} />
                    </div>
                </div>
            </Wrapper>

            <Wrapper className=" py-20">
                <div className=" w-full flex flex-col items-center max-w-7xl mx-auto">
                    <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                        <CircleCheck />
                        <p>{t("solutionBadgeText")}</p>
                    </span>
                    <h2 className="mt-2 font-manrope text-4xl md:text-5xl font-bold text-center" dangerouslySetInnerHTML={{ __html: t.raw("solutionTitle") }}></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10">
                        <SolutionCard title={t("solution1Title")} description={t("solution1Description")} />
                        <SolutionCard title={t("solution2Title")} description={t("solution2Description")} />
                        <SolutionCard title={t("solution3Title")} description={t("solution3Description")} />
                    </div>
                </div>
            </Wrapper>

            <Wrapper className=" w-full flex flex-col items-center py-12">
                <div className=" max-w-7xl mx-auto flex flex-col items-center">
                    <Image width={60} height={60} src="/assets/quote.svg" alt={t("quoteImageAlt")} />
                    <h5 className=" font-medium text-2xl md:text-3xl leading-9 md:leading-11 text-center max-w-3xl mt-6 mb-4" dangerouslySetInnerHTML={{ __html: t.raw("testimonialText") }}></h5>
                    <div className="flex items-center gap-4 mt-6">
                        <Image width={52} height={52} src="/assets/shipping.png" className=" object-cover" alt={t("customerImageAlt")} />
                        <div className=" flex flex-col items-start gap-0">
                            <p className=" font-medium text-lg md:text-xl">{t("customerCompany")}</p>
                            <span className=" font-normal text-base md:text-lg text-foreground opacity-70">{t("customerRole")}</span>
                        </div>
                    </div>
                </div>
                <div className=" grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-3 max-w-7xl mx-auto mt-20 w-full">
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
            <FaqImportManagement />
            <Cta2 />
        </div>
    );
}

export default ImportManagement;