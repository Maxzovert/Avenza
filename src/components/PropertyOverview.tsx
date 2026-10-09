import { copy, property } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow, Value, buttonClass } from "@/components/ui";

const rows = [
  { label: "Location", value: property.location },
  { label: "Land area", value: property.landArea },
  { label: "Property type", value: property.propertyType },
  { label: "Plot size", value: property.plotSize },
  { label: "Status", value: property.availability },
  { label: "Price", value: property.price, fallback: "Price on request" },
];

export function PropertyOverview() {
  return (
    <section id="property" className="py-24 md:py-32 lg:py-40">
      <Container>
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Eyebrow>The property</Eyebrow>
              <h2 className="mt-4 max-w-[12ch] font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl">
                {copy.intro.heading}
              </h2>
              <p className="mt-8 max-w-xl text-ink/85">{copy.intro.body}</p>
              <a href="#contact" className={`${buttonClass("primary")} mt-10 w-full sm:w-auto`}>
                Get Complete Details
              </a>
            </div>

            <div className="lg:col-span-6 lg:pt-10">
              <dl>
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-1 border-t border-line py-4 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:py-5"
                  >
                    <dt className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                      {row.label}
                    </dt>
                    <dd className="text-lg text-charcoal">
                      <Value value={row.value} fallback={row.fallback} />
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-muted">
                Lines in italic have not been confirmed for publication.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
