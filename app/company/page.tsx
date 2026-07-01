import { Reveal } from "@/components/Reveal";
import { company, investorLink } from "@/lib/content";

export default function CompanyPage() {
  return (
    <>
      <section className="bg-paper page-margin pt-40 pb-24 md:pb-32 border-b border-line">
        <Reveal>
          <p className="type-label-botanical mb-6">Corporate Profile</p>
          <h1 className="type-editorial-large text-ink leading-tight max-w-4xl">
            Celestial Biolabs Limited
          </h1>
          <p className="mt-8 text-xl text-moss leading-relaxed max-w-3xl">
            Established in 1997, {company.legalName} is an Indian pharmaceutical company based in Hyderabad, specializing in the manufacture of Ayurvedic formulations and proprietary medicines.
          </p>
        </Reveal>
      </section>

      <section className="bg-paper page-margin section-gap">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
          <Reveal>
            <h2 className="type-editorial-title text-ink font-bold mb-6">Corporate Details</h2>
            <p className="text-moss text-base leading-relaxed">
              We operate as a publicly traded entity on the Bombay Stock Exchange (BSE), upholding compliance and regulatory reporting standards.
            </p>
            <div className="mt-8">
              <a
                href={investorLink.url}
                target="_blank"
                rel="noreferrer"
                className="type-label-botanical hover:underline underline-offset-4"
              >
                {investorLink.label} ↗
              </a>
            </div>
          </Reveal>

          <div className="border-t border-line divide-y divide-line">
            {[
              ["Registered Office", company.registeredOffice],
              ["Corporate Identification Number (CIN)", company.cin],
              ["International Securities Identification Number (ISIN)", company.isin],
              ["Date of Incorporation", "19 November 1997"],
            ].map(([k, v]) => (
              <div key={k} className="py-6 grid md:grid-cols-[200px_1fr] gap-4">
                <p className="type-label-botanical !text-moss pt-0.5">{k}</p>
                <p className="text-ink text-sm leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
