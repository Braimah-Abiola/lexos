"use client";

import { AuroraText } from "@/components/common/aurora";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
    const t = useTranslations("Hero");
    const particlesRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: particlesRef,
        offset: ["start end", "end start"],
    });

    const backgroundPositionY = useTransform(
        scrollYProgress,
        [0, 1],
        [-300, 300]
    );

    const heroContentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const videoVariants = {
        hidden: { scale: 0.95, opacity: 0, y: 50 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.5,
            },
        },
    };


    return (
        <section className=" relative h-fit md:h-fit">
            <Wrapper className="h-full w-full px-2 md:px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={heroContentVariants}
                    className=" pt-12 pb-4 md:pb-0 z-20 w-full flex flex-col items-center bg-gradient-to-b rounded-xl border border-input border-t-0 overflow-hidden from-white to-primary h-full relative"
                >
                    <Link href="/customer-stories/online-movers-miami">
                        <motion.div variants={itemVariants} className=" pl-1.5 pr-3 py-1.5 inline-flex items-center gap-2 bg-white border border-black/10 rounded-full">
                            <Image width={24} height={24} src="/assets/miami.png" alt={t("onlineMoversMiamiAlt")} />
                            <span className=" text-sm flex gap-1">
                                <span className=" hidden md:inline-flex">{t("onlineMoversMiamiText")}</span> {t("aiTransformsInventoryText")}
                            </span>
                            <ArrowRight className=" size-4" />
                        </motion.div>
                    </Link>
                    <motion.h1 variants={itemVariants} className=" mt-2 font-manrope text-4xl leading-10 md:text-5xl md:leading-[60px] font-bold text-center px-4 md:px-0">
                        {t("mainHeadingPart1")} <br className=" hidden md:block" /> {t("mainHeadingPart2")}{" "} <br className=" md:hidden" />
                        <AuroraText className=" relative">
                            {t("aiTechnologyText")}
                        </AuroraText>{" "}
                    </motion.h1>
                    <motion.p variants={itemVariants} className=" text-base text-foreground opacity-70 max-w-[52ch] text-center mt-2 px-6 md:px-0 hidden md:block">
                        {t.rich("subHeading", {
                            br: () => <br className=" hidden md:block" />
                        })}
                    </motion.p>
                    <motion.p variants={itemVariants} className=" text-base text-foreground opacity-70 max-w-[52ch] text-center mt-2 px-6 md:px-0  md:hidden">
                        {t.rich("subHeadingMobile", {
                            br: () => <br className=" hidden md:block" />
                        })}
                    </motion.p>
                    <motion.div variants={itemVariants} className=" inline-flex items-center gap-4 mt-4">
                        <Link href="/demo">
                            <Button>{t("getStartedButton")}</Button>
                        </Link>
                    </motion.div>
                    <motion.div variants={videoVariants} className=" mt-8 max-w-3xl xl:max-w-5xl 2xl:max-w-[920px] w-[92%] md:w-full bg-white/40 border border-white/50 backdrop-blur-3xl rounded-xl md:rounded-3xl md:rounded-b-none p-1 md:p-2 md:pb-0 h-auto aspect-video mx-auto">
                        <div className=" w-full h-full rounded-t-2xl">
                            <video
                                className="w-full h-full object-cover rounded-lg md:rounded-2xl md:rounded-b-none"
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="/assets/poster.png"
                            >
                                <source src="/assets/product-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>
                    <div className="absolute inset-0 h-full w-full -z-1 rounded-xl bg-[linear-gradient(to_right,#B2B2B2_1px,transparent_1px),linear-gradient(to_bottom,#B2B2B2_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>

                    <motion.div
                        ref={particlesRef}
                        style={{
                            backgroundImage: 'url("/assets/particles.png")',
                            backgroundPositionY,
                        }}
                        animate={{
                            backgroundPositionX: "800px",
                        }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 120,
                        }}
                        className=" w-full h-40 bottom-20 -z-1 absolute">

                    </motion.div>
                </motion.div>
            </Wrapper>
        </section>
    );
}

export default Hero;