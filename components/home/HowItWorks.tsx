import React from 'react'
import Image from 'next/image'

const HowItWorks: React.FC = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">How It Works</h2>
          <p className="text-lg">Getting a payday loan with BigSkyCash is quick and easy. Follow these simple steps:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-4xl font-bold">1</span>
              </div>
            </div>
            <h3 className="heading-sm mb-3">Apply Online</h3>
            <p>Complete our simple online application in just a few minutes from any device.</p>
          </div>
          
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-4xl font-bold">2</span>
              </div>
            </div>
            <h3 className="heading-sm mb-3">Get Approved</h3>
            <p>Receive a quick decision on your application, often within minutes.</p>
          </div>
          
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-4xl font-bold">3</span>
              </div>
            </div>
            <h3 className="heading-sm mb-3">Review Terms</h3>
            <p>Review and accept your loan terms and conditions electronically.</p>
          </div>
          
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-4xl font-bold">4</span>
              </div>
            </div>
            <h3 className="heading-sm mb-3">Get Your Cash</h3>
            <p>Receive funds directly to your bank account as soon as the next business day.</p>
          </div>
        </div>
        
        <div className="mt-16 bg-primary-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-4">Ready to get started?</h3>
              <p className="mb-6">Our online application takes just minutes to complete, and you could have funds in your account as soon as tomorrow.</p>
              <a href="#apply-now" className="btn-primary">Apply Now</a>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Apply for a payday loan" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
