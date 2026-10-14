"use client";

import { locationInfo, mapEmbedUrl, photos } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Reveal } from "@/components/Reveal";
import { Value } from "@/components/ui";

export function LocationSection() {
  const { t } = useI18n();
  const map = mapEmbedUrl();
  const address = locationInfo.address.trim();
  const nearby = locationInfo.nearby.filter((item) => item.name.trim() && item.detail.trim());
  const connectivity = locationInfo.connectivity.filter(
    (item) => item.name.trim() && item.detail.trim(),
  );

  return (
    <section id="location" className="bg-sky">
      <Reveal>
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="bg-paper px-6 py-8 sm:px-8">
            <h2 className="font-serif text-4xl font-medium leading-tight">{t.location.heading}</h2>
            <p className="mt-6 text-[0.68rem] uppercase tracking-[0.16em] text-muted">
              {t.location.propertyLocation}
            </p>
            <p className="mt-2 font-serif text-2xl">
              <Value value={address} fallback={t.pending} />
            </p>
            {nearby.length > 0 ? (
              <ul className="mt-6 divide-y divide-line border-t border-line">
                {nearby.map((item) => (
                  <li key={`${item.name}-${item.detail}`} className="flex justify-between gap-4 py-3">
                    <span>{item.name}</span>
                    <span className="text-muted">{item.detail}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {connectivity.length > 0 ? (
              <ul className="divide-y divide-line border-t border-line">
                {connectivity.map((item) => (
                  <li key={`${item.name}-${item.detail}`} className="flex justify-between gap-4 py-3">
                    <span>{item.name}</span>
                    <span className="text-muted">{item.detail}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {map ? (
            <iframe
              title={t.location.mapFrame}
              src={map}
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <PlainPhoto
              src={photos.fields.src}
              alt={photos.fields.alt}
              sizes="(min-width: 1024px) 540px, 100vw"
              className="aspect-[4/3] w-full"
            />
          )}
        </div>
      </Reveal>
    </section>
  );
}
