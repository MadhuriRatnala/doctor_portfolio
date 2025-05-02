import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16"> {/* Added pt-16 for navbar height */}
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop')",
          backgroundAttachment: "fixed"  // This creates a parallax effect
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        <div className="text-center text-white relative z-10 px-4 py-20 md:py-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Dr. Portfolio</h1>
          <p className="text-lg md:text-2xl mb-8">Providing Exceptional Healthcare with Compassion</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <CustomButton
              color="blue"
              onClick={() => navigate('/book-appointment')}
            >
              Book Appointment
            </CustomButton>
            <CustomButton
              color="green"
              onClick={() => navigate('/about')}
            >
              Learn More
            </CustomButton>
          </div>
        </div>
      </section>

      
     
    </div>
  );
};

export default Home;