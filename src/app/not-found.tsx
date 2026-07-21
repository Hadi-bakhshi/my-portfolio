import Link from "next/link";
import { Header } from "@/components/custom/Header";
import { ContactBlock } from "@/components/custom/ContactBlock";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { proseShellClass, sectionTitleClass } from "@/lib/layout";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        className={cn(
          proseShellClass,
          "flex flex-col items-center pb-20 pt-28 text-center md:pt-36",
        )}
      >
        <Eyebrow>system.error</Eyebrow>
        <h1 className={cn(sectionTitleClass, "tracking-tight")}>
          Page not found
        </h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Link href="/" className="mt-8">
          <Button size="lg">Back home</Button>
        </Link>
      </main>
      <ContactBlock />
    </>
  );
}
