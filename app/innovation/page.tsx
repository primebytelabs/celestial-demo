import { Reveal } from "@/components/Reveal";

export default function InnovationPage() {
  return (
    <>
      <section className="bg-paper page-margin pt-40 pb-24 border-b border-line">
        <Reveal>
          <p className="type-label-botanical mb-6">Research & Development</p>
          <h1 className="type-editorial-large text-ink leading-tight max-w-4xl">
            Innovation
          </h1>
          <p className="mt-8 text-xl text-moss leading-relaxed max-w-3xl">
            Our approach is driven by a commitment to quality improvement, manufacturing precision, and evaluating established Ayurvedic formulations.
          </p>
        </Reveal>
      </section>

      <section className="bg-paper page-margin section-gap">
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="type-editorial-title text-ink font-bold mb-6">Development Focus</h2>
            <p className="text-moss text-lg leading-relaxed mb-6">
              Celestial Biolabs continuously monitors and updates its production practices to incorporate modern standardization techniques. We aim to ensure consistency, purity, and safety across all manufacturing batches.
            </p>
            <p className="text-moss text-base leading-relaxed">
              We look forward to sharing further updates regarding our research partnerships and pipeline developments as they are finalized and approved by regulatory bodies.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
