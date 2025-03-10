import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CTA from '../../components/home/CTA'
import StatesList from '../../components/home/StatesList'
import { statesList } from '../../data/states'

const PaydayLoans: NextPage = () => {
  return (
    <>
      <Head>
        <title>Payday Loans | Quick Cash Advances | BigSkyCash.org</title>
        <meta name="description" content="Get fast payday loans from BigSkyCash. Our simple online application process makes it easy to get the cash you need when you need it most." />
        <meta name="keywords" content="payday loans, cash advance, short term loans, emergency loans, quick cash, online loans, same day loans" />
        <link rel="canonical" href="https://bigskycash.org/services/payday-loans" />
      </Head>

      <main>
        <section className="bg-primary-700 text-white py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="heading-xl mb-6">Payday Loans</h1>
                <p className="text-xl mb-8">Quick financial solutions when you need them most. Get funds as soon as the next business day.</p>
                <Link href="#apply-now" className="btn-secondary">
                  Apply Now
                </Link>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Payday Loans" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="heading-lg mb-6">How Our Payday Loans Work</h2>
              <p className="text-lg">Our simple process makes it easy to get the cash you need quickly and without hassle.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="heading-sm mb-3">Apply Online</h3>
                <p>Complete our simple online application in minutes. No paperwork or store visits required.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="heading-sm mb-3">Get Approved</h3>
                <p>Receive a quick decision on your application. Most approvals happen within minutes.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="heading-sm mb-3">Get Your Cash</h3>
                <p>Once approved, receive your funds directly to your bank account as soon as the next business day.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg mb-6">Benefits of Our Payday Loans</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p><strong>Quick Access to Funds:</strong> Get the money you need as soon as the next business day.</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p><strong>Simple Online Process:</strong> Apply from the comfort of your home, 24/7.</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p><strong>No Collateral Required:</strong> Unsecured loans based on your income, not your assets.</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p><strong>Bad Credit Considered:</strong> We look at more than just your credit score.</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p><strong>Transparent Terms:</strong> Clear repayment terms with no hidden fees.</p>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Payday Loan Benefits" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="apply-now">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="heading-lg mb-6">Apply for a Payday Loan Today</h2>
              <p className="text-lg mb-8">Get the financial relief you need with our quick and easy application process.</p>
              <div className="bg-primary-600 text-white p-8 rounded-lg">
                <h3 className="heading-md mb-4">Ready to get started?</h3>
                <p className="mb-6">Our online application takes just minutes to complete, and you could have funds in your account as soon as tomorrow.</p>
                <button className="btn-secondary">Start Your Application</button>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-gray-50">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Common Uses for Payday Loans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-2">Emergency Home Repairs</h3>
                <p>Fix that leaky roof or broken furnace without waiting for your next paycheck.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-2">Medical Expenses</h3>
                <p>Cover unexpected medical bills or prescription costs that can't wait.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-2">Overdue Bills</h3>
                <p>Avoid late fees and service disconnections by paying bills on time.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-2">Car Repairs</h3>
                <p>Get your vehicle back on the road quickly when unexpected repairs arise.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Payday Loans Available in These States</h2>
            <StatesList />
          </div>
        </section>

        <CTA />
      </main>
    </>
  )
}

export default PaydayLoans
