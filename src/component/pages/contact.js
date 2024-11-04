import React, { useState } from 'react';
import { db, collection, addDoc } from './firebase';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: new Date(),
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      alert('Thank you for reaching out! We will get back to you soon.');
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error adding document: ', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-#ecf1f7-50 flex items-center justify-center py-20 px-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl w-full flex flex-col lg:flex-row">
        {/* Contact Info Section */}
        <div className="lg:w-1/2 bg-gray-100 p-10 text-gray-700">
          <h2 className="text-3xl font-semibold mb-4">CONTACT US</h2>
          <p className="text-gray-600 mb-4">
            Arrow Structures, <br />
            5, Guru Govind Singh Road, <br />
            R.S Puram, Coimbatore – 641002 <br />
            Tamil Nadu, India
          </p>
          <p className="text-gray-600 mb-4">Contact Number: +91 88705 94827</p>
          <p className="text-gray-600 mb-4">E-Mail: info@arrowstructures.com</p>
          <div className="flex space-x-4 mt-4 text-gray-500">
            <a href="#" className="hover:text-gray-700"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-700"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-gray-700"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-700"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2 p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-gray-500"><i className="fas fa-user"></i></span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 text-gray-800"
              />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-500"><i className="fas fa-envelope"></i></span>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 text-gray-800"
              />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-500"><i className="fas fa-tag"></i></span>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 text-gray-800"
              />
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-gray-500"><i className="fas fa-comment"></i></span>
              <textarea
                name="message"
                placeholder="Your message (optional)"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 text-gray-800 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 mt-6 text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-md hover:from-blue-500 hover:to-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
