import { AllChangelogs } from "@/sections/changelog";
import ChangelogHero from "@/sections/changelog-hero";
import Cta2 from "@/sections/cta-2";

const ChangelogPage = () => {
    return (
        <main>
            <ChangelogHero />
            <AllChangelogs />
            <Cta2 />
        </main>
    );
}

export default ChangelogPage;