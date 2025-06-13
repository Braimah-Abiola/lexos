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
              src="/assets/qr-update.png"
              alt={t("image1Alt")}
              fill
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full"
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
          <div className=" w-full h-auto aspect-video md:aspect-auto md:h-[28rem] relative">
            <Image
              src="/assets/update-2.png"
              alt={t("image2Alt")}
              fill
              className="rounded-xl object-cover border border-black/20 h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "",
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
    <Wrapper className="w-full -mt-[32rem] md:-mt-[48rem] mb-40">
      <div className=" max-w-6xl mx-auto">
        <Timeline data={data} />
      </div>
    </Wrapper>
  );
}
