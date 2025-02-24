'use client';

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "This SaaS platform has completely transformed our workflow. We've seen a 40% increase in productivity since implementing it. The analytics features provide valuable insights that have helped us make better decisions.",
      author: {
        name: 'Sarah Johnson',
        role: 'CEO at TechStart',
      },
    },
    {
      content:
        "The customer support is phenomenal. Whenever we've had questions or needed help, the team has been incredibly responsive and helpful. It's rare to find this level of service in the SaaS space.",
      author: {
        name: 'David Chen',
        role: 'CTO at GrowthLabs',
      },
    },
    {
      content:
        "We evaluated several options before choosing this platform, and it's been the best decision we made. The automation features have saved us countless hours of manual work, and the interface is intuitive and easy to use.",
      author: {
        name: 'Emily Rodriguez',
        role: 'Operations Manager at ScaleUp',
      },
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by businesses worldwide
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Don't just take our word for it. See what our customers have to say.
          </p>
        </div>
        <div className="mt-10">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-gray-50 overflow-hidden shadow">
                <div className="px-6 py-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-base text-gray-500 mb-4">"{testimonial.content}"</p>
                  <div className="mt-6">
                    <p className="text-base font-medium text-gray-900">{testimonial.author.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}