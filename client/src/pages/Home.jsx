import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
    {/* Hero Section */}
    <section className="bg-blue-950 text-white py-16 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Your LMS</h1>
      <p className="text-lg mb-8">
        Access high-quality courses, track your progress, and excel in your learning journey.
      </p>
     <Link to={'/courses'}>
     <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
        Get Started
      </button></Link>
    </section>

    {/* Features Section */}
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
         
          <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
          <p className="text-gray-600">
            Learn from top industry experts with years of experience.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          
          <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
          <p className="text-gray-600">
            Access courses anytime, anywhere, on any device.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
         
          <h3 className="text-xl font-bold mb-2">Certification</h3>
          <p className="text-gray-600">
            Get recognized certifications upon course completion.
          </p>
        </div>
      </div>
    </section>

    
    

    {/* Call to Action Section */}
    <section className="py-16 px-4 text-center bg-blue-950 text-white">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Start Learning?
      </h2>
      <p className="text-lg mb-8">
        Join thousands of learners and boost your career today!
      </p>
     <Link to={'/auth/signup'}>
     <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
        Sign Up Now
      </button>
     </Link>
    </section>
  </div>
  )
}
