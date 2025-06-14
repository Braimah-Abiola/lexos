"use client";

import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { useTransition } from "react";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { CheckIcon, ChevronDown } from "lucide-react";
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

  // Find the currently selected locale's flag
  const selectedItem = items.find((item) => item.value === defaultValue);
  const selectedFlag = selectedItem?.src || "/assets/us-flag.svg"; // Fallback if not found

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
        {/* Custom trigger without using Select.Icon */}
        <Select.Trigger
          aria-label={label}
          className={clsx(
            "rounded-full p-2 transition-colors hover:bg-transparent outline-none focus:border-none flex items-center justify-center gap-1",
            isPending && "pointer-events-none opacity-60"
          )}
        >
          <Image
            src={selectedFlag}
            alt={selectedItem?.label || "Selected language"}
            className="object-contain"
            width={26}
            height={26}
          />
          <ChevronDown className=" shrink-0 flex-nowrap h-4 w-4 text-foreground" />
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
                    className="object-contain mr-2 h-6 w-6"
                    src={item.src}
                    alt={item.label}
                    width={24}
                    height={24}
                  />
                  <span className="text-foreground flex-1 min-w-[120px]">
                    {item.label}
                  </span>
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