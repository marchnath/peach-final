import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Волосы",
      icon: (
        <Image
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          src="/icons/hair.png"
          width={20}
          height={20}
          alt="hair"
        />
      ),
      href: "/hair",
    },

    {
      title: "Ногти",
      icon: (
        <Image
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          src="/icons/nail.png"
          width={20}
          height={20}
          alt="nails"
        />
      ),
      href: "/nails",
    },
    {
      title: "Макияж и брови",
      icon: (
        <Image
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          src="/icons/eyebrow.png"
          width={20}
          height={20}
          alt="hair"
        />
      ),
      href: "/eye",
    },
    {
      title: "Дети",
      icon: (
        <Image
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          src="/icons/makeover.png"
          width={20}
          height={20}
          alt="makeup"
        />
      ),
      href: "/children",
    },
    {
      title: "Мужчины",
      icon: (
        <Image
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          src="/icons/man.png"
          width={20}
          height={20}
          alt="hair"
        />
      ),
      href: "/men",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
