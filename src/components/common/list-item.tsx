import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ListItem({
    title,
    children,
    href,
    icon,
    iconActive,
    ...props
}: React.ComponentPropsWithoutRef<"div"> & { href: string; icon: string; iconActive: string }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link className=" flex flex-row items-start" href={href}>
                <div
                    className={`h-12 w-12 aspect-square inline-flex items-center justify-center rounded-lg ${isHovered ? "bg-primary border border-primary" : "bg-white border border-black/20"
                        }`}
                >
                    <Image priority width={26} height={26} src={isHovered ? iconActive : icon} alt={title || "Icon"} />
                </div>
                <div className=" ml-4">
                    <div className="text-base leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-3 mt-1 text-sm leading-snug">
                        {children}
                    </p>
                </div>
            </Link>
        </div>
    )
}