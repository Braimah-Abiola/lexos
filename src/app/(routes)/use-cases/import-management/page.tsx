import ProblemCard from "@/components/common/problem-card";
import SolutionCard from "@/components/common/solution-card";
import Wrapper from "@/components/common/wrapper";
import Cta from "@/sections/cta";
import FaqImportManagement from "@/sections/faq-import-management";
import UseCaseHero3 from "@/sections/use-case-hero-3";
import { CircleCheck, Stars } from "lucide-react";
import Image from "next/image";

const ImportManagement = () => {
    return (
        <div>
            <UseCaseHero3 />
            <Wrapper className=" py-20">
                <div className=" w-full flex flex-col items-center max-w-7xl mx-auto">
                    <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                        <Stars />
                        <p>The Problem</p>
                    </span>
                    <h2 className="mt-2 font-manrope text-5xl font-bold text-center">Challenges</h2>

                    <div className="grid grid-cols-3 gap-6 mt-10">
                        <ProblemCard title="Challenge 1" description="Manually cataloging imported goods is slow and error-prone." />
                        <ProblemCard title="Challenge 2" description="Shipments often lack standardized data across containers and batches." />
                        <ProblemCard title="Challenge 3" description="There’s no easy way to visually confirm what’s inside a shipment without unpacking everything." />
                    </div>
                </div>
            </Wrapper>

            <Wrapper className=" py-20">
                <div className=" w-full flex flex-col items-center max-w-7xl mx-auto">
                    <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                        <CircleCheck />
                        <p>Solution</p>
                    </span>
                    <h2 className="mt-2 font-manrope text-5xl font-bold text-center">How Lexos Solves <br /> These Challenges</h2>

                    <div className="grid grid-cols-3 gap-6 mt-10">
                        <SolutionCard title="Solution 1" description="Lexos turns container or pallet photos into categorized inventory with volume and weight data." />
                        <SolutionCard title="Solution 2" description="Group items by shipment, container, or batch using photo metadata and tagging." />
                        <SolutionCard title="Solution 3" description="Use photo-based logs to verify shipments without manual counting or breakdowns." />
                    </div>
                </div>
            </Wrapper>

            <Wrapper className=" w-full flex flex-col items-center py-12">
                <div className=" max-w-7xl mx-auto flex flex-col items-center">
                    <Image width={60} height={60} src="/assets/quote.svg" alt="Quote" />
                    <h5 className=" font-medium text-3xl leading-11 text-center max-w-3xl mt-6 mb-4">Before Lexos, logging shipments was manual and messy.<span className=" bg-primary text-white">Now we just take photos, and every item is organized by container with volume and weight included.</span></h5>
                    <div className="flex items-center gap-4 mt-6">
                        <Image width={52} height={52} src="/assets/shipping.png" className=" object-cover" alt="Lexos customer" />
                        <div className=" flex flex-col items-start gap-0">
                            <p className=" font-medium text-xl">LATAM Logistics Company</p>
                            <span className=" font-normal text-lg text-foreground opacity-70">Operations Manager</span>
                        </div>
                    </div>
                </div>
                <div className=" grid grid-cols-3 max-w-7xl mx-auto mt-20 w-full">
                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-col gap-8 border-l pl-8">
                            <p className=" font-medium text-foreground text-lg">Operational Cost Reduction</p>
                            <h6 className=" font-semibold text-primary text-5xl">93%</h6>
                        </div>
                        <span className="text-[15px] text-foreground opacity-70">Average reduction in operational costs for <br /> clients, driven by optimized inventory.</span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-col gap-8 border-l pl-8">
                            <p className=" font-medium text-foreground text-lg">Time Saved</p>
                            <h6 className=" font-semibold text-primary text-5xl">800 +</h6>
                        </div>
                        <span className="text-[15px] text-foreground opacity-70">Cumulative hours saved by clients each year <br /> through automated inventory processes.</span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className=" flex flex-col gap-8 border-l pl-8">
                            <p className=" font-medium text-foreground text-lg">Items Processed</p>
                            <h6 className=" font-semibold text-primary text-5xl">1M+</h6>
                        </div>
                        <span className="text-[15px] text-foreground opacity-70">AI-processed items, delivering unparalleled <br /> accuracy and detail for every inventory.</span>
                    </div>
                </div>
            </Wrapper>
            <FaqImportManagement />
            <Cta />
        </div>
    );
}

export default ImportManagement;