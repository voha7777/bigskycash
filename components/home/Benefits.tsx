import React from 'react'
import Image from 'next/image'

const Benefits: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">Benefits of Payday Loans</h2>
          <p className="text-lg">Payday loans can provide quick financial relief when you need it most.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="heading-md mb-6">Quick Financial Relief</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Fast Access to Funds:</strong> Get the money you need quickly, often by the next business day.</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Simple Application Process:</strong> Apply online in minutes without complicated paperwork.</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>No Collateral Required:</strong> Unsecured loans that don't require you to put up assets.</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Bad Credit Considered:</strong> Even with less-than-perfect credit, you may still qualify.</p>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative h-80 rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Payday Loan Benefits" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Payday Loan Uses" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="heading-md mb-6">Common Uses for Payday Loans</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Emergency Expenses:</strong> Cover unexpected costs like medical bills or car repairs.</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Avoid Late Fees:</strong> Pay bills on time and avoid costly late payment penalties.</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Bridge Until Payday:</strong> Cover essential expenses when you're between paychecks.</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Home or Appliance Repairs:</strong> Fix essential items in your home without delay.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
