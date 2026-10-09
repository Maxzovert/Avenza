import { copy } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/ui";

export function WhyThisProperty() {
  return (
    <section aria-labelledby="matters-heading" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Before you decide</Eyebrow>
          <h2
            id="matters-heading"
            className="mt-4 max-w-[16ch] font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl"
          >
            {copy.matters.heading}
          </h2>
          <ol className="mt-14 border-b border-line">
            {copy.matters.items.map((item) => (
              <li
                key={item.index}
                className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
              >
                <p className="font-serif text-3xl text-olive md:col-span-2">{item.index}</p>
                <h3 className="font-serif text-3xl font-medium md:col-span-3">{item.title}</h3>
                <p className="text-ink/85 md:col-span-7">{item.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
