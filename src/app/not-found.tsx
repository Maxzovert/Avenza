import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/SiteFrame";
import { buttonClass } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <SiteFrame>
      <main className="px-5 pb-24 pt-36 sm:px-8">
        <div className="mx-auto max-w-xl">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-bronze">404</p>
          <h1 className="mt-4 font-serif text-5xl font-medium leading-tight">
            This page is not on the site.
          </h1>
          <p className="mt-6 text-ink/85">
            The address may be mistyped. The property page is still available.
          </p>
          <Link href="/" className={`${buttonClass("primary")} mt-8`}>
            Back to the property
          </Link>
        </div>
      </main>
    </SiteFrame>
  );
}
