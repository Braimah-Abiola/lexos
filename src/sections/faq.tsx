import Wrapper from "@/components/common/wrapper";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";

const Faq = () => {
    return (
        <section className=" bg-white py-10 mb-12 md:mb-0 md:py-40">
            <Wrapper className="flex flex-col items-center">
                <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                    <MessageCircleQuestion />
                    <p>FAQs</p>
                </span>
                <h1 className="mt-2 font-manrope text-4xl md:text-5xl font-bold text-center">Frequently Asked <br /> Questions</h1>
                <p className="text-base mt-2 text-foreground opacity-70">Your questions answered here.</p>
                <div className=" w-full max-w-3xl mt-8">
                    <Accordion className="flex flex-col gap-2" type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is Lexos?</AccordionTrigger>
                            <AccordionContent>
                                Lexos is a photo-based inventory automation platform. Whether you&apos;re managing a move, clearing out junk, or importing goods, Lexos turns photos into instant inventory lists with weight and volume data—synced directly to your workflow.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How are inventories created?</AccordionTrigger>
                            <AccordionContent>
                                You or your customers take photos—Lexos handles the rest. Upload images internally or send a branded link to customers so they can complete it themselves.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Do I need to download an app?</AccordionTrigger>
                            <AccordionContent>
                                No. Lexos works entirely in the browser. You and your customers can use any device—desktop or mobile—to submit photos or view inventories.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Can I make edits after the inventory is created?</AccordionTrigger>
                            <AccordionContent>
                                Yes. You can adjust weights, volumes, or item names directly in the dashboard.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Can Lexos integrate directly into our website?</AccordionTrigger>
                            <AccordionContent>
                                Yes. Lexos can be embedded into your website so customers can complete photo-based inventories without ever leaving your site. It’s fully branded, seamless, and designed to match your workflow.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>What CRMs or systems does Lexos work with?</AccordionTrigger>
                            <AccordionContent>
                                Lexos can integrate with many CRMs and logistics systems via CSV, API, or custom mapping. We tailor integrations to your team’s workflow.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>Will I be notified when a customer submits an inventory?</AccordionTrigger>
                            <AccordionContent>
                                Yes. As soon as a customer completes a photo walkthrough, you’ll receive an email alert and the inventory will appear in your dashboard.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className=" w-full border border-black/5 rounded-xl mt-2 py-3 px-4 flex flex-col md:flex-row items-start md:items-center md:justify-between">
                        <div className=" flex flex-col items-start md:gap-2">
                            <h4 className=" font-medium text-lg">Still have questions?</h4>
                            <p className=" text-base text-foreground opacity-70">We understand. Let’s get in touch directly with our team, then.</p>
                        </div>
                        <Button className=" mt-4 md:mt-0">Contact Us <ArrowRight /></Button>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Faq;