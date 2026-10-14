"use client";

import { company, hasText, photos, property } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Value, buttonClass } from "@/components/ui";

const factTones = [
  { bg: "bg-olive", label: "text-gold", value: "text-ivory" },
  { bg: "bg-saffron", label: "text-olive-deep", value: "text-charcoal" },
  { bg: "bg-bronze", label: "text-olive-deep", value: "text-charcoal" },
  { bg: "bg-olive-deep", label: "text-gold", value: "text-ivory" },
] as const;

export function Hero() {
  const { t } = useI18n();
  const named = hasText(property.name);
  const facts = [
    { label: t.hero.location, value: property.location },
    { label: t.hero.landArea, value: property.landArea },
    { label: t.hero.propertyType, value: property.propertyType },
    { label: t.hero.availability, value: property.availability },
  ];

  return (
    <section id="top" className="bg-ivory pt-16 text-charcoal sm:pt-[4.5rem]">
      <div className="mx-auto grid max-w-[1180px] items-stretch gap-6 px-5 py-8 sm:px-8 lg:grid-cols-2 lg:py-12">
        <div className="flex flex-col justify-center bg-olive px-7 py-10 text-ivory sm:px-10 sm:py-14">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">{company.legalName}</p>
          <h1 className="mt-4 max-w-[14ch] font-serif text-[2.5rem] font-medium leading-[1.12] sm:text-5xl">
            {named ? property.name : t.hero.tagline}
          </h1>
          <p className="mt-5 text-ivory/85">
            {named ? (
              t.hero.tagline
            ) : (
              <>
                {t.hero.landName}
                <span className="mx-2 text-gold" aria-hidden="true">
                  /
                </span>
                {t.hero.toBeAnnounced}
              </>
            )}
          </p>
          <a href="#contact" className={`${buttonClass("primary")} mt-8 w-fit`}>
            {t.hero.schedule}
          </a>
        </div>
        <PlainPhoto
          src={photos.main.src}
          alt={photos.main.alt}
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
          className="aspect-[4/3] min-h-[240px] w-full"
        />
      </div>

      <dl className="mx-auto grid max-w-[1180px] gap-3 px-5 pb-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:pb-14">
        {facts.map((fact, index) => (
          <div key={fact.label} className={`${factTones[index].bg} px-5 py-4`}>
            <dt className={`text-[0.68rem] uppercase tracking-[0.16em] ${factTones[index].label}`}>
              {fact.label}
            </dt>
            <dd className={`mt-2 text-lg ${factTones[index].value}`}>
              <Value value={fact.value} fallback={t.pending} pendingClassName={factTones[index].value} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
