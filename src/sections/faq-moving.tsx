import Wrapper from "@/components/common/wrapper";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";

const FaqMoving = () => {
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
                            <AccordionTrigger>Can our team use Lexos to create inventories on-site?</AccordionTrigger>
                            <AccordionContent>
                                Yes. Your sales reps can take photos during in-home or virtual walkthroughs, and Lexos will automatically generate a full inventory list with volume and weight that syncs to your CRM.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can we send the inventory form to customers instead?</AccordionTrigger>
                            <AccordionContent>
                                Absolutely. You can send a branded photo link to your customer, and they can take and upload images on their own schedule. The inventory will then generate instantly and appear in your dashboard.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>How do we track if a customer has completed their walkthrough?</AccordionTrigger>
                            <AccordionContent>
                                You’ll receive an email notification as soon as a new inventory is completed by your customer, and it will be matched to their profile in your CRM.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Can we edit the inventory after it generates?</AccordionTrigger>
                            <AccordionContent>
                                Yes. Your team can modify or delete any item directly from the “View Inventory” page—whether the photos came from your reps or the customer.
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

export default FaqMoving;