import type { Metadata } from "next";
import { company, disclaimerText } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for property information published by ${company.legalName}.`,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      lede="Read the property information on this website as a starting point, not as a complete record."
    >
      <p>{disclaimerText}</p>
      <p>
        Measurements, price, availability, land use, approvals, distances, and ownership are
        shown only when they have been supplied for publication. Empty or “to be confirmed”
        entries are unpublished, not zero, and not a promise.
      </p>
      <p>
        {company.legalName} was incorporated on {company.incorporationDate}. CIN {company.cin}.
        That registration can be checked on the Ministry of Corporate Affairs website. It is not
        a title deed, a sale deed, or proof that the company owns the advertised land.
      </p>
      <p>
        Photographs appear only when they are photographs of this property. Empty frames are
        placeholders. They are not pictures of the land.
      </p>
      <p>
        Buyers should inspect the land and have the title, revenue records, and any approvals
        read independently before a transaction.
      </p>
    </LegalPage>
  );
}
