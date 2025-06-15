import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const t = useTranslations("Footer");
    return (
        <section className=" bg-primary pt-8 pb-8">
            <Wrapper className="flex flex-col">
                <div className=" w-full flex items-center justify-between">
                    <div className=" relative h-10 w-[112px]">
                        <Image fill src="/assets/logo-white.svg" alt={t("logoAlt")} className="object-contain" quality={100} />
                    </div>

                    <aside className="inline-flex gap-3 text-sm">
                        <Link href="/demo">
                            <Button variant="ghost" className=" text-white/70 hover:text-white hover:bg-transparent hover:underline">{t("signInButton")}</Button>
                        </Link>
                        <Link href="/demo">
                            <Button className=" bg-white hover:bg-white text-primary hover:text-primary">{t("signUpButton")} <ArrowUpRight /></Button>
                        </Link>
                    </aside>
                </div>
                <Separator orientation="horizontal" className=" mt-8 opacity-20 w-full bg-white" />
                <div className=" w-full flex flex-col md:flex-row items-start gap-8 md:gap-20 mt-12">
                    <div className="flex flex-col gap-4 text-white md:max-w-[320px]">
                        <span className=" text-base font-medium">{t("mailingListTitle")}</span>
                        <div className="flex flex-col gap-3 text-sm">
                            <p>{t("mailingListDescription")}</p>
                        </div>

                        <div className=" relative w-full">
                            <Input className=" bg-white border-0 text-black placeholder:text-black/70 rounded-full h-11 w-full" placeholder={t("emailPlaceholder")} />
                            <Button className=" absolute top-1/2 -translate-y-1/2 right-1">{t("subscribeButton")}</Button>
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 md:grid-cols-5 gap-6 w-full">


                        <div className="flex flex-col col-span-2 md:col-span-1 gap-4 text-white">
                            <span className=" text-base font-medium">{t("productTitle")}</span>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link href="">
                                    <p>{t("productFeature1")}</p>
                                </Link>
                                <Link href="">
                                    <p>{t("productFeature2")}</p>
                                </Link>
                                <Link href="">
                                    <p>{t("productFeature3")}</p>
                                </Link>
                                <Link href="">
                                    <p>{t("productFeature4")}</p>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 text-white">
                            <span className=" text-base font-medium">{t("companyTitle")}</span>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link href="/#about">
                                    <p>{t("companyLink1")}</p>
                                </Link>
                                <Link href="/pricing">
                                    <p>{t("companyLink2")}</p>
                                </Link>
                                <Link href="/careers">
                                    <p>{t("companyLink3")}</p>
                                </Link>
                                <Link href="/faqs">
                                    <p>{t("companyLink4")}</p>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 text-white">
                            <span className=" text-base font-medium">{t("useCasesTitle")}</span>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link href="/use-cases/moving-companies">
                                    <p>{t("useCaseLink1")}</p>
                                </Link>
                                <Link href="/use-cases/junk-removers">
                                    <p>{t("useCaseLink2")}</p>
                                </Link>
                                <Link href="use-cases/import-management">
                                    <p>{t("useCaseLink3")}</p>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 text-white">
                            <span className=" text-base font-medium">{t("resourcesTitle")}</span>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link href="/changelog">
                                    <p>{t("resourceLink1")}</p>
                                </Link>
                                <Link href="/login">
                                    <p>{t("resourceLink2")}</p>
                                </Link>
                                <Link href="/demo">
                                    <p>{t("resourceLink3")}</p>
                                </Link>
                                <Link href="tel:+6174987863">
                                    <p>{t("resourceLink4")}</p>
                                </Link>
                                <Link href="mailto:info@lexosmove.com">
                                    <p>info@lexosmove.com</p>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 text-white">
                            <span className=" text-base font-medium">{t("legalsTitle")}</span>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link href="/legals/privacy">
                                    <p>{t("legalLink1")}</p>
                                </Link>
                                <Link href="/legals/terms">
                                    <p>{t("legalLink2")}</p>
                                </Link>
                            </div>
                        </div>

                        <div className=" md:hidden flex flex-col gap-4 text-white">
                            <span className=" text-base font-medium">{t("socialsTitle")}</span>
                            <div className="flex md:flex-wrap gap-4">
                                <Link href="https://www.linkedin.com/company/lexosmove/">
                                    <div className=" h-11 w-11 flex items-center justify-center aspect-square rounded-full bg-white text-primary">
                                        <FaLinkedin size={20} />
                                    </div>
                                </Link>
                                <Link href="https://www.instagram.com/lexosmove">
                                    <div className=" h-11 w-11 flex items-center justify-center aspect-square rounded-full bg-white text-primary">
                                        <FaInstagram size={20} />
                                    </div>
                                </Link>
                                <Link href="https://www.facebook.com/profile.php?id=61566701220718">
                                    <div className=" h-11 w-11 flex items-center justify-center aspect-square rounded-full bg-white text-primary">
                                        <FaFacebook size={20} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Separator orientation="horizontal" className=" mt-12 mb-8 md:hidden opacity-20 w-full bg-white" />

                <div className=" w-full flex items-end justify-between md:mt-28">
                    <div className="hidden md:flex md:flex-wrap gap-4">
                        <Link href="https://www.linkedin.com/company/lexosmove/">
                            <div className=" h-11 w-11 flex items-center justify-center aspect-square rounded-full bg-white text-primary">
                                <FaLinkedin size={20} />
                            </div>
                        </Link>
                        <Link href="https://www.instagram.com/lexosmove">
                            <div className=" h-11 w-11 flex items-center justify-center aspect-square rounded-full bg-white text-primary">
                                <FaInstagram size={20} />
                            </div>
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61566701220718">
                            <div className=" h-11 w-11 flex items-center justify-center aspect-square rounded-full bg-white text-primary">
                                <FaFacebook size={20} />
                            </div>
                        </Link>
                    </div>

                    <div className="flex flex-col text-white">
                        <span className=" text-sm">{t("smarterInventoryText")}</span>
                        <Link href="/demo">
                            <div className=" inline-flex items-end gap-4">
                                <h4 className=" font-medium text-2xl">{t("scheduleDemoText")}</h4>
                                <div className=" h-11 w-11 flex items-center justify-center aspect-square rounded-full bg-white text-primary">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <Separator orientation="horizontal" className=" mt-8 md:mt-12 mb-8 opacity-20 w-full bg-white" />
                <span className=" text-sm text-white w-full text-center">{t("copyrightText")}</span>
            </Wrapper>
        </section>
    );
}

export default Footer;