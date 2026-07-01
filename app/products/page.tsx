import { Reveal } from '@/components/Reveal'
import { productCategories, proprietaryProducts } from '@/lib/content'
import Link from 'next/link'
import Image from 'next/image'
import { LeafIcon } from '@/components/LeafIcon'

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-margin pt-40 pb-24 bg-paper border-b border-line">
        <Reveal>
          <p className="type-label-botanical mb-6">Product Directory</p>
          <h1 className="type-editorial-large text-ink mb-10">
            Our Formulations
          </h1>
          <p className="text-moss text-xl leading-relaxed max-w-2xl">
            A comprehensive list of Celestial Biolabs&apos; Ayurvedic medicines, wellness formulations, and proprietary healthcare products manufactured under strict quality controls.
          </p>
        </Reveal>
      </section>

      {/* Directory Section */}
      <section className="page-margin section-gap bg-paper">
        <div className="space-y-24">
          {productCategories.map((cat, i) => {
            const catProducts = proprietaryProducts.filter(p => p.category === cat.id)
            const hasProducts = catProducts.length > 0

            return (
              <div key={cat.id} className="border-t border-line pt-16 first:border-0 first:pt-0">
                {/* Category Header */}
                <div className="mb-12">
                  <span className="type-label-botanical !text-moss">Category {String(i + 1).padStart(2, '0')}</span>
                  <h2 className="type-editorial-headline text-ink mt-4 mb-4">{cat.label}</h2>
                  <p className="text-moss text-base leading-relaxed max-w-2xl">{cat.description}</p>
                </div>

                {/* Product Cards Grid or Coming Soon Placeholder */}
                <div>
                  {hasProducts ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {catProducts.map((product, idx) => (
                        <Reveal key={product.slug} delay={idx * 0.05}>
                          <Link 
                            href={`/products/${product.slug}`}
                            className="group flex flex-col justify-between border border-line bg-mist/20 hover:border-leaf/30 transition-all duration-300 h-full rounded-sm overflow-hidden"
                          >
                            {/* Product Image Frame */}
                            <div className="relative aspect-[4/3] w-full bg-mist/50 border-b border-line flex items-center justify-center p-6 overflow-hidden">
                              {product.image ? (
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  className="object-contain w-full h-full filter saturate-[0.90] group-hover:saturate-100 transition-all duration-500 group-hover:scale-103"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
                                />
                              ) : (
                                <div className="flex flex-col items-center gap-2 text-moss/35">
                                  <LeafIcon className="h-8 w-8" />
                                  <span className="type-label-botanical text-[9px]">Ayurvedic Standard</span>
                                </div>
                              )}
                            </div>

                            {/* Product Info */}
                            <div className="p-8 flex-1 flex flex-col justify-between">
                              <div>
                                <div className="flex justify-between items-baseline gap-2 mb-4">
                                  <h3 className="type-editorial-title text-ink font-bold group-hover:text-leaf transition-colors leading-tight">
                                    {product.name}
                                  </h3>
                                  <span className="type-label-botanical !text-moss text-[10px] shrink-0">{product.form}</span>
                                </div>
                                <p className="text-moss text-sm leading-relaxed mb-6">
                                  {product.description}
                                </p>
                              </div>
                              <div className="pt-6 border-t border-line flex justify-between items-center">
                                <span className="type-label-botanical text-[10px] text-moss group-hover:text-leaf transition-colors">
                                  View Specifications
                                </span>
                                <span className="text-moss group-hover:text-leaf transition-colors group-hover:translate-x-1 duration-300">
                                  →
                                </span>
                              </div>
                            </div>
                          </Link>
                        </Reveal>
                      ))}
                    </div>
                  ) : (
                    <div className="border border-line bg-mist/30 p-8 md:p-12 max-w-2xl">
                      <h3 className="type-editorial-title text-ink font-bold mb-2">Catalogue Coming Soon</h3>
                      <p className="text-moss text-sm leading-relaxed mb-6">
                        We are currently preparing detailed ingredient lists and specifications for this category. Contact our trade desk directly for enquiries.
                      </p>
                      <Link 
                        href="/distributors#enquiry" 
                        className="btn-medical text-center w-full sm:w-auto"
                      >
                        Enquire Here
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
