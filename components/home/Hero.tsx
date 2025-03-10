import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-primary-700 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image 
          src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="Background" 
          fill
          className="object-cover"
        />
      </div>
      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="heading-xl mb-6">
              Fast & Reliable Payday Loans When You Need Them Most
            </h1>
            <p className="text-xl mb-8">
              Get the financial relief you need with our quick and easy online payday loans. Apply today and receive funds as soon as tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#apply-now" className="btn-secondary">
                Apply Now
              </Link>
              <Link href="/services/payday-loans" className="bg-white text-primary-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition duration-300 text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-dark">
            <h2 className="text-2xl font-bold mb-4 text-primary-700">Quick Application</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="loan-amount" className="block mb-1 font-medium">Loan Amount</label>
                <select id="loan-amount" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="100">$100</option>
                  <option value="200">$200</option>
                  <option value="300">$300</option>
                  <option value="400">$400</option>
                  <option value="500">$500</option>
                  <option value="600">$600</option>
                  <option value="700">$700</option>
                  <option value="800">$800</option>
                  <option value="900">$900</option>
                  <option value="1000">$1,000</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="johndoe@example.com" />
              </div>
              <div>
                <label htmlFor="state" className="block mb-1 font-medium">State</label>
                <select id="state" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">Select your state</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  {/* More states would be added here */}
                </select>
              </div>
              <button type="submit" className="w-full btn-secondary">Get Started</button>
            </form>
            <p className="text-xstext-gray-500 mt-4 text-center">
              By submitting, you agree to our terms and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
