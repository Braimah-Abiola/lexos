import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

const ForgotPassword = async () => {
    const t = await getTranslations("ForgotPassword");
    return (
        <section className=" relative h-[92vh]">
            <Wrapper className="px-2 md:px-6 w-full h-full flex">
                <div className=" h-full w-full relative flex flex-col items-center px-4 md:px-0 justify-center">
                    <div className=" flex flex-col items-center w-full max-w-[420px] bg-white px-6 py-10 rounded-2xl">
                        <div className=" h-12 w-12 md:h-14 md:w-14 aspect-square relative">
                            <Image fill src="/assets/logo-icon.png" quality={100} alt={t("logoAlt")} />
                        </div>
                        <h4 className=" font-manrope text-2xl font-semibold mt-4">{t("title")}</h4>
                        <p className=" text-foreground opacity-70 text-base md:text-lg text-center">{t("description")}</p>
                        <div className="w-full flex flex-col gap-2 mt-4">
                            <Input type="email" placeholder={t("emailPlaceholder")} />
                        </div>
                        <Link className=" w-full" href="/login">
                            <p className=" w-full mt-2 mb-6 text-end hover:underline hover:text-primary">{t("rememberPassword")}</p>
                        </Link>
                        <Link href="/forgot-password/verify" className=" w-full">
                            <Button className="h-11 md:text-[17px] w-full">{t("sendResetButton")}</Button>
                        </Link>
                    </div>
                    <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" rounded-t-xl object-cover object-top z-[-1]" alt={t("backgroundAlt")} />
                </div>
            </Wrapper>
        </section>
    );
}

export default ForgotPassword;