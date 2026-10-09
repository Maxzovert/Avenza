import type { Metadata } from "next";
import { company } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${company.legalName} handles details sent through the enquiry form on this website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lede="This note explains what the enquiry form asks for, and what this website does with it."
    >
      <p>
        The form asks for your name, phone number, email address, a preferred visit date, and an
        optional message. Those details are used only to respond about a visit to the property.
      </p>
      <p>
        If an email address or a form endpoint has been configured, the details are sent there.
        If neither has been configured, the form tells you that the request was not delivered.
      </p>
      <p>
        This website does not run advertising or analytics tools. If a map of the property is
        shown, it is loaded from Google Maps, and Google may receive your IP address under its
        own terms.
      </p>
      <p>
        The company’s registered office is {company.registeredOffice}. Write there if you want
        the details you submitted to be corrected or deleted, once a working contact on this
        site is in place.
      </p>
    </LegalPage>
  );
}
