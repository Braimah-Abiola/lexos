"use client";

import LocaleSwitcher from "@/components/common/locale-switcher";
import MobileNavigation from "@/components/common/mobile-navigation";
import { NavGroup } from "@/components/common/nav-group";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const t = useTranslations("Header");

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
                    <LocaleSwitcher />
                    <span className="hidden md:block h-5">
                        <Separator orientation="vertical" className="h-full bg-black opacity-20" />
                    </span>
                    <div className=" inline-flex gap-2 z-50 mr-2">
                        <Link href="/login">
                            <Button variant="ghost">
                                {t("signIn")}
                            </Button>
                        </Link>
                        <Link href="/demo">
                            <Button className=" group has-[>svg]:pr-5 md:has-[>svg]:pr-3">
                                {t("join")}
                                <ArrowUpRight className=" hidden md:block group-hover:rotate-45 ease-in-out duration-300 transition-transform" /></Button>
                        </Link>
                    </div>
                    <MobileNavigation />
                </aside>
            </Wrapper>
        </motion.header>
    );
}

export default Navigation;