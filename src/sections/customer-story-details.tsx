import Image from "next/image";

const CustomerStoryDetails = () => {
    return (
        <section className=" md:py-20 md:max-w-3xl mx-auto flex flex-col items-start px-4 md:px-0">
            <p className=" text-base md:text-lg font-normal text-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum dolorem eius accusantium, quo suscipit dicta perferendis unde ullam et corrupti dignissimos aperiam! Ducimus, officiis nisi quae iusto quidem tempore.</p>
            <h4 className=" font-semibold text-xl md:text-2xl mt-4 md:mt-6">Here&apos;s How</h4>
            <div className=" w-full relative h-[16rem] md:h-[28rem] my-4 md:my-6">
                <Image fill src="/assets/story.png" className=" rounded-xl object-cover" alt="Olympia" />
            </div>
            <p className=" text-base md:text-lg font-normal text-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum dolorem eius accusantium, quo suscipit dicta perferendis unde ullam et corrupti dignissimos aperiam! Ducimus, officiis nisi quae iusto quidem tempore.</p>
            <p className=" text-base md:text-lg font-normal text-foreground mt-4">
                Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum. Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu.
            </p>
        </section>
    );
}

export default CustomerStoryDetails;