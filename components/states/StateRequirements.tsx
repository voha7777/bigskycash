import React from 'react'
import { StateInfo } from '../../data/states'

interface StateRequirementsProps {
  state: StateInfo
}

const StateRequirements: React.FC<StateRequirementsProps> = ({ state }) => {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-12">Requirements for Payday Loans in {state.name}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-sm mb-6">Eligibility Requirements</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold">Age Requirement:</span> You must be at least 18 years old.
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold">Residency:</span> You must be a resident of {state.name} with a valid address.
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold">Income:</span> You must have a regular source of income with verification (pay stubs, bank statements, etc.).
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold">Bank Account:</span> You must have an active checking account in your name.
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold">Contact Information:</span> You must provide a valid phone number and email address.
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold">Identification:</span> You must have a valid government-issued ID (driver's license, state ID, etc.).
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="heading-sm mb-6">Required Documentation</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <span className="font-bold">Personal Identification:</span> A copy of your driver's license, state ID, or passport.
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <span className="font-bold">Proof of Income:</span> Recent pay stubs, bank statements, or benefit letters.
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <span className="font-bold">Proof of Address:</span> Utility bills, lease agreement, or other official mail showing your {state.name} address.
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <span className="font-bold">Bank Account Information:</span> A voided check or bank statement showing your account and routing numbers.
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <span className="font-bold">Social Security Number:</span> Your SSN or the last 4 digits may be required for verification purposes.
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <span className="font-bold">Contact References:</span> Names and contact information for personal references may be requested.
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <h3 className="heading-sm mb-4">{state.name} Payday Loan Regulations</h3>
          <p className="mb-4">
            In {state.name}, payday loans are regulated to protect consumers. These regulations may include limits on:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maximum loan amounts</li>
            <li>Loan terms and repayment periods</li>
            <li>Finance charges and interest rates</li>
            <li>Number of rollovers or extensions allowed</li>
            <li>Cooling-off periods between loans</li>
          </ul>
          <p className="mt-4">
            At BigSkyCash, we strictly adhere to all {state.name} regulations to ensure you receive a fair and transparent payday loan experience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default StateRequirements
