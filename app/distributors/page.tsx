import { Reveal } from '@/components/Reveal'
import { company } from '@/lib/content'
import { EnquiryForm } from '@/components/EnquiryForm'

export default function DistributorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-margin pt-40 pb-24 md:pb-32 bg-paper border-b border-line">
        <Reveal>
          <p className="type-label-botanical mb-6">Distributor Platform</p>
          <h1 className="type-editorial-large text-ink mb-10 max-w-[80vw]">
            Partnership
          </h1>
          <p className="text-moss text-xl leading-relaxed max-w-2xl">
            {company.legalName} manufactures Ayurvedic formulations and proprietary medicines. We partner with established distributors to expand our reach across regional markets.
          </p>
        </Reveal>
      </section>

      {/* Enquiry Form & Information */}
      <section id="enquiry" className="page-margin section-gap bg-paper">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
          <div className="lg:sticky lg:top-[25vh]">
            <p className="type-label-botanical mb-6">Trade Enquiry</p>
            <h2 className="type-editorial-headline text-ink mb-8">
              Become a<br />partner.
            </h2>
            <p className="text-moss text-lg leading-relaxed max-w-md">
              All submissions are logged and reviewed by our trade division. We prioritize partners with existing networks in pharmaceutical, Ayurvedic, or FMCG retail channels.
            </p>
          </div>
          <div>
            <div className="border border-line bg-mist/30 p-8 md:p-12">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
