import Wrapper from "@/components/common/wrapper";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const FaqImportManagement = () => {
    const t = useTranslations("FaqImportManagement");
    return (
        <section className=" bg-white py-10 mb-12 md:mb-0 md:py-40">
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
                            <AccordionTrigger>{t("q1")}</AccordionTrigger>
                            <AccordionContent>
                                {t("a1")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>{t("q2")}</AccordionTrigger>
                            <AccordionContent>
                                {t("a2")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>{t("q3")}</AccordionTrigger>
                            <AccordionContent>
                                {t("a3")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>{t("q4")}</AccordionTrigger>
                            <AccordionContent>
                                {t("a4")}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className=" w-full border border-black/5 rounded-xl mt-2 py-3 px-4 flex flex-col md:flex-row items-start md:items-center md:justify-between">
                        <div className=" flex flex-col items-start md:gap-2">
                            <h4 className=" font-medium text-lg">{t("stillHaveQuestionsTitle")}</h4>
                            <p className=" text-base text-foreground opacity-70">{t("stillHaveQuestionsDescription")}</p>
                        </div>
                        <Link href="/demo">
                            <Button className=" mt-4 md:mt-0">{t("contactUsButton")} <ArrowRight /></Button>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default FaqImportManagement;