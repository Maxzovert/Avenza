"use client";

import { company, photos } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";

export function AboutCompany() {
  const { t } = useI18n();
  const record = [
    { label: t.facts.legalName, value: company.legalName },
    { label: t.facts.cin, value: company.cin },
    { label: t.facts.incorporated, value: t.facts.date },
    { label: t.facts.office, value: t.facts.cityLine },
  ];

  return (
    <section id="about" className="bg-ivory">
      <Reveal>
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <PlainPhoto
            src={photos.pin.src}
            alt={photos.pin.alt}
            sizes="(min-width: 1024px) 480px, 100vw"
            className="aspect-[4/3] w-full"
          />
          <div className="bg-paper px-6 py-8 sm:px-8">
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-tight">{t.about.heading}</h2>
            <dl className="mt-8">
              {record.map((item) => (
                <div key={item.label} className="border-t border-line py-3">
                  <dt className="text-[0.68rem] uppercase tracking-[0.14em] text-muted">{item.label}</dt>
                  <dd className="mt-1">{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-muted">{t.about.sourceNote}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
