import Link from "next/link";
import { company, disclaimerText, legalNav, navigation } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#ebe6dc] pb-24 sm:pb-0">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-serif text-2xl tracking-[0.12em]">AVENZA</p>
          <p className="mt-1 text-[0.68rem] uppercase tracking-[0.28em]">Realtech</p>
          <p className="mt-6 text-sm leading-relaxed">{company.legalName}</p>
          <p className="mt-4 text-[0.72rem] uppercase tracking-[0.16em] text-muted">
            Registered office
          </p>
          <p className="mt-2 text-sm text-muted">{company.cityLine}</p>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">On this page</p>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-olive">
                    {item.label === "About Us" ? "About" : item.label}
                  </Link>
                </li>
              ))}
            </ul>
        </nav>
        <nav className="md:col-span-4" aria-label="Legal">
          <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">Legal</p>
          <ul className="mt-4 space-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-olive">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm leading-relaxed text-muted md:col-span-12">{disclaimerText}</p>
        <p className="text-xs text-muted md:col-span-12">
          © 2026 {company.legalName}
        </p>
      </div>
    </footer>
  );
}
