import ProblemCard from "@/components/common/problem-card";
import SolutionCard from "@/components/common/solution-card";
import Wrapper from "@/components/common/wrapper";
import Cta from "@/sections/cta";
import FaqJunkRemovers from "@/sections/faq-junk-removers";
import UseCaseHero2 from "@/sections/use-case-hero-2";
import { CircleCheck, Stars } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const JunkRemovers = () => {
    const t = useTranslations("JunkRemovers");
    return (
        <div>
            <UseCaseHero2 />
            <Wrapper className=" py-20">
                <div className=" w-full flex flex-col items-center max-w-7xl mx-auto">
                    <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                        <Stars />
                        <p>{t("problemBadgeText")}</p>
                    </span>
                    <h2 className="mt-2 font-manrope text-5xl font-bold text-center">{t("challengesTitle")}</h2>

                    <div className="grid grid-cols-3 gap-6 mt-10">
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
                    <h2 className="mt-2 font-manrope text-5xl font-bold text-center" dangerouslySetInnerHTML={{ __html: t.raw("solutionTitle") }}></h2>

                    <div className="grid grid-cols-3 gap-6 mt-10">
                        <SolutionCard title={t("solution1Title")} description={t("solution1Description")} />
                        <SolutionCard title={t("solution2Title")} description={t("solution2Description")} />
                        <SolutionCard title={t("solution3Title")} description={t("solution3Description")} />
                    </div>
                </div>
            </Wrapper>

            <Wrapper className=" w-full flex flex-col items-center py-12">
                <div className=" max-w-7xl mx-auto flex flex-col items-center">
                    <Image width={60} height={60} src="/assets/quote.svg" alt={t("quoteImageAlt")} />
                    <h5 className=" font-medium text-3xl leading-11 text-center max-w-3xl mt-6 mb-4" dangerouslySetInnerHTML={{ __html: t.raw("testimonialText") }}></h5>
                    <div className="flex items-center gap-4 mt-6">
                        <Image width={52} height={52} src="/assets/lu.png" className=" object-cover" alt={t("customerImageAlt")} />
                        <div className=" flex flex-col items-start gap-0">
                            <p className=" font-medium text-xl">{t("customerName")}</p>
                            <span className=" font-normal text-lg text-foreground opacity-70">{t("customerRole")}</span>
                        </div>
                    </div>
                </div>
                <div className=" grid grid-cols-3 max-w-7xl mx-auto mt-20 w-full">
                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-col gap-8 border-l pl-8">
                            <p className=" font-medium text-foreground text-lg">{t("stat1Title")}</p>
                            <h6 className=" font-semibold text-primary text-5xl">{t("stat1Value")}</h6>
                        </div>
                        <span className="text-[15px] text-foreground opacity-70" dangerouslySetInnerHTML={{ __html: t.raw("stat1Description") }}></span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-col gap-8 border-l pl-8">
                            <p className=" font-medium text-foreground text-lg">{t("stat2Title")}</p>
                            <h6 className=" font-semibold text-primary text-5xl">{t("stat2Value")}</h6>
                        </div>
                        <span className="text-[15px] text-foreground opacity-70" dangerouslySetInnerHTML={{ __html: t.raw("stat2Description") }}></span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-col gap-8 border-l pl-8">
                            <p className=" font-medium text-foreground text-lg">{t("stat3Title")}</p>
                            <h6 className=" font-semibold text-primary text-5xl">{t("stat3Value")}</h6>
                        </div>
                        <span className="text-[15px] text-foreground opacity-70" dangerouslySetInnerHTML={{ __html: t.raw("stat3Description") }}></span>
                    </div>
                </div>
            </Wrapper>
            <FaqJunkRemovers />
            <Cta />
        </div>
    );
}

export default JunkRemovers;