import React from 'react'
import { StateInfo } from '../../data/states'

interface StateAdvantagesProps {
  state: StateInfo
}

const StateAdvantages: React.FC<StateAdvantagesProps> = ({ state }) => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-12">Why Choose BigSkyCash for Payday Loans in {state.name}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Approval</h3>
            <p>
              Our streamlined application process means you can get approved quickly, often within minutes. 
              No long waits or complicated paperwork.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Process</h3>
            <p>
              Your personal and financial information is protected with industry-leading security measures. 
              We prioritize your privacy and data security.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Transparent Terms</h3>
            <p>
              No hidden fees or confusing language. We believe in complete transparency, 
              so you'll always know exactly what you're paying.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Funding</h3>
            <p>
              Once approved, funds are typically deposited into your bank account as soon as the next business day, 
              giving you quick access to the cash you need.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Flexible Options</h3>
            <p>
              We understand that every financial situation is unique. That's why we offer flexible loan options 
              tailored to meet your specific needs in {state.name}.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Online Service</h3>
            <p>
              Apply anytime, day or night, from the comfort of your home. Our online platform is available 24/7, 
              making it convenient for busy {state.name} residents.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StateAdvantages
