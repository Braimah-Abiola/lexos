import { Marquee } from "@/components/common/marquee";
import Wrapper from "@/components/common/wrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SocialProof = () => {
    const t = useTranslations("SocialProof");
    return (
        <section className=" w-full py-20">
            <Wrapper className="flex flex-col items-center">
                <h1 className="mt-2 font-manrope text-3xl md:text-4xl font-bold text-center">{t("title")}</h1>
                <p className="text-base mt-2 text-foreground opacity-70 text-center">{t("description")}</p>
            </Wrapper>
            <div className=" max-w-7xl mx-auto relative w-full flex flex-col -space-y-1.5 mt-8">
                <div className="pointer-events-none absolute z-20 inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>

                <Marquee pauseOnHover className="[--duration:30s] [--gap:0.5rem]">
                    <div className="relative h-[60px] w-[220px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/1.png" className=" object-contain" quality={50} alt="Olympia" />
                    </div>
                    <div className="relative h-[60px] w-[218px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/2.png" className=" object-contain" quality={50} alt="Gentle Gaint" />
                    </div>
                    <div className="relative h-[60px] w-[236px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/3.png" className=" object-contain" quality={50} alt="Armstrong" />
                    </div>
                    <div className="relative h-[60px] w-[140px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/4.png" className=" object-contain" quality={50} alt="Michaels Moving" />
                    </div>
                    <div className="relative h-[60px] w-[226px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/5.png" className=" object-contain" quality={50} alt="Moving Of America" />
                    </div>
                    <div className="relative h-[60px] w-[102px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/6.png" className=" object-contain" quality={50} alt="Movers Chigago" />
                    </div>
                    <div className="relative h-[60px] w-[128px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/7.png" className=" object-contain" quality={50} alt="Online Movers Miami" />
                    </div>
                    <div className="relative h-[60px] w-[176px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/8.png" className=" object-contain" quality={50} alt="NYMM" />
                    </div>
                    <div className="relative h-[60px] w-[200px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/9.png" className=" object-contain" quality={50} alt="Flash Moving" />
                    </div>
                    <div className="relative h-[60px] w-[125px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/10.png" className=" object-contain" quality={50} alt="Royal Moving & Storage" />
                    </div>
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:34s] [--gap:0.5rem]">
                    <div className="relative h-[60px] w-[164px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/11.png" className=" object-contain" quality={50} alt="All Service Moving" />
                    </div>
                    <div className="relative h-[60px] w-[168px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/12.png" className=" object-contain" quality={50} alt="We Taco" />
                    </div>
                    <div className="relative h-[60px] w-[164px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/13.png" className=" object-contain" quality={50} alt="Amanat" />
                    </div>
                    <div className="relative h-[60px] w-[180px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/14.png" className=" object-contain" quality={50} alt="The Junk Removers" />
                    </div>
                    <div className="relative h-[60px] w-[170px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/15.png" className=" object-contain" quality={50} alt="Pink Zebra" />
                    </div>
                    <div className="relative h-[60px] w-[176px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/16.png" className=" object-contain" quality={50} alt="Solidarity Movers" />
                    </div>
                    <div className="relative h-[60px] w-[120px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/17.png" className=" object-contain" quality={50} alt="Kobe" />
                    </div>
                    <div className="relative h-[60px] w-[156px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/18.png" className=" object-contain" quality={50} alt="Dyno Moving" />
                    </div>
                    <div className="relative h-[60px] w-[158px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/19.png" className=" object-contain" quality={50} alt="Best Quality Movers" />
                    </div>
                    <div className="relative h-[60px] w-[157px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/20.png" className=" object-contain" quality={50} alt="Safe Responsible Movers" />
                    </div>
                </Marquee>

                <Marquee pauseOnHover className="[--duration:36s] [--gap:0.5rem]">
                    <div className="relative h-[60px] w-[120px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/21.png" className=" object-contain" quality={50} alt="Rexton Moving & Storage" />
                    </div>
                    <div className="relative h-[60px] w-[208px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/22.png" className=" object-contain" quality={50} alt="On It Movers" />
                    </div>
                    <div className="relative h-[60px] w-[92px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/23.png" className=" object-contain" quality={50} alt="Moving Company" />
                    </div>
                    <div className="relative h-[60px] w-[252px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/24.png" className=" object-contain" quality={50} alt="Move Solutions" />
                    </div>
                    <div className="relative h-[60px] w-[130px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/25.png" className=" object-contain" quality={50} alt="Best Rate Movers Boston" />
                    </div>
                    <div className="relative h-[60px] w-[142px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/26.png" className=" object-contain" quality={50} alt="Move Mate" />
                    </div>
                    <div className="relative h-[60px] w-[126px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/27.png" className=" object-contain" quality={50} alt="Chicago Marathon Movers" />
                    </div>
                    <div className="relative h-[60px] w-[196px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/28.png" className=" object-contain" quality={50} alt="Maximoving" />
                    </div>
                    <div className="relative h-[60px] w-[112px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/29.png" className=" object-contain" quality={50} alt="GoodMove Movers" />
                    </div>
                    <div className="relative h-[60px] w-[112px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/30.png" className=" object-contain" quality={50} alt="Maple Trail Movers" />
                    </div>
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:0.5rem]">
                    <div className="relative h-[60px] w-[108px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/31.png" className=" object-contain" quality={50} alt="Best Rate Movers Boston" />
                    </div>
                    <div className="relative h-[60px] w-[186px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/32.png" className=" object-contain" quality={50} alt="Move Mate" />
                    </div>
                    <div className="relative h-[60px] w-[154px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/33.png" className=" object-contain" quality={50} alt="Chicago Marathon Movers" />
                    </div>
                    <div className="relative h-[60px] w-[210px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/34.png" className=" object-contain" quality={50} alt="Maximoving" />
                    </div>
                    <div className="relative h-[60px] w-[122px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/35.png" className=" object-contain" quality={50} alt="GoodMove Movers" />
                    </div>
                    <div className="relative h-[60px] w-[115px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/36.png" className=" object-contain" quality={50} alt="Maple Trail Movers" />
                    </div>
                    <div className="relative h-[60px] w-[210px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/37.png" className=" object-contain" quality={50} alt="Maple Trail Movers" />
                    </div>
                    <div className="relative h-[60px] w-[118px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/38.png" className=" object-contain" quality={50} alt="Maple Trail Movers" />
                    </div>
                    <div className="relative h-[60px] w-[128px]">
                        <Image fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/assets/39.png" className=" object-contain" quality={50} alt="Maple Trail Movers" />
                    </div>

                </Marquee>

                <div className="pointer-events-none absolute z-20 inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>

            </div>
        </section>
    );
}

export default SocialProof;