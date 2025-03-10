import React from 'react'

const Features: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">Why Choose BigSkyCash</h2>
          <p className="text-lg">We make getting a payday loan simple, fast, and convenient.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="heading-sm mb-3">Fast Approval</h3>
            <p>Get a decision on your loan application in minutes, not days. Our streamlined process means less waiting and faster access to funds.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="heading-sm mb-3">Secure Process</h3>
            <p>Your personal and financial information is protected with industry-leading security measures. Apply with confidence knowing your data is safe.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="heading-sm mb-3">Simple Requirements</h3>
            <p>No complicated paperwork or extensive documentation needed. Our straightforward requirements make it easy to qualify for a loan.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
