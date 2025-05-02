import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-bold text-blue-600">
                        Dr. Portfolio
                    </Link>
                    
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                    >
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            {isOpen ? (
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            ) : (
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            )}
                        </svg>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                        <Link to="/testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</Link>
                        <Link to="/book-appointment" className="text-gray-700 hover:text-blue-600">Book Appointment</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
                    <div className="flex flex-col space-y-3">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsOpen(false)}>About</Link>
                        <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsOpen(false)}>Testimonials</Link>
                        <Link to="/book-appointment" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsOpen(false)}>Book Appointment</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

