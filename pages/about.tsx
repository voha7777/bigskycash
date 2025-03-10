import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CTA from '../components/home/CTA'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About BigSkyCash | Your Trusted Payday Loan Provider</title>
        <meta name="description" content="Learn about BigSkyCash and our mission to provide accessible, fast, and reliable payday loans to Americans across the country." />
        <meta name="keywords" content="about BigSkyCash, payday loan company, loan provider, financial services, emergency loans" />
        <link rel="canonical" href="https://bigskycash.org/about" />
      </Head>

      <main>
        <section className="bg-primary-700 text-white py-20">
          <div className="container-custom">
            <h1 className="heading-xl mb-6">About BigSkyCash</h1>
            <p className="text-xl max-w-3xl">Your trusted partner for quick and reliable payday loans across the United States.</p>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg mb-6">Our Mission</h2>
                <p className="text-lg mb-4">
                  At BigSkyCash, we understand that financial emergencies can happen to anyone. Our mission is to provide accessible, 
                  transparent, and fast financial solutions to help you bridge the gap until your next paycheck.
                </p>
                <p className="text-lg mb-4">
                  We believe everyone deserves access to financial services that respect their dignity and provide real solutions 
                  when they're needed most.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="BigSkyCash mission" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-gray-50">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Why Choose BigSkyCash</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-3">Fast Process</h3>
                <p>Quick application and approval process with funds as soon as the next business day.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-3">Secure & Confidential</h3>
                <p>Your information is protected with industry-standard security protocols.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-3">Customer-Focused</h3>
                <p>Dedicated support team ready to assist you throughout the loan process.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="BigSkyCash values" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="heading-lg mb-6">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p><strong>Transparency:</strong> We believe in clear, upfront terms with no hidden fees or surprises.</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p><strong>Accessibility:</strong> Financial services should be available to everyone who needs them.</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p><strong>Reliability:</strong> When you need financial assistance, you can count on us to deliver.</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p><strong>Respect:</strong> We treat every customer with dignity and respect, regardless of their financial situation.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  )
}

export default About
