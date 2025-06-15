import { Timeline } from "@/components/common/timeline";
import Wrapper from "@/components/common/wrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";


export function AllChangelogs() {
  const t = useTranslations("AllChangelogs");
  const data = [
    {
      title: t("date1"),
      content: (
        <div>
          <h2 className=" text-xl md:text-2xl font-semibold font-plex-sans text-foreground tracking-tight">
            {t("title1")}
          </h2>
          <p className="text-foreground/70 text-base md:mt-4 mb-8">
            {t("description1")}
          </p>
          <div className=" w-full h-auto aspect-video md:aspect-auto md:h-[28rem] relative">
            <Image
              quality={40}
              src="/assets/qr-update.png"
              alt={t("image1Alt")}
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: t("date2"),
      content: (
        <div>
          <h2 className=" text-xl md:text-2xl font-semibold font-plex-sans text-foreground tracking-tight">
            {t("title2")}
          </h2>
          <p className="text-foreground/70 text-base md:mt-4 mb-8">
            {t("description2")}
          </p>
          {/* You can add an image here if available for date2, similar to date1 */}
          {/* <div className=" w-full h-auto aspect-video md:aspect-auto md:h-[28rem] relative">
            <Image
              quality={40}
              src="/assets/your-image-for-date2.png" 
              alt={t("image2Alt")} // Make sure to add image2Alt to JSON files
              fill
              className="rounded-xl object-cover"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: t("date3"),
      content: (
        <div>
          <h2 className=" text-xl md:text-2xl font-semibold font-plex-sans text-foreground tracking-tight">
            {t("title3")}
          </h2>
          <p className="text-foreground/70 text-base md:mt-4 mb-8">
            {t("description3")}
          </p>
        </div>
      ),
    },
    {
      title: t("date4"),
      content: (
        <div>
          <h2 className=" text-xl md:text-2xl font-semibold font-plex-sans text-foreground tracking-tight">
            {t("title4")}
          </h2>
          <p className="text-foreground/70 text-base md:mt-4 mb-8">
            {t("description4")}
          </p>
        </div>
      ),
    },
    {
      title: t("date5"),
      content: (
        <div>
          <h2 className=" text-xl md:text-2xl font-semibold font-plex-sans text-foreground tracking-tight">
            {t("title5")}
          </h2>
          <p className="text-foreground/70 text-base md:mt-4 mb-8">
            {t("description5")}
          </p>
        </div>
      ),
    },
    {
      title: t("date6"),
      content: (
        <div>
          <h2 className=" text-xl md:text-2xl font-semibold font-plex-sans text-foreground tracking-tight">
            {t("title6")}
          </h2>
          <p className="text-foreground/70 text-base md:mt-4 mb-8">
            {t("description6")}
          </p>
        </div>
      ),
    },
    {
      title: "", // For the "That's all for now" item, the title in the timeline is usually empty
      content: (
        <div className=" h-fit">
          <h2 className=" text-xl md:text-2xl font-semibold font-plex-sans text-foreground tracking-tight">
            {t("thatsAllText")}
          </h2>
        </div>
      ),
    },
  ];
  return (
    <Wrapper className="w-full -mt-[65dvh] md:-mt-[76vh] mb-40">
      <div className=" max-w-6xl mx-auto">
        <Timeline data={data} />
      </div>
    </Wrapper>
  );
}