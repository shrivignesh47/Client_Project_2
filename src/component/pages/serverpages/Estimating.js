import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { DollarSign, FileText, CheckCircle, AlertTriangle, BarChart, Users, Clock } from "lucide-react";

export default function BudgetaryEvaluation() {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate(); // React Router DOM navigate

  const steps = [
    { title: "Initial Cost Estimation", icon: DollarSign },
    { title: "Design Development", icon: FileText },
    { title: "Design Review", icon: CheckCircle },
    { title: "Final Evaluation", icon: AlertTriangle },
  ];

  const additionalContent = [
    {
      title: "Cost Analysis",
      icon: BarChart,
      content: "Our team conducts thorough cost analysis at every stage of the project, ensuring that we identify potential cost-saving opportunities without compromising on quality or functionality.",
    },
    {
      title: "Stakeholder Collaboration",
      icon: Users,
      content: "We believe in close collaboration with all stakeholders. Regular meetings and transparent communication help us align the project goals with budget constraints, leading to more satisfactory outcomes.",
    },
    {
      title: "Timeline Management",
      icon: Clock,
      content: "Effective budgetary evaluation goes hand in hand with timeline management. We ensure that our design and review processes are efficient, minimizing delays that could impact the overall project cost.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Evaluation of Budgetary Building</h1>
          <p className="text-xl text-gray-600">
            Ensuring project success through precise cost estimation and design review
          </p>
        </div>
      </header>

      <main className="px-4 py-16">
        <div className="mb-12 border-2 border-gray-200 p-6 rounded-lg">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Our Approach</h2>
            <p className="text-gray-600">
              The success of the project is based on the cost budgeted by the client, and therefore we design the
              structural elements of the building considering the budgeted cost. Thus, we provide the structural cost
              at initial design stages and ensure either there is no cost over-run or minimal cost variation at
              construction stage.
            </p>
            <p className="text-gray-600">
              A design review is a milestone within a project design development process whereby the analysis and
              design is evaluated against its requirements in order to verify the outcomes of previous activities and
              identify and address the issues before committing to construction drawings.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start mb-8">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    index <= activeStep ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`text-sm py-2 px-4 rounded-md border-2 ${
                      index <= activeStep ? "text-gray-900 border-gray-900" : "text-gray-500 border-gray-300"
                    }`}
                  >
                    {index <= activeStep ? "View Details" : "Mark as Complete"}
                  </button>
                </div>
              </div>
            ))}
            <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gray-200 -z-10" />
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <button className="px-4 py-2 text-sm font-semibold border-b-2 border-gray-300">Key Considerations</button>
            <button className="px-4 py-2 text-sm font-semibold border-b-2 border-gray-300">Benefits</button>
          </div>
          <div>
            <div className="mb-4 p-6 border-2 border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Considerations in Budgetary Evaluation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accurate initial cost estimation</li>
                <li>Continuous monitoring of design changes and their impact on cost</li>
                <li>Regular communication with clients about budget implications</li>
                <li>Exploration of cost-effective design alternatives</li>
                <li>Integration of value engineering principles</li>
              </ul>
            </div>
            <div className="mb-4 p-6 border-2 border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefits of Our Approach</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimized risk of cost overruns</li>
                <li>Improved project predictability</li>
                <li>Enhanced client satisfaction</li>
                <li>Optimized design solutions within budget constraints</li>
                <li>Streamlined construction process</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {additionalContent.map((item, index) => (
            <div key={index} className="border-2 border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <item.icon className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Us */}
        <div className="p-6 border-2 border-gray-900 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Ready to Optimize Your Project Budget?</h3>
          <p className="text-gray-600 mb-6">Let our experts guide you through the process</p>
          <button
            className="w-full py-3 px-6 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </main>
    </div>
  );
}
