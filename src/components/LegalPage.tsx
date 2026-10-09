import Link from "next/link";
import { SiteFrame } from "@/components/SiteFrame";

export function LegalPage({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <SiteFrame>
      <main className="px-5 pb-24 pt-28 sm:px-8 md:pt-36">
        <article className="mx-auto max-w-2xl">
          <p className="text-sm text-muted">
            <Link href="/" className="hover:text-olive">
              Avenza Realtech
            </Link>
          </p>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] tracking-[-0.02em]">
            {title}
          </h1>
          <p className="mt-6 text-lg text-ink/85">{lede}</p>
          <div className="mt-10 space-y-5 text-ink/90">{children}</div>
        </article>
      </main>
    </SiteFrame>
  );
}
