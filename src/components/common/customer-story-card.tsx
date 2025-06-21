import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const CustomerStoryCard = ({ logo, detailedCase, review, name, position, picture, url }: { logo: string; detailedCase: boolean; review: string; name: string; position: string; url: string; picture: string; }) => {
    return (
        <div className=" p-6 flex flex-col overflow-clip justify-between items-start w-full max-w-[90vw] h-[21rem] md:h-[18rem] md:max-w-lg bg-accent rounded-xl border border-black/10 hover:bg-gradient-to-r from-accent to-primary/30">
            <div className=" w-full">
                <div className=" w-full flex items-center justify-between">
                    <div className=" relative w-[140px] md:w-[110px] h-[40px]">
                        <Image fill src={logo} className=" object-contain" alt={name} />
                    </div>
                    {detailedCase && (
                        <Link href={url}>
                            <Button variant="ghost" className=" text-primary hover:text-primary">Read Customer Story <ArrowRight /></Button>
                        </Link>
                    )}
                </div>
                <p className=" mt-4 md:text-lg font-normal">{review}</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
                <Image width={44} height={44} src={picture} className=" object-cover" alt={name} />
                <div className=" flex flex-col items-start gap-0">
                    <p className=" font-medium md:text-lg">{name}</p>
                    <span className=" font-normal text-sm md:text-base text-foreground opacity-70">{position}</span>
                </div>
            </div>
        </div>
    );
}

export default CustomerStoryCard;