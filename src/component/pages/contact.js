import { useState } from 'react'
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react'

export default function ArrowStructuresMinimalistContact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic goes here
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-# flex items-center justify-center p-4 mt-20">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-bold text-black mb-4">Arrow Structures</h1>
              <p className="text-gray-600 text-lg">Building dreams, one structure at a time.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-black w-6 h-6 mt-1" />
                <p className="text-gray-600">5, Guru Govind Singh Road, R.S Puram, Coimbatore – 641002, Tamil Nadu, India</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-black w-6 h-6" />
                <a href="tel:+918870594827" className="text-gray-600">+91 88705 94827</a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-black w-6 h-6" />
                <a href="mailto:info@arrowstructures.com" className="text-gray-600">info@arrowstructures.com</a>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-black mb-4">Business Hours</h2>
              <div className="space-y-2">
                <p className="text-gray-600">Monday - Saturday: 9:30 AM - 6:30 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-semibold text-black mb-6">Get in Touch</h2>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-3 rounded flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-black mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">We've received your message and will get back to you soon.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-black text-white p-3 rounded flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                >
                  Send Another Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
