"use client";

import { NavGroup } from "@/components/common/nav-group";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileNavigation from "@/components/common/mobile-navigation";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={`w-full bg-white py-3 z-[9999] sticky top-0 transition-shadow duration-200 ease-in-out ${isScrolled ? "border-b border-b-black/10" : "border-b border-b-transparent"
                }`}
        >
            <Wrapper className="flex items-center justify-between">
                <Link className=" z-50 h-10 w-[112px]" href="/">
                    <div className=" relative h-10 w-[100px] md:w-[112px]">
                        <Image fill src="/assets/logo.svg" alt="Lexos logo" className="object-contain" quality={100} />
                    </div>
                </Link>
                <nav className=" w-full hidden md:inline-flex items-center justify-center">
                    <NavGroup />
                </nav>
                <aside className="flex items-center gap-2 md:gap-4">
                    <div className="shrink-0 flex-nowrap hidden md:inline-flex items-center gap-1 md:gap-2">
                        <Image height={24} width={24} src="/assets/us-flag.svg" className=" object-cover" alt="Us flag" quality={100} />
                        <ChevronDown className=" size-4 text-foreground" />
                    </div>
                    <span className="hidden md:block h-5">
                        <Separator orientation="vertical" className="h-full bg-black opacity-20" />
                    </span>
                    <div className=" inline-flex gap-2 z-50 mr-2">
                        <Button variant="ghost">Sign In</Button>
                        <Button className="has-[>svg]:pr-5 md:has-[>svg]:pr-3">Join Lexos <ArrowUpRight className=" hidden md:block" /></Button>
                    </div>
                    <MobileNavigation />
                </aside>
            </Wrapper>
        </motion.header>
    );
}

export default Navigation;