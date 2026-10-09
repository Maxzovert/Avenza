import type { Metadata, MetadataRoute } from "next";
import {
  company,
  hasText,
  locationInfo,
  pageDescription,
  pageTitle,
  property,
  siteUrl,
} from "@/content/site";

export function rootMetadata(): Metadata {
  const title = pageTitle();
  const description = pageDescription();
  const keywords = [
    company.legalName,
    "Avenza Realtech",
    ...(hasText(property.name) ? [property.name.trim()] : []),
    ...(hasText(property.location)
      ? [
          `${property.location.trim()} land for sale`,
          `${property.location.trim()} plots for sale`,
          `land property in ${property.location.trim()}`,
        ]
      : []),
  ];

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | ${company.legalName}`,
    },
    description,
    keywords,
    applicationName: company.shortName,
    authors: [{ name: company.legalName }],
    creator: company.legalName,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: "/",
      siteName: company.legalName,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    legalName: company.legalName,
    foundingDate: company.incorporationDateIso,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Sant Marry School, Bijnor",
      addressLocality: "Bijnor",
      addressRegion: "Uttar Pradesh",
      postalCode: "246701",
      addressCountry: "IN",
    },
    identifier: {
      "@type": "PropertyValue",
      name: "CIN",
      value: company.cin,
    },
    description: pageDescription(),
  };
}

/**
 * A listing is published to search engines only when a name and a location exist.
 * Price is omitted on purpose unless it is an actual figure, which this site does not guess.
 */
export function listingJsonLd() {
  if (!hasText(property.name) || !hasText(property.location)) return null;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.name.trim(),
    description: pageDescription(),
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.location.trim(),
      addressCountry: "IN",
    },
  };

  if (hasText(locationInfo.latitude) && hasText(locationInfo.longitude)) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: locationInfo.latitude.trim(),
      longitude: locationInfo.longitude.trim(),
    };
  }

  return data;
}

export function sitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-08");
  return ["", "/documents/certificate", "/privacy", "/terms", "/disclaimer"].map(
    (path) => ({
      url: `${siteUrl}${path || "/"}`,
      lastModified,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.4,
    }),
  );
}
