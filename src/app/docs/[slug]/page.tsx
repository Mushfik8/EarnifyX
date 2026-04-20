import { notFound } from "next/navigation";
import DocsReader from "@/components/DocsReader";
import docsContent, { allDocSlugs } from "@/data/docsContent";

export function generateStaticParams() {
  return allDocSlugs.map((slug) => ({ slug }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const doc = (docsContent as Record<string, any>)[resolvedParams.slug];

  if (!doc) return notFound();

  return (
    <DocsReader doc={doc} slug={resolvedParams.slug} />
  );
}

