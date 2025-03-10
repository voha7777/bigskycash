import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">BigSkyCash</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 font-medium flex items-center">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
                <Link href="/services/payday-loans" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">
                  Payday Loans
                </Link>
                <Link href="/services/installment-loans" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">
                  Installment Loans
                </Link>
                <Link href="/services/personal-loans" className="block px-4 py-2 text-gray-700 hover:bg-primary-50">
                  Personal Loans
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Apply Button */}
          <Link href="/apply" className="hidden md:block btn-primary">
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
                Home
              </Link>
              <div className="space-y-2">
                <div className="font-medium text-gray-700">Services</div>
                <div className="pl-4 space-y-2">
                  <Link href="/services/payday-loans" className="block text-gray-700 hover:text-primary-600">
                    Payday Loans
                  </Link>
                  <Link href="/services/installment-loans" className="block text-gray-700 hover:text-primary-600">
                    Installment Loans
                  </Link>
                  <Link href="/services/personal-loans" className="block text-gray-700 hover:text-primary-600">
                    Personal Loans
                  </Link>
                </div>
              </div>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
                Contact
              </Link>
              <Link href="/apply" className="btn-primary inline-block text-center">
                Apply Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
