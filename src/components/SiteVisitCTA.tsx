import { contact, copy, hasText } from "@/content/site";
import { buttonClass } from "@/components/ui";

export function SiteVisitCTA() {
  const phone = contact.phone.trim();

  return (
    <section id="visit" className="bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-12 lg:items-end lg:py-36">
        <div className="lg:col-span-8">
          <h2 className="max-w-[14ch] font-serif text-5xl font-medium leading-[0.98] tracking-[-0.02em] sm:text-7xl">
            {copy.visit.heading}
          </h2>
          <p className="mt-8 max-w-md font-serif text-2xl italic text-ivory/75 sm:text-3xl">
            {copy.visit.body}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
          <a href="#contact" className={`${buttonClass("primary")} w-full`}>
            Schedule a Site Visit
          </a>
          {hasText(phone) ? (
            <a href={`tel:${phone.replace(/\s/g, "")}`} className={`${buttonClass("secondary-light")} w-full`}>
              Talk to Us
            </a>
          ) : (
            <a href="#contact" className={`${buttonClass("secondary-light")} w-full`}>
              Talk to Us
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
