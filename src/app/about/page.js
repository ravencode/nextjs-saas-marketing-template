import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">About Us</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">Learn about our mission and the team behind our product.</p>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-500">
            At NextSaaS, we're dedicated to building tools that help businesses grow and thrive in the digital age.
            Our platform combines powerful features with intuitive design to create an experience that delights our users.
          </p>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Team</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="h-48 w-48 mx-auto rounded-full bg-gray-200"></div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Jane Smith</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="h-48 w-48 mx-auto rounded-full bg-gray-200"></div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">John Doe</h3>
              <p className="text-gray-500">CTO & Co-Founder</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="h-48 w-48 mx-auto rounded-full bg-gray-200"></div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Sarah Johnson</h3>
              <p className="text-gray-500">Head of Product</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
              <p className="mt-2 text-gray-500">We constantly push the boundaries of what's possible to deliver cutting-edge solutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Simplicity</h3>
              <p className="mt-2 text-gray-500">We believe that powerful tools don't need to be complicated.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Customer Focus</h3>
              <p className="mt-2 text-gray-500">Everything we build starts with understanding our customers' needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Quality</h3>
              <p className="mt-2 text-gray-500">We're committed to excellence in every aspect of our product.</p>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
      <Footer />
    </div>
  );
}