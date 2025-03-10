import React, { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`mt-2 text-gray-600 ${isOpen ? 'block' : 'hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

const FAQ: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <FAQItem
              question="How much can I borrow with a payday loan?"
              answer="Loan amounts typically range from $100 to $1,000, depending on your state of residence and income level. First-time borrowers may be eligible for lower amounts, with the opportunity to borrow more after establishing a good repayment history."
            />
            <FAQItem
              question="How quickly can I get my money?"
              answer="After approval, funds are typically deposited into your bank account as soon as the next business day. Applications completed before 11:30 AM ET on weekdays may be eligible for same-day funding in some cases."
            />
            <FAQItem
              question="What are the requirements to qualify for a payday loan?"
              answer="Basic requirements include: being at least 18 years old, having a valid government-issued ID, having an active checking account, providing proof of income, and having a valid email address and phone number. Requirements may vary by state."
            />
            <FAQItem
              question="Can I get a payday loan with bad credit?"
              answer="Yes, we consider factors beyond just your credit score. While we may perform a credit check, having less-than-perfect credit doesn't automatically disqualify you. We look at your current income and ability to repay the loan."
            />
            <FAQItem
              question="How do I repay my loan?"
              answer="Repayment is typically made via automatic withdrawal from the same bank account where your funds were deposited. The repayment date is set for your next payday, usually within 14-30 days of receiving your loan."
            />
            <FAQItem
              question="Is my personal information secure?"
              answer="Yes, we use industry-standard encryption and security measures to protect your personal and financial information. Our systems are regularly updated to ensure the highest level of data protection."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
