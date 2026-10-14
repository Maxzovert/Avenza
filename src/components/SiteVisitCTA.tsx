"use client";

import { photos } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { buttonClass } from "@/components/ui";

export function SiteVisitCTA() {
  const { t } = useI18n();

  return (
    <section id="visit" className="bg-olive text-ivory">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <PlainPhoto
          src={photos.farmland.src}
          alt={photos.farmland.alt}
          className="aspect-[4/3] w-full"
          sizes="(min-width: 1024px) 540px, 100vw"
        />
        <div>
          <h2 className="max-w-[14ch] font-serif text-4xl font-medium leading-[1.15] sm:text-5xl">
            {t.visit.heading}
          </h2>
          <a href="#contact" className={`${buttonClass("primary")} mt-8`}>
            {t.visit.schedule}
          </a>
        </div>
      </div>
    </section>
  );
}
