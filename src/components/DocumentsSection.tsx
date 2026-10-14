"use client";

import Link from "next/link";
import { company, photos, propertyDocuments } from "@/content/site";
import { useI18n } from "@/components/Language";
import { PlainPhoto } from "@/components/PlainPhoto";
import { Reveal } from "@/components/Reveal";
import { buttonClass } from "@/components/ui";

export function DocumentsSection() {
  const { t } = useI18n();
  const papers = propertyDocuments.filter((item) => item.title.trim() && item.href.trim());
  const particulars = [
    { label: t.documents.labels.company, value: company.legalName },
    { label: t.documents.labels.cin, value: company.cin },
    { label: t.documents.labels.incorporated, value: t.facts.date },
    { label: t.documents.labels.type, value: t.facts.companyType },
    { label: t.documents.labels.office, value: t.facts.registeredOffice },
    { label: t.documents.labels.source, value: t.facts.source },
  ];

  return (
    <section id="documents" className="bg-ivory py-16 md:py-20">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <PlainPhoto
            src={photos.openLand.src}
            alt={photos.openLand.alt}
            sizes="(min-width: 1024px) 540px, 100vw"
            className="aspect-[4/3] w-full"
          />
        </Reveal>
        <Reveal>
            <article>
              <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                {t.documents.company}
              </p>
              <h3 className="mt-3 font-serif text-3xl font-medium leading-tight">
                {t.documents.certificate}
              </h3>
              <dl className="mt-8">
                {particulars.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-1 border-t border-line py-3 sm:grid-cols-[9.5rem_1fr] sm:gap-4"
                  >
                    <dt className="text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                      {item.label}
                    </dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-muted">{t.documents.note}</p>
              <Link
                href="/documents/certificate"
                className={`${buttonClass("primary")} mt-8 w-full sm:w-auto`}
              >
                {t.documents.view}
              </Link>
            </article>

            {papers.length > 0 ? (
              <div className="mt-10">
                <h3 className="font-serif text-2xl font-medium">{t.documents.propertyDocs}</h3>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {papers.map((item) => (
                    <li key={item.href} className="py-4">
                      <a
                        href={item.href}
                        className="font-medium hover:text-olive"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                      {item.note ? <p className="mt-1 text-sm text-muted">{item.note}</p> : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
        </Reveal>
      </div>
    </section>
  );
}
