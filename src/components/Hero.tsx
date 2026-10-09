import Image from "next/image";
import { company, hasText, property } from "@/content/site";
import { ImagePlate } from "@/components/ImagePlate";
import { Value, buttonClass } from "@/components/ui";

const facts = [
  { label: "Location", value: property.location },
  { label: "Land area", value: property.landArea },
  { label: "Property type", value: property.propertyType },
  { label: "Availability", value: property.availability },
];

export function Hero() {
  const hasPhoto = hasText(property.heroImage.src);
  const named = hasText(property.name);

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col bg-charcoal text-ivory">
      {hasPhoto ? (
        <>
          <Image
            src={property.heroImage.src}
            alt={property.heroImage.alt || "Photograph of the property"}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/45" />
        </>
      ) : null}

      <div className="relative z-10 mx-auto flex w-full max-w-[1360px] flex-1 flex-col justify-end px-5 pb-10 pt-28 sm:px-8 sm:pt-36 lg:pb-14">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-ivory/60">
              {company.legalName}
            </p>
            <h1
              className={`mt-6 font-serif font-medium leading-[0.94] tracking-[-0.02em] ${
                named
                  ? "max-w-[12ch] text-[clamp(3.1rem,7vw,6.4rem)]"
                  : "max-w-[16ch] text-[clamp(2.6rem,5.4vw,4.8rem)]"
              }`}
            >
              {named ? property.name : property.tagline}
            </h1>
            {named ? (
              <p className="mt-6 max-w-xl font-serif text-2xl font-normal italic leading-snug text-ivory/80 sm:text-3xl">
                {property.tagline}
              </p>
            ) : (
              <p className="mt-8 text-sm tracking-wide text-ivory/60">
                Land name
                <span className="mx-3 text-ivory/30" aria-hidden="true">
                  /
                </span>
                To be announced
              </p>
            )}

            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              {facts.slice(0, 3).map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-ivory/45">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-base text-ivory">
                    <Value
                      value={fact.value}
                      pendingClassName="text-ivory/55"
                    />
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className={`${buttonClass("primary")} w-full sm:w-auto`}>
                Schedule a Visit
              </a>
              <a href="#property" className={`${buttonClass("secondary-light")} w-full sm:w-auto`}>
                View Property Details
              </a>
            </div>
          </div>

          {hasPhoto ? null : (
            <div className="lg:col-span-5">
              <ImagePlate
                title="Property photograph"
                note="The photograph of this land will be placed here."
                display="hero"
                className="min-h-[380px] sm:min-h-[460px]"
              />
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 border-t border-ivory/15">
        <dl className="mx-auto grid max-w-[1360px] grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className={`px-5 py-5 sm:px-8 ${index % 2 === 1 ? "border-l border-ivory/15" : ""} ${index > 0 ? "lg:border-l lg:border-ivory/15" : ""} ${index > 1 ? "border-t border-ivory/15 lg:border-t-0" : ""}`}
            >
              <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-ivory/45">
                {fact.label}
              </dt>
              <dd className="mt-2 text-[0.98rem]">
                <Value value={fact.value} pendingClassName="text-ivory/55" />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
