"use client"

import Link from "next/link"
import * as React from "react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"


export function NavGroup() {
    const t = useTranslations("Header");

    return (
        <NavigationMenu className=" lg:ml-40" viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("product")}</NavigationMenuTrigger>
                    <NavigationMenuContent className=" -ml-36 p-4">
                        <ul className="grid grid-cols-2 gap-4 md:w-[400px] lg:w-[780px]">
                            <div className="flex flex-col gap-2">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">{t("features")}</span>
                                <div>
                                    <ListItem href="/" title={t("feature1Title")} icon="/assets/feature-1.svg" iconActive="/assets/feature-1-active.svg">
                                        {t("feature1Description")}
                                    </ListItem>
                                    <ListItem href="/" title={t("feature2Title")} icon="/assets/feature-2.svg" iconActive="/assets/feature-2-active.svg">
                                        {t("feature2Description")}
                                    </ListItem>
                                    <ListItem href="/" title={t("feature3Title")} icon="/assets/feature-3.svg" iconActive="/assets/feature-3-active.svg">
                                        {t("feature3Description")}
                                    </ListItem>
                                    <ListItem href="/" title={t("feature4Title")} icon="/assets/feature-4.svg" iconActive="/assets/feature-4-active.svg">
                                        {t("feature4Description")}
                                    </ListItem>
                                </div>

                            </div>

                            <li className="">
                                <div className=" bg-accent rounded-lg w-full h-full p-3">
                                    <h6 className=" text-[15px] font-medium ">{t("updateTitle")}</h6>
                                    <p className=" text-sm">{t("updateDescription")}</p>
                                    <div className=" relative w-full h-[12rem] my-3">
                                        <Image fill src="/assets/qr-update.png" className=" rounded-lg object-cover" alt={t("qrUpdateAlt")} quality={100} />
                                    </div>
                                    <Link href="/changelog">
                                        <Button className=" px-0 md:px-0 has-[>svg]:pl-0 has-[>svg]:pr-0" variant="ghost">{t("updateVersionButton")} <ArrowUpRight /></Button>
                                    </Link>
                                </div>
                            </li>
                            <div className=" col-span-2 mb-1">
                                <Separator orientation="horizontal" className=" w-full" />

                                <div className="flex flex-row items-center justify-between w-full mt-4">
                                    <div className=" flex flex-col items-start">
                                        <h6 className=" text-[15px] font-medium">{t("unlockFutureTitle")}</h6>
                                        <p className=" text-sm text-foreground opacity-70">
                                            {t.rich("unlockFutureDescription", {
                                                br: () => <br />
                                            })}
                                        </p>
                                    </div>
                                    <Link href="/demo">
                                        <Button>{t("getDemoButton")}</Button>
                                    </Link>
                                </div>
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/pricing">{t("pricing")}</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("useCases")}</NavigationMenuTrigger>
                    <NavigationMenuContent className=" -ml-[20rem] p-4">
                        <ul className="grid grid-cols-2 gap-4 md:w-[400px] lg:w-[780px]">
                            <div className="flex flex-col gap-2">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">{t("verticals")}</span>
                                <div>
                                    <ListItem href="/use-cases/moving-companies" title={t("useCase1Title")} icon="/assets/use-case-1.svg" iconActive="/assets/use-case-1-active.svg">
                                        {t("useCase1Description")}
                                    </ListItem>
                                    <ListItem href="/use-cases/junk-removers" title={t("useCase2Title")} icon="/assets/use-case-2.svg" iconActive="/assets/use-case-2-active.svg">
                                        {t("useCase2Description")}
                                    </ListItem>
                                    <ListItem href="/use-cases/import-management" title={t("useCase3Title")} icon="/assets/use-case-3.svg" iconActive="/assets/use-case-3-active.svg">
                                        {t("useCase3Description")}
                                    </ListItem>
                                </div>

                            </div>

                            <li className="">
                                <div className=" bg-accent rounded-lg w-full h-full p-3">
                                    <span className=" font-medium text-sm uppercase opacity-50 pt-2">{t("customerStory")}</span>
                                    <div className=" relative w-full h-[12rem] mb-3 mt-2">
                                        <Image fill src="/assets/case.png" className=" rounded-lg object-cover" alt={t("customerStoryAlt")} quality={100} />
                                    </div>
                                    <h6 className=" font-medium text-[15px] ">{t("customerStoryTitle")}</h6>
                                    <p className=" text-sm">
                                        {t("customerStoryDescription")}
                                    </p>
                                    <Link href="/customer-stories/online-movers-miami">
                                        <Button className=" text-primary px-0 md:px-0 has-[>svg]:pl-0 has-[>svg]:pr-0" variant="ghost">{t("readCustomerStoryButton")}<ArrowRight /></Button>
                                    </Link>
                                </div>
                            </li>
                            <div className=" col-span-2 mb-1">
                                <Separator orientation="horizontal" className=" w-full" />

                                <div className="flex flex-row items-center justify-between w-full mt-4">
                                    <div className=" flex flex-col items-start">
                                        <h6 className=" text-[15px] font-medium">{t("tailoredSolutionTitle")}</h6>
                                        <p className=" text-sm text-foreground opacity-70">{t("tailoredSolutionDescription")}</p>
                                    </div>
                                    <Link href="/demo">
                                        <Button>{t("talkToSalesButton")}</Button>
                                    </Link>
                                </div>
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/#about">{t("aboutUs")}</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("resources")}</NavigationMenuTrigger>
                    <NavigationMenuContent className=" -ml-[34rem] p-4">
                        <ul className="grid grid-cols-2 gap-4 md:w-[400px] lg:w-[780px]">
                            <div className="flex flex-col gap-2">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">{t("resources")}</span>
                                <div>
                                    <ListItem href="/customer-stories" title={t("resource1Title")} icon="/assets/resource-1.svg" iconActive="/assets/resource-1-active.svg">
                                        {t("resource1Description")}
                                    </ListItem>
                                    <ListItem href="/demo" title={t("resource2Title")} icon="/assets/resource-2.svg" iconActive="/assets/resource-2-active.svg">
                                        {t("resource2Description")}
                                    </ListItem>
                                    <ListItem href="/faqs" title={t("resource3Title")} icon="/assets/resource-3.svg" iconActive="/assets/resource-3-active.svg">
                                        {t("resource3Description")}
                                    </ListItem>
                                </div>

                            </div>

                            <div className="flex flex-col gap-2">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">{t("company")}</span>
                                <div>
                                    <ListItem href="/careers" title={t("resource4Title")} icon="/assets/resource-4.svg" iconActive="/assets/resource-4-active.svg">
                                        {t("resource4Description")}
                                    </ListItem>
                                    <ListItem href="/legals/privacy" title={t("resource5Title")} icon="/assets/resource-5.svg" iconActive="/assets/resource-5-active.svg">
                                        {t("resource5Description")}
                                    </ListItem>
                                    <ListItem href="/custom-solutions" title={t("resource6Title")} icon="/assets/resource-6.svg" iconActive="/assets/resource-6-active.svg">
                                        {t("resource6Description")}
                                    </ListItem>
                                </div>

                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    icon,
    iconActive,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; icon: string; iconActive: string; title: string; children: React.ReactNode }): React.JSX.Element {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <li
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <NavigationMenuLink asChild>
                <Link className=" flex flex-row items-start" href={href}>
                    <div
                        className={`h-12 w-12 aspect-square inline-flex items-center justify-center rounded-lg ${isHovered ? "bg-primary border border-primary" : "bg-white border border-black/20"
                            }`}
                    >
                        <Image priority width={26} height={26} src={isHovered ? iconActive : icon} alt={title || "Icon"} />
                    </div>
                    <div className=" ml-4">
                        <div className="text-[15px] leading-none font-medium">{title}</div>
                        <p className="text-muted-foreground line-clamp-3 mt-1 text-sm leading-snug">
                            {children}
                        </p>
                    </div>
                    <ArrowUpRight className={` shrink-0 size-5 text-primary ${isHovered ? " opacity-100" : " opacity-0"}`} />
                </Link>
            </NavigationMenuLink>
        </li>
    )
}