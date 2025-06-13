"use client";

import Wrapper from "@/components/common/wrapper";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface FaqItem {
    id: string;
    question: string;
    answer: string;
    category: string;
}

const AllFaq = () => {
    const t = useTranslations("AllFaqs");

    const faqCategories = [
        t("categoryGeneral"),
        t("categoryAccountTechnical"),
        t("categoryMovingCompanies"),
        t("categoryOther"),
    ];

    const allFaqData: FaqItem[] = [
        {
            id: "item-1",
            question: t("q1"),
            answer: t("a1"),
            category: t("categoryGeneral"),
        },
        {
            id: "item-2",
            question: t("q2"),
            answer: t("a2"),
            category: t("categoryGeneral"),
        },
        {
            id: "item-3",
            question: t("q3"),
            answer: t("a3"),
            category: t("categoryMovingCompanies"),
        },
        {
            id: "item-4",
            question: t("q4"),
            answer: t("a4"),
            category: t("categoryMovingCompanies"),
        },
        {
            id: "item-5",
            question: t("q5"),
            answer: t("a5"),
            category: t("categoryAccountTechnical"),
        },
        {
            id: "item-6",
            question: t("q6"),
            answer: t("a6"),
            category: t("categoryAccountTechnical"),
        },
        {
            id: "item-7",
            question: t("q7"),
            answer: t("a7"),
            category: t("categoryOther"),
        },
        {
            id: "item-8",
            question: t("q8"),
            answer: t("a8"),
            category: t("categoryGeneral"),
        },
        {
            id: "item-9",
            question: t("q9"),
            answer: t("a9"),
            category: t("categoryGeneral"),
        },
        {
            id: "item-10",
            question: t("q10"),
            answer: t("a10"),
            category: t("categoryAccountTechnical"),
        },
        {
            id: "item-11",
            question: t("q11"),
            answer: t("a11"),
            category: t("categoryGeneral"),
        },
        {
            id: "item-12",
            question: t("q12"),
            answer: t("a12"),
            category: t("categoryMovingCompanies"),
        },
        {
            id: "item-13",
            question: t("q13"),
            answer: t("a13"),
            category: t("categoryMovingCompanies"),
        },
        {
            id: "item-14",
            question: t("q14"),
            answer: t("a14"),
            category: t("categoryMovingCompanies"),
        },
    ];

    const [activeCategory, setActiveCategory] = useState<string>(faqCategories[0]);

    const filteredFaqs =
        activeCategory === t("categoryGeneral")
            ? allFaqData.filter(
                (faq) =>
                    faq.category === t("categoryGeneral") ||
                    faq.category === t("categoryAccountTechnical") ||
                    faq.category === t("categoryMovingCompanies") ||
                    faq.category === t("categoryOther")
            )
            : allFaqData.filter((faq) => faq.category === activeCategory);


    return (
        <section className=" -mt-[38rem] md:-mt-[42rem] relative z-20 mb-40">
            <Wrapper className="flex flex-col items-center">
                <div className="mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
                    {faqCategories.map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "rounded-full px-4 py-2 text-sm md:text-base md:px-6 md:py-2.5",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                    : "bg-white text-foreground hover:bg-accent hover:text-accent-foreground border-black/10"
                            )}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className=" w-full max-w-3xl">
                    {filteredFaqs.length > 0 ? (
                        <Accordion className="flex flex-col gap-2" type="single" collapsible>
                            {filteredFaqs.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ) : (
                        <p className="text-center text-foreground/70">
                            {t("noFaqsFound")}
                        </p>
                    )}
                    <div className=" w-full bg-white border border-black/5 rounded-xl mt-2 py-4 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className=" flex flex-col items-start md:items-start md:gap-1 text-center md:text-left">
                            <h4 className=" font-medium text-lg">{t("stillHaveQuestionsTitle")}</h4>
                            <p className=" text-base text-foreground opacity-70 text-start">{t("stillHaveQuestionsDescription")}</p>
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

export default AllFaq;