import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, QrCode } from "lucide-react";
import Image from "next/image";

const ChangelogHero = () => {
    return (
        <section className=" w-full h-screen">
            <Wrapper className="px-2 md:px-6 w-full h-full">
                <div className=" h-full w-full relative flex flex-col items-center pt-20">
                    <span className=" bg-white text-primary rounded-full pl-2 md:pl-1 py-1 pr-3 inline-flex items-center gap-2">
                        <div className=" hidden bg-primary text-white rounded-full py-1 pl-2 pr-3 md:inline-flex items-center gap-1">
                            <QrCode className=" size-5" />
                            <p className=" text-sm">v 1.0.2</p>
                        </div>
                        <QrCode className=" md:hidden size-5" />
                        <p className=" text-foreground text-sm opacity-70">With QR Code Implementation</p>
                        <ArrowRight className=" text-foreground opacity-70 size-4" />
                    </span>
                    <h1 className=" mt-2 font-manrope flex gap-2 text-4xl md:text-5xl leading-[60px] font-bold text-center">
                        <span className=" hidden md:block">Product</span> Changelog
                    </h1>
                    <p className=" px-8 md:px-0 max-w-[48ch] md:mt-2 text-center text-base text-foreground opacity-70">
                        Our AI transforms photos into inventories with
                        weight and volume for each item, and
                        syncs to your CRM in seconds.
                    </p>
                    <aside className=" inline-flex gap-4 items-center mt-4 z-50">
                        <Button>Get Started Now</Button>
                        <Button variant="outline">Book Demo</Button>
                    </aside>
                    <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" opacity-80 rounded-t-xl object-cover object-top z-[-1]" alt="Hero background" />
                </div>
            </Wrapper>
        </section>
    );
}

export default ChangelogHero;