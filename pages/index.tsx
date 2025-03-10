import { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import HowItWorks from '../components/home/HowItWorks'
import Benefits from '../components/home/Benefits'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import CTA from '../components/home/CTA'
import StatesList from '../components/home/StatesList'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BigSkyCash.org | Fast & Reliable Payday Loans Online</title>
        <meta name="description" content="Get fast and reliable payday loans online with BigSkyCash. Apply today for quick approval and receive funds as soon as the next business day." />
        <meta name="keywords" content="payday loans, quick cash, emergency loans, fast loans, online loans, cash advance, short term loans" />
        <link rel="canonical" href="https://bigskycash.org/" />
        <meta property="og:title" content="BigSkyCash.org | Fast & Reliable Payday Loans Online" />
        <meta property="og:description" content="Get fast and reliable payday loans online with BigSkyCash. Apply today for quick approval and receive funds as soon as the next business day." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bigskycash.org/" />
      </Head>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <StatesList />
        <FAQ />
        <CTA />
      </main>
    </>
  )
}

export default Home
