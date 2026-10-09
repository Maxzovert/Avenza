import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/content/site";
import { SiteFrame } from "@/components/SiteFrame";
import { buttonClass } from "@/components/ui";

export const metadata: Metadata = {
  title: "Company Certificate",
  description: `Incorporation particulars of ${company.legalName}, CIN ${company.cin}. Incorporation is not proof of title to any land.`,
  alternates: { canonical: "/documents/certificate" },
};

const rows = [
  { label: "Name", value: company.legalName },
  { label: "Corporate Identity Number", value: company.cin },
  { label: "Date of incorporation", value: company.incorporationDate },
  { label: "Company type", value: company.companyType },
  { label: "Registered office", value: company.registeredOffice },
  { label: "Source", value: company.source },
];

export default function CertificatePage() {
  return (
    <SiteFrame>
      <main className="px-5 pb-24 pt-28 sm:px-8 md:pt-36">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            <Link href="/#documents" className="hover:text-olive">
              Documents
            </Link>
          </p>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-6xl">
            Certificate of Incorporation
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/85">
            The particulars below are the public incorporation details supplied for this website.
            The official certificate states that incorporation can be verified through the
            Ministry of Corporate Affairs website.
          </p>

          <div className="mt-12 border border-line bg-paper px-6 py-8 sm:px-10 sm:py-12">
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-bronze">
              Company record
            </p>
            <dl className="mt-8">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 border-t border-line py-4 sm:grid-cols-[14rem_1fr] sm:gap-6"
                >
                  <dt className="text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                    {row.label}
                  </dt>
                  <dd className="text-lg">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-8 text-ink/85">
            This record identifies the company. It does not prove ownership of the land described
            on the rest of this website. Title has to be read from the property documents
            themselves.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={company.mcaUrl}
              className={`${buttonClass("primary")} w-full sm:w-auto`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify on the MCA website
            </a>
            {company.certificatePdf ? (
              <a
                href={company.certificatePdf}
                className={`${buttonClass("secondary")} w-full sm:w-auto`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the certificate file
              </a>
            ) : null}
          </div>

          {company.certificatePdf ? (
            <iframe
              title="Certificate of Incorporation"
              src={company.certificatePdf}
              className="mt-10 h-[70vh] w-full border border-line"
            />
          ) : (
            <p className="mt-8 text-sm text-muted">
              The certificate file has not been uploaded to this website. The particulars above
              are what has been published from the incorporation record.
            </p>
          )}
        </article>
      </main>
    </SiteFrame>
  );
}
