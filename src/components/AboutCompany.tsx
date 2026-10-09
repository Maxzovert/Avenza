import { company, copy } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/ui";

const record = [
  { label: "Legal name", value: company.legalName },
  { label: "CIN", value: company.cin },
  { label: "Incorporated", value: company.incorporationDate },
  { label: "Registered office", value: company.cityLine },
];

export function AboutCompany() {
  return (
    <section id="about" className="pt-24 md:pt-32 lg:pt-40">
      <Container>
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>The company</Eyebrow>
              <dl className="mt-8 border-t border-line">
                {record.map((item) => (
                  <div key={item.label} className="border-b border-line py-4">
                    <dt className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl">
                {copy.about.heading}
              </h2>
              <div className="mt-8 space-y-5 text-ink/85">
                {copy.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8 text-sm text-muted">
                Source: {company.source}. The registered office address is the company’s,
                not a claim about where the land is.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
