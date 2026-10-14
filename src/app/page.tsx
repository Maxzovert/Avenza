import type { Metadata } from "next";
import { AboutCompany } from "@/components/AboutCompany";
import { Directors } from "@/components/Directors";
import { DocumentsSection } from "@/components/DocumentsSection";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { PropertyDetails } from "@/components/PropertyDetails";
import { PropertyOverview } from "@/components/PropertyOverview";
import { SiteFrame } from "@/components/SiteFrame";
import { SiteVisitCTA } from "@/components/SiteVisitCTA";
import { listingJsonLd } from "@/content/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const listing = listingJsonLd();
  const listingJson = listing
    ? JSON.stringify(listing).replace(/</g, "\\u003c")
    : null;

  return (
    <SiteFrame>
      {listingJson ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: listingJson }}
        />
      ) : null}
      <main>
        <Hero />
        <PropertyOverview />
        <PropertyDetails />
        <LocationSection />
        <DocumentsSection />
        <AboutCompany />
        <Directors />
        <SiteVisitCTA />
        <EnquiryForm />
      </main>
    </SiteFrame>
  );
}
