"use client";

import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { useTransition } from "react";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { CheckIcon, LanguagesIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string; src: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(async () => {
      await setUserLocale(locale);
      window.location.reload();
    });
  }

  return (
    <div className="relative hidden md:block">
      <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
        <Select.Trigger
          aria-label={label}
          className={clsx(
            "rounded-full p-2 transition-colors hover:bg-accent  outline-none focus:border-2 focus:border-prmiary",
            isPending && "pointer-events-none opacity-60"
          )}
        >
          <Select.Icon>
            <LanguagesIcon className="h-5 w-5 text-foreground opacity-70 group-hover:opacity-100 transition-opacity group-hover:text-black" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            align="start"
            className="min-w-[8rem] overflow-hidden rounded-sm bg-white py-1 shadow-md z-[999] relative border border-input"
            position="popper"
          >
            <Select.Viewport>
              {items.map((item) => (
                <Select.Item
                  key={item.value}
                  className="flex cursor-default items-center px-3 py-2 text-base data-[highlighted]:bg-primary/10 outline-none"
                  value={item.value}
                >
                  <Image
                    className=" object-contain mr-2"
                    height={24}
                    width={24}
                    quality={100}
                    src={item.src}
                    alt={item.label}
                  />
                  <span className="text-foreground flex-1 min-w-[120px]">{item.label}</span>
                  <div className="ml-2 w-[1rem]">
                    {item.value === defaultValue && (
                      <CheckIcon className="h-5 w-5 text-foreground" />
                    )}
                  </div>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.Arrow className="fill-white text-white" />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
