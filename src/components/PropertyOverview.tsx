"use client";

import { photos, property } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Reveal } from "@/components/Reveal";
import { Value, buttonClass } from "@/components/ui";

const accents = ["border-olive", "border-saffron", "border-bronze", "border-olive", "border-saffron", "border-bronze"];

export function PropertyOverview() {
  const { t } = useI18n();
  const price =
    !property.price.trim() || property.price.trim() === "Price on request"
      ? t.priceOnRequest
      : property.price;
  const rows = [
    { label: t.intro.location, value: property.location },
    { label: t.intro.landArea, value: property.landArea },
    { label: t.intro.propertyType, value: property.propertyType },
    { label: t.intro.plotSize, value: property.plotSize },
    { label: t.intro.status, value: property.availability },
    { label: t.intro.price, value: price },
  ];

  return (
    <section id="property" className="bg-mint">
      <Reveal>
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <PlainPhoto
            src={photos.plots.src}
            alt={photos.plots.alt}
            sizes="(min-width: 1024px) 540px, 100vw"
            className="aspect-[4/3] w-full"
          />
          <div>
            <h2 className="max-w-[14ch] font-serif text-4xl font-medium leading-[1.15] sm:text-5xl">
              {t.intro.heading}
            </h2>
            <dl className="mt-8 space-y-3">
              {rows.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex items-baseline justify-between gap-4 border-l-4 bg-paper px-4 py-3 ${accents[index]}`}
                >
                  <dt className="text-[0.68rem] uppercase tracking-[0.14em] text-muted">{row.label}</dt>
                  <dd className="text-right">
                    <Value value={row.value} fallback={t.pending} />
                  </dd>
                </div>
              ))}
            </dl>
            <a href="#contact" className={`${buttonClass("primary")} mt-8`}>
              {t.intro.cta}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
