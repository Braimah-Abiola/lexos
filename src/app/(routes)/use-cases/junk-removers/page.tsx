import ProblemCard from "@/components/common/problem-card";
import SolutionCard from "@/components/common/solution-card";
import Wrapper from "@/components/common/wrapper";
import Cta from "@/sections/cta";
import FaqJunkRemovers from "@/sections/faq-junk-removers";
import UseCaseHero2 from "@/sections/use-case-hero-2";
import { CircleCheck, Stars } from "lucide-react";
import Image from "next/image";

const JunkRemovers = () => {
    return (
        <div>
            <UseCaseHero2 />
            <Wrapper className=" py-20">
                <div className=" w-full flex flex-col items-center max-w-7xl mx-auto">
                    <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                        <Stars />
                        <p>The Problem</p>
                    </span>
                    <h2 className="mt-2 font-manrope text-5xl font-bold text-center">Challenges</h2>

                    <div className="grid grid-cols-3 gap-6 mt-10">
                        <ProblemCard title="Challenge 1" description="Pricing jobs accurately is hard without visiting the site in person." />
                        <ProblemCard title="Challenge 2" description="Field crews lose time manually recording item details for pickups." />
                        <ProblemCard title="Challenge 3" description="Customers often don’t provide enough detail when scheduling jobs online." />
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
                        <SolutionCard title="Solution 1" description="Customers can upload photos pre-job via a branded Lexos link—no site visit needed." />
                        <SolutionCard title="Solution 2" description="Crews use Lexos on-site to snap photos—instantly generating inventory for records and pricing." />
                        <SolutionCard title="Solution 3" description="Lexos ensures customer-submitted images are converted into clear, complete job summaries." />
                    </div>
                </div>
            </Wrapper>

            <Wrapper className=" w-full flex flex-col items-center py-12">
                <div className=" max-w-7xl mx-auto flex flex-col items-center">
                    <Image width={60} height={60} src="/assets/quote.svg" alt="Quote" />
                    <h5 className=" font-medium text-3xl leading-11 text-center max-w-3xl mt-6 mb-4">Having a fully itemized inventory cleaned up our entire process<span className=" bg-primary text-white">—especially in an industry where everything we handle is, well, junk.</span></h5>
                    <div className="flex items-center gap-4 mt-6">
                        <Image width={52} height={52} src="/assets/lu.png" className=" object-cover" alt="Lexos customer" />
                        <div className=" flex flex-col items-start gap-0">
                            <p className=" font-medium text-xl">Lu Annatone</p>
                            <span className=" font-normal text-lg text-foreground opacity-70">Owner of The Junk Removers</span>
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
            <FaqJunkRemovers />
            <Cta />
        </div>
    );
}

export default JunkRemovers;