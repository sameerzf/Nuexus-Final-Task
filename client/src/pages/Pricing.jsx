import React, { useState } from 'react'

export default function Pricing() {
    const pricingPlans = [
        {
          title: "Basic",
          price: "Free",
          features: [
            "Access to free courses",
            "Community support",
            "Basic course progress tracking",
          ],
          buttonText: "Get Started",
          buttonStyle: "bg-blue-500 hover:bg-blue-700",
        },
        {
          title: "Pro",
          price: "$19/month",
          features: [
            "Access to all courses",
            "Personalized learning plans",
            "Detailed progress tracking",
            "Priority support",
          ],
          buttonText: "Subscribe Now",
          buttonStyle: "bg-green-500 hover:bg-green-700",
        },
        {
          title: "Enterprise",
          price: "Custom Pricing",
          features: [
            "Custom course creation",
            "Team progress tracking",
            "Dedicated support",
            "Advanced analytics",
          ],
          buttonText: "Contact Us",
          buttonStyle: "bg-yellow-500 hover:bg-yellow-700",
        },
      ];
  return (
    <div className="min-h-screen bg-gray-100 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Pricing Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border hover:border-blue-400 transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {plan.title}
            </h2>
            <p className="text-xl font-bold text-gray-900 mb-6">
              {plan.price}
            </p>
            <ul className="mb-6 space-y-3">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-gray-600 flex items-center gap-2"
                >
                  <span className="text-green-500">✔</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 text-white font-semibold rounded-lg ${plan.buttonStyle}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
