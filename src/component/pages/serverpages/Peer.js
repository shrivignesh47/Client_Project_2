'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Search, FileCheck, AlertTriangle, ArrowRight, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const AuditIcon = ({ icon: Icon, title }) => (
  <div className="flex items-center space-x-2 text-primary">
    <Icon size={24} />
    <span className="font-semibold">{title}</span>
  </div>
)

export default function FreshPeerReviewAudit() {
  const [activeTab, setActiveTab] = useState("design")

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-slate-900">
      <motion.header 
        className="bg-white shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-8 md:py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
            Peer Review Audit
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl">
            Ensuring Excellence in Existing Building Design
          </p>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-16 space-y-20">
        <motion.section {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-slate-700">
            Our peer review audit process ensures that existing building designs meet the highest standards of safety, efficiency, and compliance. We provide a comprehensive evaluation to identify and address potential issues before they become costly problems.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2">
            <span>Schedule an Audit</span> 
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </motion.section>

        <motion.section {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Our Audit Process</h2>

          {/* Tabs */}
          <div className="w-full">
            <div className="flex space-x-4 justify-center mb-8">
              <button 
                onClick={() => setActiveTab("design")}
                className={`px-4 py-2 font-semibold ${activeTab === "design" ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-500"}`}
              >
                Design Review
              </button>
              <button 
                onClick={() => setActiveTab("professional")}
                className={`px-4 py-2 font-semibold ${activeTab === "professional" ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-500"}`}
              >
                Professional Review
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              {activeTab === "design" && (
                <div>
                  <AuditIcon icon={CheckCircle2} title="Design Review" />
                  <p className="text-lg mb-4 text-slate-700">
                    A design review is a milestone within a project design development process whereby the analysis and design is evaluated against its requirements in order to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li>Verify the outcomes of previous activities</li>
                    <li>Identify and address issues before committing to construction drawings</li>
                  </ul>
                </div>
              )}
              {activeTab === "professional" && (
                <div>
                  <AuditIcon icon={Search} title="Professional Review" />
                  <p className="text-lg mb-4 text-slate-700">
                    A professional review is a process that is instituted to ensure that the end result of a design or investigation:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li>Meets particular standards</li>
                    <li>Is comprehensive</li>
                    <li>Has not overlooked potentially critical issues or design errors</li>
                    <li>Addresses any design deficiencies</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Scope of Review</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-lg mb-6 text-slate-700">
              A review may cover part or all of a principal consultant's design and will generally be checking that recognized or specified processes of investigation and design have been performed satisfactorily and correctly.
            </p>
            <div className="space-y-4">
              {[
                "It is deemed necessary and vital that the scope and depth of the review is well defined.",
                "Any inconsistency in compliance with the above requirement shall be identified and highlighted to the principal consultant.",
                "We ensure such compliances are adhered to throughout the review process."
              ].map((text, index) => (
                <div key={index} className="flex items-start bg-slate-50 p-4 rounded-lg">
                  <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-blue-600" />
                  <p className="text-lg text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Benefits of Our Peer Review Audit</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FileCheck, title: "Quality Assurance", content: "Ensures that the design meets all necessary standards and requirements, providing peace of mind for stakeholders." },
              { icon: AlertTriangle, title: "Risk Mitigation", content: "Identifies potential issues early in the process, reducing the risk of costly errors during construction or operation." },
              { icon: CheckCircle2, title: "Compliance Verification", content: "Confirms that the design complies with all relevant codes, regulations, and industry best practices." }
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <AuditIcon icon={item.icon} title={item.title} />
                <p className="text-slate-600">{item.content}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="bg-blue-600 text-white rounded-lg p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Ready to Ensure Your Building's Integrity?</h2>
          <p className="text-xl text-center mb-8">
            Our comprehensive peer review audits provide the assurance you need for your existing building designs.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-slate-100 flex items-center justify-center space-x-2">
              <span>Contact Us Today</span> 
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
