import ProblemCard from "@/components/common/problem-card";
import SolutionCard from "@/components/common/solution-card";
import Wrapper from "@/components/common/wrapper";
import Cta from "@/sections/cta";
import FaqMoving from "@/sections/faq-moving";
import UseCaseHero1 from "@/sections/use-case-hero-1";
import { CircleCheck, Stars } from "lucide-react";
import Image from "next/image";

const MovingCompanies = () => {
    return (
        <div>
            <UseCaseHero1 />
            <Wrapper className=" py-20">
                <div className=" w-full flex flex-col items-center max-w-7xl mx-auto">
                    <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                        <Stars />
                        <p>The Problem</p>
                    </span>
                    <h2 className="mt-2 font-manrope text-5xl font-bold text-center">Challenges</h2>

                    <div className="grid grid-cols-3 gap-6 mt-10">
                        <ProblemCard title="Challenge 1" description="Sales reps waste time manually recording inventory during walkthroughs." />
                        <ProblemCard title="Challenge 2" description="Customer-submitted photos are unstructured and often missing key items." />
                        <ProblemCard title="Challenge 3" description="CRMs don’t provide automated tools for weight/volume estimates, causing quoting delays." />
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
                        <SolutionCard title="Solution 1" description="Lexos converts rep-taken photos into structured inventory with weights/volumes in seconds." />
                        <SolutionCard title="Solution 2" description="Send a branded photo link to customers—Lexos organizes everything automatically." />
                        <SolutionCard title="Solution 3" description="Inventories instantly sync to your CRM with volume and weight, ready for quoting or dispatch." />
                    </div>
                </div>
            </Wrapper>

            <Wrapper className=" w-full flex flex-col items-center py-12">
                <div className=" max-w-7xl mx-auto flex flex-col items-center">
                    <Image width={60} height={60} src="/assets/quote.svg" alt="Quote" />
                    <h5 className=" font-medium text-3xl leading-11 text-center max-w-3xl mt-6 mb-4">Just in the 2 surveys I have done, Lexos has helped me land <span className=" bg-primary text-white">two jobs for about $20k! Not to mention the amount of admin time the software eliminates</span></h5>
                    <div className="flex items-center gap-4 mt-6">
                        <Image width={52} height={52} src="/assets/customer-1.png" className=" object-cover" alt="Lexos customer" />
                        <div className=" flex flex-col items-start gap-0">
                            <p className=" font-medium text-xl">Sara Bauman</p>
                            <span className=" font-normal text-lg text-foreground opacity-70">Insides Sales Manager @All Service Moving</span>
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
            <FaqMoving />
            <Cta />
        </div>
    );
}

export default MovingCompanies;