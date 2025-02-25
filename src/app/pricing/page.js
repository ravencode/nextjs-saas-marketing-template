import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import Pricing from '../../components/Pricing';

export default function PricingPage() {
  return (
    <div className="bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Pricing Plans</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">Choose the perfect plan for your business needs.</p>
        </div>
      </div>
      
      <Pricing />
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Can I change my plan later?</h3>
              <p className="mt-2 text-gray-500">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected on your next billing cycle.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">What payment methods do you accept?</h3>
              <p className="mt-2 text-gray-500">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">Is there a free trial?</h3>
              <p className="mt-2 text-gray-500">Yes, all plans come with a 14-day free trial. No credit card required to start.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">What happens when my trial ends?</h3>
              <p className="mt-2 text-gray-500">At the end of your trial, you'll be asked to select a plan to continue using our service. Your data will be preserved.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">Do you offer discounts for non-profits?</h3>
              <p className="mt-2 text-gray-500">Yes, we offer special pricing for non-profit organizations and educational institutions. Please contact our sales team for details.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">Can I get a refund?</h3>
              <p className="mt-2 text-gray-500">We offer a 30-day money-back guarantee for all plans. If you're not satisfied, contact our support team within 30 days of purchase.</p>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
      <Footer />
    </div>
  );
}