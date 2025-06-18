import { ChangelogDialog } from "@/components/common/changelog-dialog";
import Cta2 from "@/sections/cta-2";
import CustomerStories from "@/sections/customer-stories";
import Faq from "@/sections/faq";
import Hero from "@/sections/hero";
import Pricing from "@/sections/pricing";
import SocialProof from "@/sections/social-proof";
import Solutions from "@/sections/solutions";
import Statistics from "@/sections/statistics";
import { useTranslations } from "next-intl";

const HomePage = () => {
    const t = useTranslations("AllChangelogs");

    return (
        <main>
            <Hero />
            <SocialProof />
            <Solutions />
            <Statistics />
            <CustomerStories />
            <Pricing />
            <Faq />
            <Cta2 />
            <ChangelogDialog
                dialogId="changelog-qr-1"
                title={t("title1")}
                description={t("description1")}
                imageSrc="/assets/qr-update.png"
            />
        </main>
    );
}

export default HomePage;