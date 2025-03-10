import React, { useState } from 'react'
import { StateInfo } from '../../data/states'

interface StateFAQProps {
  state: StateInfo
}

interface FAQItem {
  question: string;
  answer: string;
}

const StateFAQ: React.FC<StateFAQProps> = ({ state }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: `What are the requirements for a payday loan in ${state.name}?`,
      answer: `To qualify for a payday loan in ${state.name}, you typically need to be at least 18 years old, have a valid government-issued ID, provide proof of income, have an active checking account, and provide a working phone number and email address. Specific requirements may vary based on lender and local regulations.`
    },
    {
      question: `How much can I borrow with a payday loan in ${state.name}?`,
      answer: `In ${state.name}, payday loan amounts typically range from $100 to $500, though some lenders may offer up to $1,000 depending on your income and the specific regulations in ${state.name}. The maximum loan amount is determined by state law and your ability to repay.`
    },
    {
      question: `How quickly can I receive funds from a payday loan in ${state.name}?`,
      answer: `After approval, funds are typically deposited into your bank account as soon as the next business day. In some cases, same-day funding may be available if your application is approved early in the day and your bank accepts expedited transfers.`
    },
    {
      question: `What is the repayment period for payday loans in ${state.name}?`,
      answer: `In ${state.name}, payday loans typically have a repayment period of 14 to 30 days, coinciding with your next payday. Some lenders may offer extended payment plans if you're unable to repay on the due date, but this varies by lender and is subject to ${state.name} regulations.`
    },
    {
      question: `Can I get a payday loan with bad credit in ${state.name}?`,
      answer: `Yes, many payday lenders in ${state.name} don't rely heavily on traditional credit scores. Instead, they focus more on your current income and ability to repay. While some lenders may perform a credit check, having bad credit doesn't automatically disqualify you from obtaining a payday loan.`
    },
    {
      question: `Are there any restrictions on payday loans in ${state.name}?`,
      answer: `${state.name} has specific regulations governing payday loans, including limits on loan amounts, fees, and repayment terms. These regulations are designed to protect consumers. It's important to work with a licensed lender who complies with all ${state.name} state laws regarding payday lending.`
    },
    {
      question: `Can I have multiple payday loans at once in ${state.name}?`,
      answer: `${state.name} regulations may limit the number of payday loans you can have simultaneously. It's generally not recommended to take out multiple payday loans at once, as this can lead to a cycle of debt that becomes difficult to escape. Always consider your ability to repay before taking out any loan.`
    },
    {
      question: `What happens if I can't repay my payday loan on time in ${state.name}?`,
      answer: `If you can't repay your payday loan on time in ${state.name}, you may incur late fees and additional interest charges. Some lenders offer extensions or payment plans. It's best to contact your lender immediately if you anticipate difficulty in repaying your loan to discuss your options and avoid further penalties.`
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-12">Frequently Asked Questions About Payday Loans in {state.name}</h2>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center ${
                  openIndex === index ? 'bg-primary-600 text-white' : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="bg-white p-4 rounded-b-lg shadow-md">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Have more questions about payday loans in {state.name}?</p>
          <button className="btn-primary">Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default StateFAQ
