import { CinematicHero } from '@/components/CinematicHero'
import { AboutSection } from '@/components/AboutSection'
import { ExpertiseSection } from '@/components/ExpertiseSection'
import { ManufacturingSection } from '@/components/ManufacturingSection'
import { QualitySection } from '@/components/QualitySection'
import { FeaturedCategoriesSection } from '@/components/FeaturedCategoriesSection'
import { ResearchSection } from '@/components/ResearchSection'
import { BotanicalLibrarySection } from '@/components/BotanicalLibrarySection'
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection'
import { LatestNewsSection } from '@/components/LatestNewsSection'
import { ContactCTASection } from '@/components/ContactCTASection'

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <CinematicHero />

      {/* 2. About Celestial Biolabs */}
      <AboutSection />

      {/* 3. Our Expertise */}
      <ExpertiseSection />

      {/* 4. Manufacturing Excellence */}
      <ManufacturingSection />

      {/* 5. Quality & Compliance */}
      <QualitySection />

      {/* 6. Featured Product Categories */}
      <FeaturedCategoriesSection />

      {/* 7. Research & Innovation */}
      <ResearchSection />

      {/* 7.1. Botanical Library Drawer */}
      <BotanicalLibrarySection />

      {/* 8. Why Choose Celestial Biolabs */}
      <WhyChooseUsSection />

      {/* 9. Latest News (placeholder for CMS) */}
      <LatestNewsSection />

      {/* 10. Contact CTA */}
      <ContactCTASection />
    </>
  )
}
