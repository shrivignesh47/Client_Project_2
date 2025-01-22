import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Search, FileCheck, AlertTriangle, ChevronRight } from "lucide-react";

export default function DesignReview() {
  return (
    <div className="flex flex-col min-h-screen bg-#ecf1f7">
      <main className="flex-1">
        {/* Design Review Header */}
        <section className="w-full py-20 md:py-24 lg:py-32 bg-#ecf1f7-100">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-2xl lg:text-6xl bg-clip-text bg-gradient-to-r from-gray-900 to-gray-900">
                Design Review Process
              </h1>
              <p className="max-w-[700px] text-#ecf1f7-600 md:text-xl dark:text-#ecf1f7-400">
                Ensuring design quality, compliance, and addressing potential issues before committing to final construction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Design Review Steps Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-#ecf1f7-100">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
            >
              {/* Step 1: Milestone Assessment */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-#ecf1f7-50 rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Search className="h-12 w-12 text-black" />
                <h2 className="text-2xl font-bold text-center">Milestone Assessment</h2>
                <p className="text-center text-#ecf1f7-600">
                  A design review is a milestone within a project’s design development process, evaluating analysis and design against requirements to verify outcomes of previous activities and address issues before committing to construction drawings.
                </p>
              </div>
              
              {/* Step 2: Professional Standards Review */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-#ecf1f7-50 rounded-lg shadow-lg transition-all hover:shadow-xl">
                <FileCheck className="h-12 w-12 text-black" />
                <h2 className="text-2xl font-bold text-center">Professional Standards Review</h2>
                <p className="text-center text-#ecf1f7-600">
                  A professional review ensures that the end result of a design or investigation meets specific standards, is comprehensive, and has not overlooked potentially critical issues, design errors, or deficiencies.
                </p>
              </div>

              {/* Step 3: Coverage and Compliance */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-#ecf1f7-50 rounded-lg shadow-lg transition-all hover:shadow-xl">
                <AlertTriangle className="h-12 w-12 text-black" />
                <h2 className="text-2xl font-bold text-center">Coverage & Compliance</h2>
                <p className="text-center text-#ecf1f7-600">
                  Reviews may cover all or part of a principal consultant’s design. The process checks that recognized or specified processes of investigation and design have been performed satisfactorily and correctly.
                </p>
              </div>

              {/* Step 4: Scope and Depth Definition */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-#ecf1f7-50 rounded-lg shadow-lg transition-all hover:shadow-xl">
                <CheckCircle2 className="h-12 w-12 text-black" />
                <h2 className="text-2xl font-bold text-center">Scope & Depth Definition</h2>
                <p className="text-center text-#ecf1f7-600">
                  It is vital that the scope and depth of the review are well-defined. Any inconsistencies in compliance with requirements are identified, highlighted, and communicated to the principal consultant to ensure adherence.
                </p>
              </div>

              {/* Step 5: Reporting and Recommendations */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-#ecf1f7-50 rounded-lg shadow-lg transition-all hover:shadow-xl">
                <ChevronRight className="h-12 w-12 text-black" />
                <h2 className="text-2xl font-bold text-center">Reporting & Recommendations</h2>
                <p className="text-center text-#ecf1f7-600">
                  The review process concludes with a detailed report outlining findings, identified issues, and recommendations. This ensures designs adhere to critical standards and support successful project outcomes.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
