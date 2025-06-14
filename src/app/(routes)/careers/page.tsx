import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import CareersHero from "@/sections/careers-hero";
import OpenPositions from "@/sections/open-positions";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Careers = () => {
    const t = useTranslations("Contact");

    return (
        <main className=" mb-40">
            <CareersHero />
            <OpenPositions />
            <div>
                <Wrapper className=" flex flex-col items-center w-full">
                    <h6 className=" text-xl font-semibold ">{t("title")}</h6>
                    <p className=" text-foreground opacity-70 mb-4 md:mt-1">{t("description")}</p>
                    <Link href="mailto:info@lexosmove.com">
                        <Button>{t("buttonText")}</Button>
                    </Link>
                </Wrapper>
            </div>
        </main>
    );
}

export default Careers;