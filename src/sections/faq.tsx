import Wrapper from "@/components/common/wrapper";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Faq = () => {
    const t = useTranslations("Faq");
    return (
        <section className=" bg-white py-10 mb-12 md:py-24 md:mb-20">
            <Wrapper className="flex flex-col items-center">
                <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                    <MessageCircleQuestion />
                    <p>{t("badgeText")}</p>
                </span>
                <h1 className="mt-2 font-manrope text-4xl md:text-5xl font-bold text-center" dangerouslySetInnerHTML={{ __html: t.raw("title") }}></h1>
                <p className="text-base mt-2 text-foreground opacity-70">{t("description")}</p>
                <div className=" w-full max-w-3xl mt-8">
                    <Accordion className="flex flex-col gap-2" type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{t("q1Title")}</AccordionTrigger>
                            <AccordionContent>
                                {t("q1Answer")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>{t("q2Title")}</AccordionTrigger>
                            <AccordionContent>
                                {t("q2Answer")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>{t("q3Title")}</AccordionTrigger>
                            <AccordionContent>
                                {t("q3Answer")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>{t("q4Title")}</AccordionTrigger>
                            <AccordionContent>
                                {t("q4Answer")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>{t("q5Title")}</AccordionTrigger>
                            <AccordionContent>
                                {t("q5Answer")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>{t("q6Title")}</AccordionTrigger>
                            <AccordionContent>
                                {t("q6Answer")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>{t("q7Title")}</AccordionTrigger>
                            <AccordionContent>
                                {t("q7Answer")}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className=" w-full border border-black/5 rounded-xl mt-2 py-3 px-4 flex flex-col md:flex-row items-start md:items-center md:justify-between">
                        <div className=" flex flex-col items-start md:gap-2">
                            <h4 className=" font-medium text-base md:text-lg">{t("stillHaveQuestionsTitle")}</h4>
                            <p className=" text-sm md:text-base text-foreground opacity-70">{t("stillHaveQuestionsDescription")}</p>
                        </div>
                        <Link href="/custom-solutions">
                            <Button className=" mt-4 md:mt-0">{t("contactUsButton")} <ArrowRight /></Button>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Faq;