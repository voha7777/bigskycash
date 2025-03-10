import React from 'react'
import { StateInfo } from '../../data/states'

interface StateStatsProps {
  state: StateInfo
}

const StateStats: React.FC<StateStatsProps> = ({ state }) => {
  return (
    <section className="section bg-primary-700 text-white">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-12">Payday Loan Statistics in {state.name}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">$300</div>
            <p className="text-xl">Average Loan Amount</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">14</div>
            <p className="text-xl">Average Loan Term (Days)</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">24h</div>
            <p className="text-xl">Average Funding Time</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">92%</div>
            <p className="text-xl">Customer Satisfaction</p>
          </div>
        </div>
        
        <div className="mt-12 bg-primary-800 p-6 rounded-lg">
          <h3 className="heading-sm mb-4">Did You Know?</h3>
          <p className="text-lg">
            In {state.name}, approximately 12 million Americans use payday loans annually. These loans provide critical 
            financial support during emergencies when traditional banking options may not be available or sufficient.
          </p>
        </div>
      </div>
    </section>
  )
}

export default StateStats
