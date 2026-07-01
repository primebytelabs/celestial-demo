'use client'

import { Reveal } from '@/components/Reveal'
import { company } from '@/lib/content'
import Link from 'next/link'

export function ContactCTASection() {
  return (
    <section id="contact-cta" className="section-gap bg-paper page-margin border-t border-line">
      <Reveal>
        <div className="border border-line bg-mist/50 p-10 md:p-16">
          <div className="grid gap-12 lg:grid-cols-2 items-end">
            <div>
              <p className="type-label-botanical mb-6">09 / Contact</p>
              <h2 className="type-editorial-headline text-ink mb-6">Get in Touch</h2>
              <p className="text-moss text-lg leading-relaxed max-w-md">
                Whether you have trade business enquiries, product questions, or partnership opportunities, our corporate team is ready to assist.
              </p>
            </div>
            
            <div className="flex flex-col gap-6 lg:items-end">
              <Link
                href="/distributors#enquiry"
                className="btn-medical text-center w-full sm:w-auto"
              >
                Submit Trade Enquiry
              </Link>
              
              <div className="text-left lg:text-right space-y-2 mt-4 border-t border-line pt-6 w-full">
                <p className="type-label-botanical !text-moss">General Contact Info</p>
                <p className="text-ink text-sm leading-relaxed max-w-sm lg:ml-auto">
                  {company.registeredOffice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
