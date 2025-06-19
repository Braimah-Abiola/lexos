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
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

interface FaqItem {
    id: string;
    question: string;
    answer: string;
    category: string;
}

const AllFaq = () => {
    const tAllFaqs = useTranslations("AllFaqs");
    const tFaqMoving = useTranslations("FaqMoving");
    const tFaqJunkRemovers = useTranslations("FaqJunkRemovers");
    const tFaqImportManagement = useTranslations("FaqImportManagement");
    const tFaqLanding = useTranslations("Faq"); // Landing page FAQs

    const faqCategories = [
        tAllFaqs("categoryMovers"),
        tAllFaqs("categoryJunkRemovers"),
        tAllFaqs("categoryImporters"),
        tAllFaqs("categoryOther"),
    ];

    const allFaqData: FaqItem[] = [
        // Movers FAQs (from FaqMoving namespace)
        { id: "movers-1", question: tFaqMoving("q1"), answer: tFaqMoving("a1"), category: tAllFaqs("categoryMovers") },
        { id: "movers-2", question: tFaqMoving("q2"), answer: tFaqMoving("a2"), category: tAllFaqs("categoryMovers") },
        { id: "movers-3", question: tFaqMoving("q3"), answer: tFaqMoving("a3"), category: tAllFaqs("categoryMovers") },
        { id: "movers-4", question: tFaqMoving("q4"), answer: tFaqMoving("a4"), category: tAllFaqs("categoryMovers") },

        // Junk Removers FAQs (from FaqJunkRemovers namespace)
        { id: "junk-1", question: tFaqJunkRemovers("q1"), answer: tFaqJunkRemovers("a1"), category: tAllFaqs("categoryJunkRemovers") },
        { id: "junk-2", question: tFaqJunkRemovers("q2"), answer: tFaqJunkRemovers("a2"), category: tAllFaqs("categoryJunkRemovers") },
        { id: "junk-3", question: tFaqJunkRemovers("q3"), answer: tFaqJunkRemovers("a3"), category: tAllFaqs("categoryJunkRemovers") },
        { id: "junk-4", question: tFaqJunkRemovers("q4"), answer: tFaqJunkRemovers("a4"), category: tAllFaqs("categoryJunkRemovers") },

        // Importers FAQs (from FaqImportManagement namespace)
        { id: "importers-1", question: tFaqImportManagement("q1"), answer: tFaqImportManagement("a1"), category: tAllFaqs("categoryImporters") },
        { id: "importers-2", question: tFaqImportManagement("q2"), answer: tFaqImportManagement("a2"), category: tAllFaqs("categoryImporters") },
        { id: "importers-3", question: tFaqImportManagement("q3"), answer: tFaqImportManagement("a3"), category: tAllFaqs("categoryImporters") },
        { id: "importers-4", question: tFaqImportManagement("q4"), answer: tFaqImportManagement("a4"), category: tAllFaqs("categoryImporters") },

        // Other FAQs (from Faq namespace q1-q6, then dataSecured Q&A)
        { id: "other-1", question: tFaqLanding("q1Title"), answer: tFaqLanding("q1Answer"), category: tAllFaqs("categoryOther") },
        { id: "other-2", question: tFaqLanding("q2Title"), answer: tFaqLanding("q2Answer"), category: tAllFaqs("categoryOther") },
        { id: "other-3", question: tFaqLanding("q3Title"), answer: tFaqLanding("q3Answer"), category: tAllFaqs("categoryOther") },
        { id: "other-4", question: tFaqLanding("q4Title"), answer: tFaqLanding("q4Answer"), category: tAllFaqs("categoryOther") },
        { id: "other-5", question: tFaqLanding("q5Title"), answer: tFaqLanding("q5Answer"), category: tAllFaqs("categoryOther") },
        { id: "other-6", question: tFaqLanding("q6Title"), answer: tFaqLanding("q6Answer"), category: tAllFaqs("categoryOther") },
        { id: "other-7", question: tAllFaqs("dataSecuredQuestion"), answer: tAllFaqs("dataSecuredAnswer"), category: tAllFaqs("categoryOther") },
    ];

    const [activeCategory, setActiveCategory] = useState<string>(faqCategories[0]);

    const filteredFaqs = allFaqData.filter(
        (faq) => faq.category === activeCategory
    );

    return (
        <section className=" mt-8 relative z-20 mb-40 w-full">
            <Wrapper className="flex flex-col items-center w-full">
                <div className="mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 w-full">
                    {faqCategories.map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "rounded-full px-4 py-2 text-sm md:text-base md:px-6 md:py-2.5",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                    : "bg-white text-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className=" w-full max-w-2xl">
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
                            {tAllFaqs("noFaqsFound")}
                        </p>
                    )}
                    <div className=" w-full bg-white border border-black/5 rounded-xl mt-2 py-4 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className=" flex flex-col items-start md:items-start md:gap-1 text-center md:text-left">
                            <h4 className=" font-medium text-lg">{tAllFaqs("stillHaveQuestionsTitle")}</h4>
                            <p className=" text-base text-foreground opacity-70 text-start">{tAllFaqs("stillHaveQuestionsDescription")}</p>
                        </div>
                        <Link href="/custom-solutions" target="_blank" rel="noopener noreferrer">
                            <Button className=" w-full md:w-auto mt-4 md:mt-0">{tAllFaqs("contactUsButton")} <ArrowRight /></Button>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default AllFaq;