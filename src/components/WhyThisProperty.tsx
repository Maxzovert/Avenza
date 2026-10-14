"use client";

import { photos } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";

export function WhyThisProperty() {
  const { t } = useI18n();

  return (
    <section aria-labelledby="matters-heading" className="border-t border-line bg-mint">
      <Reveal>
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>{t.matters.eyebrow}</Eyebrow>
            <h2
              id="matters-heading"
              className="mt-3 max-w-[16ch] font-serif text-[2.35rem] font-medium leading-[1.15] tracking-[-0.02em] sm:text-5xl"
            >
              {t.matters.heading}
            </h2>
          </div>
          <PlainPhoto
            src={photos.openLand.src}
            alt={photos.openLand.alt}
            sizes="520px"
            className="aspect-[4/3] w-full max-w-[520px] lg:col-span-6 lg:justify-self-end"
          />
        </div>
      </Reveal>
    </section>
  );
}
