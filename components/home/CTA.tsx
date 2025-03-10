import React from 'react'
import Link from 'next/link'

const CTA: React.FC = () => {
  return (
    <section className="section bg-primary-700 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Apply now for a payday loan and get the funds you need as soon as tomorrow.
            Our simple online process makes it quick and easy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/apply" className="btn-secondary">
              Apply Now
            </Link>
            <Link href="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
