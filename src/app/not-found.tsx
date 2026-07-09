import Link from "next/link";
import { Header } from "@/components/custom/Header";
import { ContactBlock } from "@/components/custom/ContactBlock";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
        <h1 className="font-heading text-3xl">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The page you are looking for does not exist.</p>
        <Link href="/" className="mt-8">
          <Button>Back home</Button>
        </Link>
      </main>
      <ContactBlock />
    </>
  );
}
