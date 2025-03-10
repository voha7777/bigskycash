import React from 'react'

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="heading-md mb-6">Send Us a Message</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-1 font-medium">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1 font-medium">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
              placeholder="Doe"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
            placeholder="johndoe@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
            placeholder="(123) 456-7890"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
          <select 
            id="subject" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Select a subject</option>
            <option value="loan-inquiry">Loan Inquiry</option>
            <option value="application-status">Application Status</option>
            <option value="repayment">Repayment Question</option>
            <option value="technical-issue">Technical Issue</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea 
            id="message" 
            rows={5} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
            placeholder="How can we help you?"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn-primary w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
