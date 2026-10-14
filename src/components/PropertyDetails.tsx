"use client";

import { amenities, landFacts, photos } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Reveal } from "@/components/Reveal";

export function PropertyDetails() {
  const { t } = useI18n();
  const facts = landFacts.filter((fact) => fact.value.trim());

  return (
    <section id="land" aria-labelledby="land-heading" className="bg-paper">
      <Reveal>
        <div className="mx-auto grid max-w-[1180px] gap-x-20 gap-y-16 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <figure>
            <PlainPhoto
              src={photos.openPlot.src}
              alt={photos.openPlot.alt}
              sizes="(min-width: 1024px) 520px, 100vw"
              className="aspect-[4/3] w-full"
            />
            <figcaption id="land-heading" className="mt-3 text-[0.68rem] uppercase tracking-[0.16em] text-olive">
              {t.land.eyebrow}
            </figcaption>
            {facts.length > 0 ? (
              <dl className="mt-6">
                {facts.map((fact) => (
                  <div key={fact.label} className="border-t border-line py-3">
                    <dt className="text-[0.68rem] uppercase tracking-[0.14em] text-muted">{fact.label}</dt>
                    <dd className="mt-1">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {amenities.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {amenities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </figure>
          <figure className="lg:mt-28">
            <PlainPhoto
              src={photos.road.src}
              alt={photos.road.alt}
              sizes="(min-width: 1024px) 520px, 100vw"
              className="aspect-[4/3] w-full"
            />
            <figcaption className="mt-3 text-[0.68rem] uppercase tracking-[0.16em] text-bronze">
              {t.gallery.categories["Road / Approach"]}
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  );
}
