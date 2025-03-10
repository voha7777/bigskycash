import React from 'react'
import Link from 'next/link'
import { statesList } from '../../data/states'

const StatesList: React.FC = () => {
  // Group states by first letter
  const groupedStates = statesList.reduce((acc, state) => {
    const firstLetter = state.name.charAt(0);
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(state);
    return acc;
  }, {} as Record<string, typeof statesList>);

  // Get sorted letters
  const letters = Object.keys(groupedStates).sort();

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-12">Payday Loans Available in All 50 States</h2>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {letters.map(letter => (
              <a 
                key={letter} 
                href={`#state-group-${letter}`}
                className="w-8 h-8 flex items-center justify-center bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
        
        <div className="space-y-8">
          {letters.map(letter => (
            <div key={letter} id={`state-group-${letter}`} className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-primary-600 pb-2">{letter}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {groupedStates[letter].map(state => (
                  <Link 
                    key={state.abbreviation} 
                    href={`/services/payday-loans/${state.slug}`}
                    className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition hover:bg-primary-50"
                  >
                    <span className="w-8 h-8 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center font-bold mr-3">
                      {state.abbreviation}
                    </span>
                    <span>{state.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Don't see your state? Contact us for more information about our services.</p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StatesList
