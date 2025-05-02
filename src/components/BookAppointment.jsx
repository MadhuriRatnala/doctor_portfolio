import React, { useState } from 'react';
import CustomButton from './CustomButton';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="book-appointment" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-lg"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Time</label>
              <input
                type="time"
                className="w-full p-3 border rounded-lg"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Reason for Visit</label>
            <textarea
              className="w-full p-3 border rounded-lg"
              rows="4"
              value={formData.reason}
              onChange={(e) => setFormData({...formData, reason: e.target.value})}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <CustomButton color="blue" type="submit">
              Schedule Appointment
            </CustomButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;