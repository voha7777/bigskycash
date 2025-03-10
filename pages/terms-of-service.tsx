import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const TermsOfService: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | BigSkyCash.org</title>
        <meta name="description" content="Read BigSkyCash's Terms of Service to understand the terms and conditions that govern your use of our services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal terms, user agreement, BigSkyCash terms" />
      </Head>

      <div className="container-custom section">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-medium">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <p>
              Please read these Terms of Service ("Terms") carefully before using the BigSkyCash.org website (the "Service") operated by BigSkyCash ("us", "we", or "our").
            </p>
            
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">1. Service Description</h2>
            <p>
              BigSkyCash is not a lender and does not make loan or credit decisions. BigSkyCash connects interested persons with a lender from its network of approved lenders. BigSkyCash does not control and is not responsible for the actions or inactions of any lender, is not an agent, representative or broker of any lender, and does not endorse any lender.
            </p>
            
            <p>
              Our Service provides a platform for users to submit loan applications and be connected with potential lenders. We do not guarantee that your loan application will be approved or that you will be matched with a lender.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">2. Eligibility</h2>
            <p>
              To use our Service, you must:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Be at least 18 years of age</li>
              <li>Be a legal resident of the United States</li>
              <li>Have a valid Social Security Number</li>
              <li>Have a regular source of income</li>
              <li>Have an active checking account</li>
              <li>Have a valid email address and phone number</li>
            </ul>
            
            <h2 className="heading-sm mt-8 mb-4">3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">4. Application Process</h2>
            <p>
              By submitting a loan application through our Service, you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Authorize us to share your information with our network of lenders and financial service providers</li>
              <li>Understand that lenders may perform credit checks or verify your information</li>
              <li>Acknowledge that approval for a loan is subject to the lender's criteria and is not guaranteed</li>
              <li>Agree to review and accept the specific terms and conditions provided by the lender if your application is approved</li>
            </ul>
            
            <h2 className="heading-sm mt-8 mb-4">5. Fees and Charges</h2>
            <p>
              BigSkyCash does not charge users a fee for using our Service. However, if you accept a loan offer from a lender, the lender may charge fees, interest, and other costs as disclosed in their loan agreement. We are not responsible for any fees, charges, or terms imposed by lenders.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of BigSkyCash and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of BigSkyCash.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">7. User Content</h2>
            <p>
              Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material. You are responsible for the content that you post to the Service, including its legality, reliability, and appropriateness.
            </p>
            
            <p>
              By posting content to the Service, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Service. You retain any and all of your rights to any content you submit, post, or display on or through the Service and you are responsible for protecting those rights.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">8. Prohibited Uses</h2>
            <p>
              You agree not to use the Service:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>To impersonate or attempt to impersonate BigSkyCash, a BigSkyCash employee, another user, or any other person or entity</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm BigSkyCash or users of the Service</li>
              <li>To submit false, inaccurate, or misleading information in your loan application</li>
              <li>To use the Service for any fraudulent or illegal purpose</li>
            </ul>
            
            <h2 className="heading-sm mt-8 mb-4">9. Disclaimer of Warranties</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>
            
            <p>
              BigSkyCash, its subsidiaries, affiliates, and its licensors do not warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The Service will function uninterrupted, secure, or available at any particular time or location</li>
              <li>Any errors or defects will be corrected</li>
              <li>The Service is free of viruses or other harmful components</li>
              <li>The results of using the Service will meet your requirements</li>
            </ul>
            
            <h2 className="heading-sm mt-8 mb-4">10. Limitation of Liability</h2>
            <p>
              In no event shall BigSkyCash, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your access to or use of or inability to access or use the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              <li>The actions or decisions of any lender with whom you are connected through our Service</li>
            </ul>
            
            <h2 className="heading-sm mt-8 mb-4">11. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless BigSkyCash and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use and access of the Service</li>
              <li>Your violation of any term of these Terms</li>
              <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
              <li>Any claim that your content caused damage to a third party</li>
            </ul>
            
            <h2 className="heading-sm mt-8 mb-4">12. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">13. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">14. Arbitration</h2>
            <p>
              Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by arbitration in New York, New York, using the English language in accordance with the Arbitration Rules and Procedures of the Judicial Arbitration and Mediation Services, Inc. ("JAMS") then in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">15. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">16. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: legal@bigskycash.org<br />
              Phone: +39 3791398291<br />
              Address: 123 Financial Street, Suite 100, New York, NY 10001
            </p>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium">
                By using our Service, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsOfService
