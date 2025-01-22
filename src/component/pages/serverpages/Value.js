"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

export default function Component() {
  const [activeTab, setActiveTab] = useState("introduction");
  const navigate = useNavigate(); // Initialize useNavigate

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const tabs = [
    { value: "introduction", label: "Introduction" },
    { value: "process", label: "Process" },
    { value: "approach", label: "Our Approach" },
    { value: "benefits", label: "Benefits" },
    { value: "challenges", label: "Challenges" },
    { value: "certification", label: "Certification" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Header */}
      <header className="py-8 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">Value Engineering & Certification</h1>
          <p className="mt-2 text-xl text-gray-600">
            Building Stability Check and Design Optimization
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        {/* Tabs */}
        <div className="space-y-8">
          <div className="grid w-full grid-cols-2 lg:grid-cols-6 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                className={`py-2 px-4 text-center rounded ${
                  activeTab === tab.value ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Animated Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={tabVariants}
            >
              {/* Content for each tab */}
              {activeTab === "introduction" && (
                <div className="p-6 bg-white shadow rounded-lg">
                  <h2 className="text-2xl font-semibold">Introduction to Value Engineering</h2>
                  <p className="text-gray-600 mt-2">Understanding the core principles and importance</p>
                  <p className="mt-4">
                    Value Engineering (VE) is a systematic and organized approach to providing
                    necessary functions in a project at the lowest cost. It promotes the
                    substitution of materials and methods with less expensive alternatives, without
                    sacrificing functionality.
                  </p>
                  <p className="mt-4">
                    In the context of building stability, VE plays a crucial role in ensuring that
                    structures are not only safe and stable but also cost-effective and efficient in
                    their design and construction.
                  </p>
                </div>
              )}

              {activeTab === "process" && (
                <div className="p-6 bg-white shadow rounded-lg">
                  <h2 className="text-2xl font-semibold">Value Engineering Process</h2>
                  <p className="text-gray-600 mt-2">Enhancing design efficacy and efficiency</p>
                  <p className="mt-4">The Value Engineering process involves several key steps:</p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>Information Gathering: Collect all relevant data about the project.</li>
                    <li>Function Analysis: Identify the primary and secondary functions of the project.</li>
                    <li>Creative Phase: Generate alternative ways to perform the required functions.</li>
                    <li>Evaluation Phase: Assess the alternatives based on cost, performance, and reliability.</li>
                    <li>Development Phase: Develop the best alternatives into fully-fledged proposals.</li>
                    <li>Presentation Phase: Present the proposals to stakeholders for approval.</li>
                  </ol>
                </div>
              )}

              {activeTab === "approach" && (
                <div className="p-6 bg-white shadow rounded-lg">
                  <h2 className="text-2xl font-semibold">Our Approach to Value Engineering</h2>
                  <ul className="space-y-4 mt-4">
                    {[
                      "Verify appropriate assumptions and standards in existing designs",
                      "Ensure sound engineering principles are applied throughout the process",
                      "Justify recommended alternate solutions with comprehensive analysis",
                      "Aim for efficient and economical design without compromising on safety",
                      "Collaborate closely with stakeholders to ensure all requirements are met",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "benefits" && (
                <div className="p-6 bg-white shadow rounded-lg">
                  <h2 className="text-2xl font-semibold">Benefits of Value Engineering</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {[
                      "Cost reduction without sacrificing quality",
                      "Improved performance and functionality",
                      "Enhanced quality through innovative solutions",
                      "Optimized use of resources and materials",
                      "Increased project value for stakeholders",
                      "Reduced long-term maintenance costs",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-blue-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "challenges" && (
                <div className="p-6 bg-white shadow rounded-lg">
                  <h2 className="text-2xl font-semibold">Challenges in Value Engineering</h2>
                  <ul className="space-y-4 mt-4">
                    {[
                      "Balancing cost reduction with maintaining or improving quality",
                      "Overcoming resistance to change from stakeholders",
                      "Ensuring all safety and regulatory requirements are met",
                      "Managing the time constraints of the VE process",
                    ].map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "certification" && (
                <div className="p-6 bg-white shadow rounded-lg">
                  <h2 className="text-2xl font-semibold">Building Stability Certification</h2>
                  <p className="mt-4">
                    Our Building Stability Certification process ensures that structures meet all
                    necessary safety and stability requirements. This involves:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Comprehensive structural analysis</li>
                    <li>On-site inspections and testing</li>
                    <li>Review of construction materials and methods</li>
                    <li>Assessment of environmental factors and potential risks</li>
                    <li>Verification of compliance with local building codes and standards</li>
                  </ul>
                  <p className="mt-4">
                    Upon successful completion of all checks, we issue a Building Stability
                    Certificate, providing assurance of the structure's integrity and safety.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-12 text-center">
        <button
          className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg text-lg flex items-center justify-center"
          onClick={() => navigate("/contact")} // Redirect to /contactus
        >
          Request a Consultation
          <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
      </main>
    </div>
  );
}
