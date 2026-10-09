"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { copy, gallery } from "@/content/site";
import { ImagePlate } from "@/components/ImagePlate";
import { Container, Eyebrow } from "@/components/ui";

export function PropertyGallery() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const current = active === null ? null : gallery[active];

  const close = useCallback(() => {
    dialogRef.current?.close();
    setActive(null);
  }, []);

  const step = useCallback((direction: number) => {
    setActive((index) => {
      if (index === null) return index;
      return (index + direction + gallery.length) % gallery.length;
    });
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, step]);

  return (
    <section aria-labelledby="gallery-heading" className="pb-24 md:pb-32">
      <Container width="wide">
        <Eyebrow>Gallery</Eyebrow>
        <h2
          id="gallery-heading"
          className="mt-4 max-w-[14ch] font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl"
        >
          {copy.gallery.heading}
        </h2>
        <p className="mt-6 max-w-2xl text-ink/85">{copy.gallery.body}</p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-x-5 md:gap-y-10">
          {gallery.map((image, index) => {
            const featured = index === 0;
            return (
              <figure
                key={image.category}
                className={featured ? "md:col-span-7 md:row-span-2" : index < 3 ? "md:col-span-5" : "md:col-span-6"}
              >
                <div
                  role="button"
                  tabIndex={0}
                  className="group block w-full cursor-pointer text-left"
                  aria-label={`Open ${image.category} image`}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActive(index);
                    }
                  }}
                >
                  <ImagePlate
                    title={image.category}
                    note="Photograph to be added"
                    src={image.src}
                    alt={image.alt || `Placeholder for a ${image.category.toLowerCase()} photograph. Not a picture of the property.`}
                    priority={featured}
                    sizes={featured ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
                    className={featured ? "min-h-[420px] md:min-h-[640px]" : "min-h-[260px] md:min-h-[300px]"}
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm text-muted">
                  <span className="tracking-wide">{image.category}</span>
                  <span className="text-[0.72rem] uppercase tracking-[0.16em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>

      <dialog
        ref={dialogRef}
        className="viewer"
        aria-label="Property image viewer"
        onClose={() => setActive(null)}
      >
        {current ? (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
              <p className="text-sm tracking-wide text-ivory/70">
                {current.category}
                <span className="mx-3 text-ivory/30" aria-hidden="true">
                  /
                </span>
                {active !== null ? `${active + 1} of ${gallery.length}` : null}
              </p>
              <button
                type="button"
                className="px-3 py-2 text-sm tracking-wide text-ivory"
                onClick={close}
              >
                Close
              </button>
            </div>
            <div className="relative min-h-0 flex-1 px-5 sm:px-16">
              <ImagePlate
                title={current.category}
                note="Photograph to be added"
                src={current.src}
                alt={current.alt || current.category}
                fit={current.src ? "contain" : "cover"}
                display={current.src ? "frame" : "hero"}
                surface="dark"
                sizes="100vw"
                className="h-full min-h-[50vh] bg-transparent"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-5 sm:px-8">
              <button type="button" className="px-3 py-2 text-sm tracking-wide" onClick={() => step(-1)}>
                Previous
              </button>
              <button type="button" className="px-3 py-2 text-sm tracking-wide" onClick={() => step(1)}>
                Next
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
