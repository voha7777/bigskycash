import React, { useEffect, useRef } from 'react'
import Head from 'next/head'

const ApplyPage: React.FC = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This will run only on the client side
    if (formContainerRef.current) {
      // Create form container div
      const formDiv = document.createElement('div');
      formDiv.id = 'rsForm';
      formContainerRef.current.appendChild(formDiv);
      
      // Create and append the initialization script
      const initScript = document.createElement('script');
      initScript.type = 'text/javascript';
      initScript.innerHTML = `
        var srcURL= 'https://www.rndframe.com/server'; 
        var inputOptions = { 
          UserID: 'ZT4LlEwwo9MoHR4Sd6sYVDeevacfDDdSagmRZFWx_98.', 
          Style: 'STYLE5', 
          FormID: 'INSTALLMENT_STEP', 
          SubID: '', 
          SubID2: '', 
          SubID3: '', 
          Domain: '', 
          Height: 'AUTO', 
          StepAmountSelect: 'buttons',
          TargetDivID: 'rsForm'
        }; 
        
        // Create and append the form script
        var formScript = document.createElement('script');
        formScript.type = 'text/javascript';
        formScript.src = srcURL + '/init.php?vn=' + encodeURIComponent(JSON.stringify(inputOptions));
        document.body.appendChild(formScript);
      `;
      
      document.body.appendChild(initScript);
    }
    
    // Cleanup function
    return () => {
      // Clean up scripts if needed
      const scripts = document.querySelectorAll('script[src*="rndframe.com"]');
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Apply for a Loan | BigSkyCash.org</title>
        <meta name="description" content="Apply for a payday loan with BigSkyCash. Quick and easy application process with fast approval." />
        <meta name="keywords" content="apply for loan, payday loan application, quick loan application, online loan application" />
      </Head>

      <div className="container-custom section">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg text-center mb-8">Apply for a Loan</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <p className="text-lg mb-6">
              Complete the form below to apply for a loan. Our process is quick, secure, and designed to get you the funds you need as soon as possible.
            </p>
            
            {/* Form Container */}
            <div ref={formContainerRef} className="mt-8">
              {/* The form will be loaded here by the script */}
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h2 className="heading-sm mb-4">Important Information</h2>
            <p className="mb-4">
              BigSkyCash is not a lender and does not make loan or credit decisions. BigSkyCash connects interested persons with a lender from its network of approved lenders.
            </p>
            <p>
              By submitting your information, you agree to our <a href="/terms-of-service" className="text-primary-600 hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyPage
