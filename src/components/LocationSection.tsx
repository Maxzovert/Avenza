import { copy, locationInfo, mapEmbedUrl } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow, Value } from "@/components/ui";

export function LocationSection() {
  const map = mapEmbedUrl();
  const address = locationInfo.address.trim();
  const nearby = locationInfo.nearby.filter((item) => item.name.trim() && item.detail.trim());
  const connectivity = locationInfo.connectivity.filter(
    (item) => item.name.trim() && item.detail.trim(),
  );

  return (
    <section id="location" className="border-t border-line py-24 md:py-32 lg:py-40">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Eyebrow>Location</Eyebrow>
              <h2 className="mt-4 font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl">
                {copy.location.heading}
              </h2>
              <p className="mt-8 text-ink/85">
                {address ? copy.location.known : copy.location.pending}
              </p>

              <div className="mt-10 border-t border-line pt-6">
                <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                  Property location
                </p>
                <p className="mt-3 font-serif text-3xl leading-snug">
                  <Value value={address} />
                </p>
              </div>

              {nearby.length > 0 ? (
                <div className="mt-10">
                  <h3 className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                    Nearby
                  </h3>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {nearby.map((item) => (
                      <li key={`${item.name}-${item.detail}`} className="flex items-baseline justify-between gap-6 py-3">
                        <span>{item.name}</span>
                        <span className="text-right text-muted">{item.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {connectivity.length > 0 ? (
                <div className="mt-10">
                  <h3 className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                    Connectivity
                  </h3>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {connectivity.map((item) => (
                      <li key={`${item.name}-${item.detail}`} className="flex items-baseline justify-between gap-6 py-3">
                        <span>{item.name}</span>
                        <span className="text-right text-muted">{item.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-7">
              {map ? (
                <iframe
                  title="Map of the property location"
                  src={map}
                  className="h-[420px] w-full border border-line lg:h-full lg:min-h-[520px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-[420px] flex-col justify-between border border-line bg-stone/70 p-6 sm:p-8 lg:min-h-[520px]">
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">Map</p>
                  <div>
                    <p className="max-w-[16ch] font-serif text-4xl leading-[1.05] text-charcoal sm:text-5xl">
                      The map waits for a confirmed address.
                    </p>
                    <p className="mt-4 max-w-md text-sm text-muted">
                      No pin is shown, so a nearby city is not mistaken for the plot.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
