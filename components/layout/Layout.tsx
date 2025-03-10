import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'BigSkyCash.org | Fast & Reliable Payday Loans Online',
  description = 'Get fast and reliable payday loans online with BigSkyCash. Apply today for quick approval and receive funds as soon as the next business day.',
  keywords = 'payday loans, quick cash, emergency loans, fast loans, online loans, cash advance, short term loans'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
