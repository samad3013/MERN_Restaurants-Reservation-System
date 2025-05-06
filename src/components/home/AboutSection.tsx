import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-wood-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Chef cooking" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="font-serif text-primary-600 text-xl">20+ Years of Excellence</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Our Culinary Story
              </h2>
              <div className="w-20 h-1 bg-primary-600 mb-6"></div>
              <p className="text-gray-700 mb-4">
                Founded in 2003, Savoria has been serving exquisite cuisines from around the world. 
                Our restaurant brings together the finest ingredients and culinary traditions to create 
                unforgettable dining experiences.
              </p>
              <p className="text-gray-700 mb-4">
                Each dish at Savoria tells a story - a story of tradition, innovation, and passion. 
                Our team of international chefs brings authentic flavors to your table, prepared with 
                modern techniques and presented with artistic flair.
              </p>
              <p className="text-gray-700">
                We believe that a great meal is about more than just food. It's about the atmosphere, 
                the service, and the company. That's why we've created a space where you can relax, 
                connect, and enjoy remarkable cuisine.
              </p>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary-600">15+</p>
                  <p className="text-gray-600 text-sm">Expert Chefs</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary-600">8</p>
                  <p className="text-gray-600 text-sm">Unique Cuisines</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary-600">4.9</p>
                  <p className="text-gray-600 text-sm">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;