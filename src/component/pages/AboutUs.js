import React from 'react';

const WhoWeAre = () => {
    return (
        <section className="relative bg-white text-gray-800 py-16 px-6 rounded-lg shadow-lg max-w-5xl mx-auto overflow-hidden -mt-14 md:-mt-10">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                    backgroundImage: "url('https://img.freepik.com/free-vector/flat-design-business-planning-concept_23-2149151729.jpg?ga=GA1.1.1688160461.1727348287&semt=ais_siglip')"
                }}
            ></div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-start">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Who We Are
                </h2>
                <p className="text-lg text-gray-700 mb-2 leading-relaxed">
                    Arrow Structure is a leader in innovative structural consultancy and construction solutions. We empower businesses to grow with bespoke strategies and expert insights, ensuring each project aligns perfectly with our clients' unique vision.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    With a deep commitment to transforming the construction industry, Arrow Structure has earned its reputation as a trusted partner, delivering cutting-edge technology and dedication to excellence in every project.
                </p>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-lg text-gray-600">
                    <p>“Innovation, Integrity, and Excellence are at the core of everything we do.”</p>
                    <cite className="block text-gray-500 mt-2">— The Arrow Structure Team</cite>
                </blockquote>
            </div>
        </section>
    );
};

export default WhoWeAre;
