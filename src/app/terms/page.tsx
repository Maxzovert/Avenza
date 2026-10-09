import type { Metadata } from "next";
import { company, disclaimerText } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms for using the website of ${company.legalName}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      lede="This website presents company information and, where confirmed, information about a property."
    >
      <p>
        Nothing on this website is an offer that can be accepted by filling in the form. A visit,
        a price, and a sale are settled only in a separate conversation and in the documents that
        belong to the land.
      </p>
      <p>{disclaimerText}</p>
      <p>
        The certificate of incorporation identifies {company.legalName}. It does not, by itself,
        prove ownership of any plot shown or described here.
      </p>
      <p>
        The site is offered as published. It may be incomplete while property particulars are
        still being confirmed, and it may be updated without notice.
      </p>
    </LegalPage>
  );
}
