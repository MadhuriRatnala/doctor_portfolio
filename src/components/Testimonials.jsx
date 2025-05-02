import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "Exceptional care and professionalism. Highly recommended!",
      role: "Patient"
    },
    {
      name: "Jane Smith",
      text: "The best medical experience I've ever had. Very thorough and caring.",
      role: "Patient"
    },
    {
      name: "Mike Johnson",
      text: "Outstanding service and very knowledgeable staff.",
      role: "Patient"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Patient Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-gray-500 text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;