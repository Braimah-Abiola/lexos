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

const FaqImportManagement = () => {
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
                            <AccordionTrigger>How can Lexos help with bulk import tracking?</AccordionTrigger>
                            <AccordionContent>
                                Lexos allows your team to photograph incoming shipments and automatically converts them into structured inventories, complete with weight and volume estimates.                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can Lexos track and group inventory by shipment or container?</AccordionTrigger>
                            <AccordionContent>
                                Yes. Photos and items can be grouped by lot, container, or shipment ID, making it easy to track what came in and where it needs to go.                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Can we integrate Lexos into our existing logistics or ERP tools?</AccordionTrigger>
                            <AccordionContent>
                                We offer flexible integration options, including CSV exports, API access, and custom mappings to your existing systems.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Do we need to scan barcodes or enter SKUs?</AccordionTrigger>
                            <AccordionContent>
                                Not necessarily. Lexos works off of visual input (photos), but SKUs or tags can be manually added if needed to align with your catalog or customs records.
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

export default FaqImportManagement;