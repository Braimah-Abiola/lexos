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

const FaqJunkRemovers = () => {
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
                            <AccordionTrigger>Can my field team use Lexos to assess job sites?</AccordionTrigger>
                            <AccordionContent>
                                Yes. Crews can use their phones or tablets on-site to take photos, and Lexos will instantly calculate total volume and weight to help price and plan removals.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can customers take photos themselves before the job?</AccordionTrigger>
                            <AccordionContent>
                                Yes. Send them a self-survey link, and Lexos will generate the full inventory list once their photos are submitted.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>How do we get notified when a customer completes their survey?</AccordionTrigger>
                            <AccordionContent>
                                You’ll receive an alert and the job will automatically appear in your dashboard, fully itemized and ready for action.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Can we make changes if the customer’s photos miss anything?</AccordionTrigger>
                            <AccordionContent>
                                Definitely. You can edit or add items manually after the inventory is generated.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className=" w-full border border-black/5 rounded-xl mt-2 py-3 px-4 flex flex-col md:flex-row items-start md:items-center md:justify-between">
                        <div className=" flex flex-col items-start md:gap-2">
                            <h4 className=" font-medium text-lg">Still have questions?</h4>
                            <p className=" text-base text-foreground opacity-70">We understand. Let’s get in touch directly with our team, then.</p>
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

export default FaqJunkRemovers;