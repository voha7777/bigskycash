import type { NextPage } from 'next'
import Head from 'next/head'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import ContactHero from '../components/contact/ContactHero'
import FAQ from '../components/home/FAQ'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | BigSkyCash.org</title>
        <meta name="description" content="Get in touch with BigSkyCash for any questions about our payday loan services. Our customer support team is ready to help you." />
        <meta name="keywords" content="contact BigSkyCash, payday loan help, loan support, customer service, payday loan questions" />
        <link rel="canonical" href="https://bigskycash.org/contact" />
      </Head>

      <main>
        <ContactHero />
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
        <FAQ />
      </main>
    </>
  )
}

export default Contact
