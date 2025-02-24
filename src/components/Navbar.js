'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-600">
                NextSaaS
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/features" className="border-transparent text-gray-500 hover:border-primary-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Features
              </Link>
              <Link href="/pricing" className="border-transparent text-gray-500 hover:border-primary-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Pricing
              </Link>
              <Link href="/about" className="border-transparent text-gray-500 hover:border-primary-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About
              </Link>
              <Link href="/blog" className="border-transparent text-gray-500 hover:border-primary-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Blog
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/login" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              Log in
            </Link>
            <Link href="/signup" className="btn-primary ml-4">
              Get Started
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/features" className="bg-white text-gray-600 hover:bg-gray-50 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              Features
            </Link>
            <Link href="/pricing" className="bg-white text-gray-600 hover:bg-gray-50 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link href="/about" className="bg-white text-gray-600 hover:bg-gray-50 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/blog" className="bg-white text-gray-600 hover:bg-gray-50 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Link href="/login" className="block text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium">
                Log in
              </Link>
              <Link href="/signup" className="btn-primary ml-4">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}