import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { proprietaryProducts, company } from "@/lib/content";
import { LeafIcon } from "@/components/LeafIcon";

export function generateStaticParams() {
  return proprietaryProducts.map((p) => ({ slug: p.slug }));
}

function getProduct(slug: string) {
  return proprietaryProducts.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Celestial Biolabs`,
    description: `${product.name} (${product.form}), a quality Ayurvedic formulation manufactured by ${company.legalName}.`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      {/* Hero with Image Split */}
      <section className="page-margin pt-40 pb-20 bg-paper border-b border-line">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LeafIcon className="h-5 w-5 text-leaf" />
              <p className="type-label-botanical !text-leaf">
                {product.category === 'proprietary' ? 'Proprietary Ayurvedic Medicine' : 'Wellness formulation'}
              </p>
            </div>
            <h1
              className="font-serif font-light tracking-tight text-ink mb-8"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1.1 }}
            >
              {product.name}
            </h1>
            <p className="text-moss text-xl leading-relaxed max-w-xl">
              {product.description}
            </p>
          </div>

          {/* Product Image Frame */}
          <div className="relative aspect-square w-full max-w-[360px] mx-auto lg:ml-auto overflow-hidden bg-mist/50 border border-line rounded-sm flex items-center justify-center p-8">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain w-full h-full filter saturate-[0.95] contrast-[1.01] transition-transform duration-700 hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 30vw"
                priority
              />
            ) : (
              <div className="flex flex-col items-center gap-3 text-moss/45">
                <LeafIcon className="h-10 w-10" />
                <span className="type-label-botanical text-[10px]">Ayurvedic Standard</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Detail Block */}
      <section className="page-margin section-gap bg-paper">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] items-start">
          {/* Main Content */}
          <div className="space-y-12">
            {/* Ingredients block if available */}
            {product.keyIngredients && (
              <div>
                <h2 className="type-editorial-title text-ink font-bold mb-6">Key Botanicals</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  {product.keyIngredients.map((ing) => (
                    <div key={ing} className="border border-line bg-mist/30 p-6 flex flex-col justify-between min-h-[120px]">
                      <LeafIcon className="h-5 w-5 text-leaf mb-4" />
                      <p className="type-editorial-title text-ink font-bold text-lg">{ing}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Info table */}
            <div>
              <h2 className="type-editorial-title text-ink font-bold mb-6">Specifications</h2>
              <div className="border-t border-line divide-y divide-line">
                {[
                  ["Formulation Type", product.form],
                  ["Category", product.category === 'proprietary' ? 'Proprietary Medicine' : 'Wellness & Cosmetic'],
                  ["Origin", "Ayurvedic Pharmacopoeia standards"],
                  ["Sourcing Quality", "Authentic raw botanical ingredients verified for purity"],
                  ["Manufacturer", company.legalName],
                ].map(([k, v]) => (
                  <div key={k} className="py-5 grid md:grid-cols-[200px_1fr] gap-4">
                    <span className="type-label-botanical !text-moss">{k}</span>
                    <span className="text-ink text-sm leading-relaxed">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/products"
              className="type-label-botanical !text-moss hover:!text-ink transition-colors inline-block"
            >
              ← Back to Product Directory
            </Link>
          </div>

          {/* Sidebar Enquiries */}
          <div className="lg:sticky lg:top-36 border border-line bg-mist/30 p-8 md:p-10">
            <p className="type-label-botanical mb-4">Availability</p>
            <h3 className="type-editorial-title text-ink font-bold mb-4">Trade Supply</h3>
            <p className="text-moss text-sm leading-relaxed mb-8">
              This product is manufactured under strict compliance and is available for regional distribution networks and bulk trade supply.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/distributors#enquiry"
                className="btn-medical text-center w-full"
              >
                Enquire as distributor
              </Link>
              <span
                aria-disabled="true"
                className="border border-line px-8 py-4 text-xs font-bold text-moss text-center select-none"
              >
                Catalog coming soon — direct orders inactive
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
