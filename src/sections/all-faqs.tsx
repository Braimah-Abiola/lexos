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

const faqCategories = ["General", "Account & Technical", "For Moving Companies", "Other"];

interface FaqItem {
    id: string;
    question: string;
    answer: string;
    category: string;
}

const allFaqData: FaqItem[] = [
    {
        id: "item-1",
        question: "Can I do a virtual walkthrough on my computer?",
        answer: "Yes, you can do a virtual walkthrough on your computer, except instead of taking photos you will have to upload them. We recommend using your phone for an added level of convenience.",
        category: "General",
    },
    {
        id: "item-2",
        question: "Can I edit my inventory after it generates?",
        answer: "You can edit or delete any specific item by clicking 'Edit' on the 'View Inventory' page and scrolling down to the item you wish to modify.",
        category: "General",
    },
    {
        id: "item-3",
        question: "How do I join a Guided Survey with my customer?",
        answer: "When you start a new inventory from your Dashboard, you can either schedule a Guided Survey or begin one immediately. If you choose to start it right away, a link to join the survey call will appear in the confirmation pop-up. If you schedule it for later, you'll receive a calendar invite by email with the call details.",
        category: "For Moving Companies",
    },
    {
        id: "item-4",
        question: "If I send a 'Self-Survey' to one of my customers, how will I know if they have completed the walkthrough?",
        answer: "You'll receive an email notification whenever a new inventory is completed in your dashboard.",
        category: "For Moving Companies",
    },
    {
        id: "item-5",
        question: "What are the system requirements for Lexos?",
        answer: "Lexos is a web-based application and works on most modern browsers. For the mobile app, you'll need iOS 13 or Android 7.0 and above.",
        category: "Account & Technical",
    },
    {
        id: "item-6",
        question: "How is my data secured?",
        answer: "We use industry-standard encryption and security protocols to protect your data. All data is stored securely on cloud servers.",
        category: "Account & Technical",
    },
    {
        id: "item-7",
        question: "Do you offer a free trial?",
        answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started.",
        category: "Other",
    },
    {
        id: "item-8",
        question: "What is Lexos?",
        answer: "Lexos is a photo-based inventory automation platform. Whether you're managing a move, clearing out junk, or importing goods, Lexos turns photos into instant inventory lists with weight and volume data—synced directly to your workflow.",
        category: "General",
    },
    {
        id: "item-9",
        question: "How are inventories created?",
        answer: "You or your customers take photos—Lexos handles the rest. Upload images internally or send a branded link to customers so they can complete it themselves.",
        category: "General",
    },
    {
        id: "item-10",
        question: "Do I need to download an app?",
        answer: "No. Lexos works entirely in the browser. You and your customers can use any device—desktop or mobile—to submit photos or view inventories.",
        category: "Account & Technical",
    },
    {
        id: "item-11",
        question: "Can I make edits after the inventory is created?",
        answer: "Yes. You can adjust weights, volumes, or item names directly in the dashboard.",
        category: "General",
    },
    {
        id: "item-12",
        question: "Can Lexos integrate directly into our website?",
        answer: "Yes. Lexos can be embedded into your website so customers can complete photo-based inventories without ever leaving your site. It’s fully branded, seamless, and designed to match your workflow.",
        category: "For Moving Companies",
    },
    {
        id: "item-13",
        question: "What CRMs or systems does Lexos work with?",
        answer: "Lexos can integrate with many CRMs and logistics systems via CSV, API, or custom mapping. We tailor integrations to your team’s workflow.",
        category: "For Moving Companies",
    },
    {
        id: "item-14",
        question: "Will I be notified when a customer submits an inventory?",
        answer: "Yes. As soon as a customer completes a photo walkthrough, you’ll receive an email alert and the inventory will appear in your dashboard.",
        category: "For Moving Companies",
    },
];
const AllFaq = () => {
    const [activeCategory, setActiveCategory] = useState<string>(faqCategories[0]);

    const filteredFaqs =
        activeCategory === "General"
            ? allFaqData
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
                            No FAQs found for this category.
                        </p>
                    )}
                    <div className=" w-full bg-white border border-black/5 rounded-xl mt-2 py-4 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className=" flex flex-col items-start md:items-start md:gap-1 text-center md:text-left">
                            <h4 className=" font-medium text-lg">Still have questions?</h4>
                            <p className=" text-base text-foreground opacity-70 text-start">We understand. Let’s get in touch directly with our team, then.</p>
                        </div>
                        <Link href="/demo">
                            <Button className=" mt-4 md:mt-0">Contact Us <ArrowRight /></Button>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default AllFaq;