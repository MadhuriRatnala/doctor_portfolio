import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import BookAppointment from './components/BookAppointment';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Home />
                            <About />
                            <Testimonials />
                            <BookAppointment />
                            <Contact />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/book-appointment" element={<BookAppointment />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};
export default App;