"use client";

import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";

interface AnimatedStatProps {
    targetValue: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    decimals?: number;
    className?: string;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({
    targetValue,
    suffix = "",
    prefix = "",
    duration = 2,
    decimals = 0,
    className = "",
}) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        const controls = animate(0, targetValue, {
            duration,
            ease: "easeOut",
            onUpdate: (latest) => {
                setCurrentValue(parseFloat(latest.toFixed(decimals)));
            },
        });
        return () => controls.stop();
    }, [targetValue, duration, decimals]);

    return (
        <span className={className}>
            {prefix}
            {currentValue}
            {suffix}
        </span>
    );
};

const Statistics = () => {
    return (
        <section className=" w-full py-20">
            <Wrapper>
                <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-32 justify-between">
                    <div className=" flex flex-col items-center md:items-start w-full md:max-w-sm">
                        <span className=" bg-primary/10 text-primary rounded-full py-2 pl-2 pr-4 inline-flex items-center gap-2">
                            <TrendingUp />
                            <p>Statistics</p>
                        </span>
                        <h1 className="mt-2 font-manrope text-4xl md:text-5xl font-bold text-center md:text-start">Our Impact <span className=" hidden md:block">by the Numbers</span></h1>
                        <p className="text-base mt-2 text-foreground opacity-70 text-center px-8 md:px-0 md:text-start">Our proven AI technology is transforming inventory management, delivering tangible results for businesses worldwide.</p>
                        <aside className="inline-flex items-center gap-4 mt-4">
                            <Button>Case Studies <ArrowUpRight /></Button>
                            <Button variant="outline">Book Demo</Button>
                        </aside>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-12 w-fit mx-auto md:w-full">
                        <div className="flex flex-col gap-4">
                            <div className=" flex flex-col gap-8 border-l pl-8">
                                <p className=" font-medium text-foreground text-base md:text-lg">Operational Cost Reduction</p>
                                <AnimatedStat
                                    targetValue={93}
                                    suffix="%"
                                    className="font-semibold text-primary text-4xl md:text-5xl"
                                />
                            </div>
                            <span className="text-[15px] text-foreground opacity-70">Average reduction in operational costs for <br /> clients, driven by optimized inventory.</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className=" flex flex-col gap-8 border-l pl-8">
                                <p className=" font-medium text-foreground text-base md:text-lg">Time Saved</p>
                                <AnimatedStat
                                    targetValue={800}
                                    suffix=" +"
                                    className="font-semibold text-primary text-4xl md:text-5xl"
                                />
                            </div>
                            <span className="text-[15px] text-foreground opacity-70">Cumulative hours saved by clients each year <br /> through automated inventory processes.</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className=" flex flex-col gap-8 border-l pl-8">
                                <p className=" font-medium text-foreground text-base md:text-lg">Items Processed</p>
                                <AnimatedStat
                                    targetValue={1} // Animate to 1
                                    suffix="M+"    // Add "M+" as suffix
                                    className="font-semibold text-primary text-4xl md:text-5xl"
                                />
                            </div>
                            <span className="text-[15px] text-foreground opacity-70">AI-processed items, delivering unparalleled <br /> accuracy and detail for every inventory.</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className=" flex flex-col gap-8 border-l pl-8">
                                <p className=" font-medium text-foreground text-base md:text-lg">Efficiency Gain</p>
                                <AnimatedStat
                                    targetValue={75}
                                    suffix="%"
                                    className="font-semibold text-primary text-4xl md:text-5xl"
                                />
                            </div>
                            <span className="text-[15px] text-foreground opacity-70">Average time saved on inventory creation <br /> compared  to traditional manual methods.</span>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Statistics;