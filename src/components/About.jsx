import  React from 'react';

const About = () => {
    return (
        <div className="min-h-screen pt-16"> {/* Added pt-16 for navbar height */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About Us</h1>
                    
                    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
                        <p className="text-gray-700 mb-6">
                            We are dedicated to providing exceptional healthcare services with compassion and expertise. 
                            Our mission is to improve the quality of life for our patients through personalized care 
                            and cutting-edge medical treatments.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Experience</h2>
                        <p className="text-gray-700 mb-6">
                            With over 15 years of experience in healthcare, our team has successfully treated thousands 
                            of patients. We combine modern medical technology with traditional care approaches to ensure 
                            the best possible outcomes for our patients.
                        </p>

                        </div>

                    
                    
                </div>
            </div>
        </div>
    );
};

export default About;