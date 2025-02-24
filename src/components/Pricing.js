'use client';

import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      frequency: '/month',
      description: 'Perfect for small teams and startups getting started.',
      features: [
        'Up to 5 users',
        'Basic analytics',
        '10GB storage',
        'Email support',
        'API access',
      ],
      buttonText: 'Get started',
      buttonUrl: '/signup?plan=starter',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$79',
      frequency: '/month',
      description: 'Ideal for growing businesses needing more power.',
      features: [
        'Up to 20 users',
        'Advanced analytics',
        '50GB storage',
        'Priority email support',
        'API access',
        'Advanced automation',
        'Custom integrations',
      ],
      buttonText: 'Get started',
      buttonUrl: '/signup?plan=professional',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      frequency: '/month',
      description: 'Advanced features for larger organizations.',
      features: [
        'Unlimited users',
        'Enterprise analytics',
        '500GB storage',
        '24/7 phone support',
        'API access',
        'Advanced automation',
        'Custom integrations',
        'Dedicated account manager',
        'Custom reporting',
      ],
      buttonText: 'Contact sales',
      buttonUrl: '/contact',
      highlighted: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose the plan that works best for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${
                plan.highlighted
                  ? 'border-primary-500 ring-2 ring-primary-500'
                  : 'border-gray-200'
              } flex flex-col rounded-lg shadow-sm overflow-hidden border bg-white`}
            >
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div>
                  <h3
                    className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary-100 text-primary-600"
                    id={`${plan.name.toLowerCase()}-tier`}
                  >
                    {plan.name}
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                  {plan.price}
                  <span className="ml-1 text-2xl font-medium text-gray-500">{plan.frequency}</span>
                </div>
                <p className="mt-5 text-lg text-gray-500">{plan.description}</p>
              </div>
              <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={plan.buttonUrl}
                    className={`${
                      plan.highlighted
                        ? 'btn-primary'
                        : 'btn-secondary'
                    } w-full flex items-center justify-center`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}