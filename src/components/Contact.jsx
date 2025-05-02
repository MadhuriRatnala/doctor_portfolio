import React, { useState } from 'react';
import CustomButton from './CustomButton';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen pt-16">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
                
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2">Address</h3>
                                <p className="text-gray-600">123 Medical Center Drive<br />Healthcare City, HC 12345</p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2">Phone</h3>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                                <p className="text-gray-600">Emergency: +1 (555) 999-9999</p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2">Email</h3>
                                <p className="text-gray-600">info@drportfolio.com</p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2">Hours</h3>
                                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />
                                Saturday: 9:00 AM - 2:00 PM<br />
                                Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                ></textarea>
                            </div>
                            
                            <CustomButton color="blue" type="submit">
                                Send Message
                            </CustomButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;