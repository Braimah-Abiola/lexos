import Image from "next/image";

const CustomerStoryDetails = () => {
    return (
        <section id="case" className=" md:py-20 md:max-w-3xl mx-auto flex flex-col items-start px-4 md:px-0">
            <h4 className=" font-semibold text-xl md:text-2xl mb-4 md:mb-6">Case Study</h4>
            <p className=" text-base md:text-lg font-normal text-foreground">
                Online Movers Miami has built a strong reputation for high-quality service across South Florida. But as demand surged, CEO Saady Bijani noticed their internal operations were slowing them down.
            </p>

            <div className=" border-l-[2px] border-l-primary my-4">
                <p className=" text-base md:text-lg font-normal pl-4 text-primary">
                    “Our reps were spending way too much time chasing down photos and writing up inventory lists. It was eating into time we should’ve been quoting and closing jobs,” Saady said.

                </p>
            </div>

            <p className=" text-base md:text-lg font-normal text-foreground">
                That’s when they implemented Lexos.
            </p>

            <p className=" text-base md:text-lg font-normal text-foreground">
                By using Lexos’ AI-powered inventory automation, the team could now take photos on-site—or send a branded link for the customer to upload them. Within minutes, a complete, itemized inventory (with volume and weight) was generated and synced to their CRM.
            </p>

            <div className=" w-full relative h-[16rem] md:h-[28rem] my-4 md:my-6">
                <Image fill src="/assets/case-1.png" className=" rounded-xl object-cover" alt="Online Movers Miami" />
            </div>
            <div className=" border-l-[2px] border-l-primary my-4">
                <p className=" text-base md:text-lg font-normal pl-4 text-primary">
                    “Lexos just fits. The sync into our system is seamless, and it’s completely cut out the messy back-and-forth. I’d estimate we’ve cut quoting time in half.”
                    — Saady Bijani, CEO @ Online Movers Miami
                </p>
            </div>
            <p className=" text-base md:text-lg font-normal text-foreground mt-4">
                Beyond time savings, the automation has helped Online Movers Miami scale—serving more customers without adding operational overhead.
            </p>
        </section>
    );
}

export default CustomerStoryDetails;