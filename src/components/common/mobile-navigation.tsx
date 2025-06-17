"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/menu-accordion";
import { ListItem } from "./list-item";

const MobileNavigation = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const t = useTranslations("MobileNavigation");
  const th = useTranslations("Header");

  const closeMobileNav = () => {
    setMobileNav(false);
  };

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="sticky top-0 inset-x-0 p-0 lg:hidden">
      <nav className="mx-auto">
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex items-end flex-col space-y-[8px] relative z-50"
          aria-label={mobileNav ? t("closeMenu") : t("openMenu")}
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 5,
              },
            }}
            className={`w-6 bg-black  rounded-full h-[2px] block`}
          ></motion.span>

          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -5,
              },
            }}
            className={`w-6 bg-black rounded-full h-[2px] block`}
          ></motion.span>
        </motion.button>

        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    y: "-100%",
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      when: "afterChildren",
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    y: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed top-0 inset-0 w-full h-[100dvh] overflow-y-scroll bg-white rounded-b-3xl flex flex-col pt-24"
              >
                <div className=" w-full bg-gradient-to-b from-white to-transparent z-10 h-28 fixed top-0" />
                <div className=" w-full container">
                  <motion.ul
                    variants={{
                      hide: {
                        y: "25%",
                        opacity: 0,
                      },
                      show: {
                        y: "0%",
                        opacity: 1,
                      },
                    }}
                    className="list-none px-4"
                  >

                    <li>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>{th("product")}</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col items-start gap-4 z-1 relative">
                              <div className="flex flex-col gap-2">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">{th("features")}</span>
                                <div className="flex flex-col gap-3">
                                  <ListItem onClick={closeMobileNav} href="/changelog" title={th("feature1Title")} icon="/assets/feature-1.svg" iconActive="/assets/feature-1-active.svg">
                                    {th("feature1Description")}
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/changelog" title={th("feature2Title")} icon="/assets/feature-2.svg" iconActive="/assets/feature-2-active.svg">
                                    {th("feature2Description")}
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/changelog" title={th("feature3Title")} icon="/assets/feature-3.svg" iconActive="/assets/feature-3-active.svg">
                                    {th("feature3Description")}
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/changelog" title={th("feature4Title")} icon="/assets/feature-4.svg" iconActive="/assets/feature-4-active.svg">
                                    {th("feature4Description")}
                                  </ListItem>
                                </div>
                              </div>
                            </div>
                            <div className=" bg-accent rounded-lg w-full h-full p-3 mt-4">
                              <h6 className=" text-[15px] font-medium ">{th("updateTitle")}</h6>
                              <p className=" text-sm">{th("updateDescription")}</p>
                              <div className=" relative w-full h-[12rem] my-3">
                                <Image fill src="/assets/qr-update.png" className=" rounded-lg object-cover" alt={th("qrUpdateAlt")} quality={100} />
                              </div>
                              <Link onClick={closeMobileNav} href="/changelog">
                                <Button className=" px-0 md:px-0 has-[>svg]:pl-0 has-[>svg]:pr-0" variant="ghost">{th("updateVersionButton")} <ArrowUpRight /></Button>
                              </Link>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>
                      <Link
                        onClick={closeMobileNav}
                        href="/pricing"
                        className="text-xl font-medium text-foreground hover:text-primary"
                      >
                        {th("pricing")}
                      </Link>
                    </li>
                    <li>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>{th("useCases")}</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col items-start gap-4 z-1 relative">
                              <div className="flex flex-col gap-2">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">{th("verticals")}</span>
                                <div className="flex flex-col gap-3">
                                  <ListItem onClick={closeMobileNav} href="/use-cases/moving-companies" title={th("useCase1Title")} icon="/assets/use-case-1.svg" iconActive="/assets/use-case-1-active.svg">
                                    {th("useCase1Description")}
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/use-cases/junk-removers" title={th("useCase2Title")} icon="/assets/use-case-2.svg" iconActive="/assets/use-case-2-active.svg">
                                    {th("useCase2Description")}
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/use-cases/import-management" title={th("useCase3Title")} icon="/assets/use-case-3.svg" iconActive="/assets/use-case-3-active.svg">
                                    {th("useCase3Description")}
                                  </ListItem>
                                </div>
                              </div>
                              <div className=" bg-accent rounded-lg w-full h-full p-3 mt-4">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">{th("customerStory")}</span>
                                <div className=" relative w-full h-[12rem] mb-3 mt-2">
                                  <Image fill src="/assets/case.png" className=" rounded-lg object-cover" alt={th("customerStoryAlt")} quality={100} />
                                </div>
                                <h6 className=" font-medium text-[15px] ">{th("customerStoryTitle")}</h6>
                                <p className=" text-sm">
                                  {th("customerStoryDescription")}
                                </p>
                                <Link onClick={closeMobileNav} href="/customer-stories/online-movers-miami">
                                  <Button className=" text-primary px-0 md:px-0 has-[>svg]:pl-0 has-[>svg]:pr-0" variant="ghost">{th("readCustomerStoryButton")}<ArrowRight /></Button>
                                </Link>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>
                      <Link
                        onClick={closeMobileNav}
                        href="/#about"
                        className="text-xl font-medium text-foreground hover:text-primary"
                      >
                        {th("aboutUs")}
                      </Link>
                    </li>

                    <li>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>{th("resources")}</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col items-start gap-4 z-1 relative">
                              <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-3">
                                  <ListItem onClick={closeMobileNav} href="/customer-stories" title={th("resource1Title")} icon="/assets/resource-1.svg" iconActive="/assets/resource-1-active.svg">
                                    {th("resource1Description")}
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/demo" title={th("resource2Title")} icon="/assets/resource-2.svg" iconActive="/assets/resource-2-active.svg">
                                    {th("resource2Description")}
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/faqs" title={th("resource3Title")} icon="/assets/resource-3.svg" iconActive="/assets/resource-3-active.svg">
                                    {th("resource3Description")}
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/careers" title={th("resource4Title")} icon="/assets/resource-4.svg" iconActive="/assets/resource-4-active.svg">
                                    {th("resource4Description")}
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/legals/privacy" title={th("resource5Title")} icon="/assets/resource-5.svg" iconActive="/assets/resource-5-active.svg">
                                    {th("resource5Description")}
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/legals/terms" title={th("resource7Title")} icon="/assets/resource-5.svg" iconActive="/assets/resource-5-active.svg">
                                    {th("resource7Description")}
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/custom-solutions" title={th("resource6Title")} icon="/assets/resource-6.svg" iconActive="/assets/resource-6-active.svg">
                                    {th("resource6Description")}
                                  </ListItem>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                  </motion.ul>

                </div>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default MobileNavigation;