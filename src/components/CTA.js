'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-primary-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block">Start your free trial today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-primary-200">
          No credit card required. Start with a 14-day free trial of the Professional plan. Downgrade or cancel anytime.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50"
            >
              Get started
            </Link>
          </div>
          <div className="ml-3 inline-flex">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-800 hover:bg-primary-900"
            >
              See a demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}