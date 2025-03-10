import React from 'react'
import Head from 'next/head'

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | BigSkyCash.org</title>
        <meta name="description" content="Read BigSkyCash's Privacy Policy to understand how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, personal information, BigSkyCash privacy" />
      </Head>

      <div className="container-custom section">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-medium">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <p>
              This Privacy Policy describes how BigSkyCash.org ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website, use our services, or otherwise interact with us. Please read this Privacy Policy carefully to understand our practices regarding your information.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="font-bold mt-6 mb-2">1.1 Personal Information</h3>
            <p>
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (such as name, email address, phone number, and mailing address)</li>
              <li>Financial information (such as bank account details, income information, and employment details)</li>
              <li>Identification information (such as Social Security Number, driver's license, or other government-issued ID)</li>
              <li>Demographic information (such as age, date of birth, and gender)</li>
              <li>Login credentials (such as username and password)</li>
            </ul>
            
            <h3 className="font-bold mt-6 mb-2">1.2 Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain information about your device and usage, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Device information (such as IP address, browser type, operating system)</li>
              <li>Usage data (such as pages visited, time spent on pages, links clicked)</li>
              <li>Location information (based on IP address or GPS data if permitted)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
            
            <h2 className="heading-sm mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our services</li>
              <li>To process your loan application and connect you with lenders</li>
              <li>To verify your identity and prevent fraud</li>
              <li>To communicate with you about our services, updates, and promotional offers</li>
              <li>To improve our website, products, and services</li>
              <li>To comply with legal obligations</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To personalize your experience on our website</li>
            </ul>
            
            <h2 className="heading-sm mt-8 mb-4">3. How We Share Your Information</h2>
            <p>
              We may share your personal information with the following categories of third parties:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Lenders and Financial Institutions:</strong> We share your information with lenders in our network to facilitate your loan application.</li>
              <li><strong>Service Providers:</strong> We share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.</li>
              <li><strong>Business Partners:</strong> We may share information with our business partners to offer you certain products, services, or promotions.</li>
              <li><strong>Legal Authorities:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
            </ul>
            
            <h2 className="heading-sm mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities and to remember your preferences. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee the absolute security of your data.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">6. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to correct or update your personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">7. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18, and we do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated Privacy Policy on this page and update the "Last Updated" date at the top of this Privacy Policy. We encourage you to review this Privacy Policy periodically.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mb-6">
              Email: privacy@bigskycash.org<br />
              Phone: +39 3791398291<br />
              Address: 123 Financial Street, Suite 100, New York, NY 10001
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">10. California Privacy Rights</h2>
            <p>
              If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA). For more information about your California privacy rights, please contact us using the information provided above.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">11. International Data Transfers</h2>
            <p>
              Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. If you are located outside the United States and choose to provide information to us, please note that we transfer the information to the United States and process it there.
            </p>
            
            <h2 className="heading-sm mt-8 mb-4">12. Do Not Track Signals</h2>
            <p>
              Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
