import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./local-switcher-select";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: t("en"),
          src: "/assets/us-flag.svg",
        },
        {
          value: "es",
          label: t("es"),
          src: "/assets/spain-flag.svg",
        },
      ]}
      label={t("label")}
    />
  );
}
