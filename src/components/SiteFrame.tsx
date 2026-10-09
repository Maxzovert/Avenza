import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function SiteFrame({
  overlay = false,
  children,
}: {
  overlay?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar overlay={overlay} />
      <div id="content">{children}</div>
      <Footer />
    </>
  );
}
