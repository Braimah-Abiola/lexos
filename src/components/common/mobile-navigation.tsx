"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
          aria-label={mobileNav ? "Close menu" : "Open menu"}
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
                          <AccordionTrigger>Product</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col items-start gap-4 z-1 relative">
                              <div className="flex flex-col gap-2">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">Features</span>
                                <div className="flex flex-col gap-3">
                                  <ListItem onClick={closeMobileNav} href="/" title="AI-Powered Inventory Creation" icon="/assets/feature-1.svg" iconActive="/assets/feature-1-active.svg">
                                    AI transforms photos into precise, volumetric inventories.
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/" title="Instant CRM Sync" icon="/assets/feature-2.svg" iconActive="/assets/feature-2-active.svg">
                                    Inventory data, weight, and volume sync directly to your CRM.
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/" title="Accurate Weight & Volume" icon="/assets/feature-3.svg" iconActive="/assets/feature-3-active.svg">
                                    Get precise weight and volume estimates for every item.
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/" title="Guided Surveys" icon="/assets/feature-4.svg" iconActive="/assets/feature-4-active.svg">
                                    Assist your customer on a live call as they use Lexos.
                                  </ListItem>
                                </div>
                              </div>
                            </div>
                            <div className=" bg-accent rounded-lg w-full h-full p-3 mt-4">
                              <h6 className=" text-[15px] font-medium ">We’ve just released a new update</h6>
                              <p className=" text-sm">Faster processing, enhanced accuracy, and expanded item recognition are now even more powerful with our new QR code implementation from desktop to phone.</p>
                              <div className=" relative w-full h-[12rem] my-3">
                                <Image fill src="/assets/qr-update.png" className=" rounded-lg object-cover" alt="QR Code update" quality={100} />
                              </div>
                              <Link onClick={closeMobileNav} href="/changelog">
                                <Button className=" px-0 md:px-0 has-[>svg]:pl-0 has-[>svg]:pr-0" variant="ghost">Version 1.0.2 <ArrowUpRight /></Button>
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
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Use Cases</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col items-start gap-4 z-1 relative">
                              <div className="flex flex-col gap-2">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">Verticals</span>
                                <div className="flex flex-col gap-3">
                                  <ListItem onClick={closeMobileNav} href="/use-cases/moving-companies" title="Moving Companies" icon="/assets/use-case-1.svg" iconActive="/assets/use-case-1-active.svg">
                                    Replace manual inventory with AI photos to inventory with weight, volume, and CRM sync.
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/use-cases/junk-removers" title="Junk Removers" icon="/assets/use-case-2.svg" iconActive="/assets/use-case-2-active.svg">
                                    AI transforms photos into detailed inventories with weight and volume for streamlined operations.
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/use-cases/import-management" title="Import Management" icon="/assets/use-case-3.svg" iconActive="/assets/use-case-3-active.svg">
                                    Get accurate weight and volume for imports from photos using AI, syncing to your CRM.
                                  </ListItem>
                                </div>
                              </div>
                              <div className=" bg-accent rounded-lg w-full h-full p-3 mt-4">
                                <span className=" font-medium text-sm uppercase opacity-50 pt-2">Customer Story</span>
                                <div className=" relative w-full h-[12rem] mb-3 mt-2">
                                  <Image fill src="/assets/case.png" className=" rounded-lg object-cover" alt="Customer story" quality={100} />
                                </div>
                                <h6 className=" font-medium text-[15px] ">Olympia: AI Transforms Inventory</h6>
                                <p className=" text-sm">
                                  Olympia, a leading moving company, leveraged our AI to transform photos into detailed inventories, reducing manual effort and improving data accuracy.
                                </p>
                                <Link onClick={closeMobileNav} href="/customer-stories/olympia">
                                  <Button className=" text-primary px-0 md:px-0 has-[>svg]:pl-0 has-[>svg]:pr-0" variant="ghost">Read Customer Story<ArrowRight /></Button>
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
                        About Us
                      </Link>
                    </li>

                    <li>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Resources</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col items-start gap-4 z-1 relative">
                              <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-3">
                                  <ListItem onClick={closeMobileNav} href="/customer-stories" title="Customer Stories" icon="/assets/resource-1.svg" iconActive="/assets/resource-1-active.svg">
                                    See how moving companies streamlined workflows with us.
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/demo" title="Product Demo" icon="/assets/resource-2.svg" iconActive="/assets/resource-2-active.svg">
                                    See how our core platform works in a quick demo.
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/faqs" title="FAQs" icon="/assets/resource-3.svg" iconActive="/assets/resource-3-active.svg">
                                    Find quick answers to the most common questions.
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/careers" title="Careers" icon="/assets/resource-4.svg" iconActive="/assets/resource-4-active.svg">
                                    Join our growing team & help us refine core platform.
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/legals/privacy" title="Legals" icon="/assets/resource-5.svg" iconActive="/assets/resource-5-active.svg">
                                    View our terms, privacy policy, and other legal info.
                                  </ListItem>
                                  <ListItem onClick={closeMobileNav} href="/support" title="Support" icon="/assets/resource-6.svg" iconActive="/assets/resource-6-active.svg">
                                    Need help or want to learn more? Reach out to our support team.
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
