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
              priority
              src="/assets/qr-update.png"
              alt={t("image1Alt")}
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
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
    <Wrapper className="w-full -mt-[65dvh] md:-mt-[76vh] mb-40">
      <div className=" max-w-6xl mx-auto">
        <Timeline data={data} />
      </div>
    </Wrapper>
  );
}