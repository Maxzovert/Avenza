"use client";

import { photos } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";

export function ApproachBand() {
  const { t } = useI18n();

  return (
    <figure className="border-t border-line bg-sky">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-16 sm:px-8 md:py-20">
        <PlainPhoto
          src={photos.road.src}
          alt={photos.road.alt}
          className="aspect-[4/3] w-full max-w-[520px]"
          sizes="520px"
        />
        <figcaption className="text-[0.68rem] uppercase tracking-[0.18em] text-bronze">
          {t.gallery.categories["Road / Approach"]}
        </figcaption>
      </div>
    </figure>
  );
}
