'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Thanks! We will contact you soon.');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        alert('Error sending message! Please try again.');
      }
    } catch (error) {
      alert('Error sending message! Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-inner-container">
        <div className="contact-header">
          <h1 className="section-heading">get in touch</h1>
        </div>
        
        <div className="contact-content">
          <div className="contact-map">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711243.17762776!2d64.4398422293091!3d20.011408266548177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1644684739958!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
          
          <div className="contact-form">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                className="contact-form-input" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
              <input 
                type="tel" 
                name="phone" 
                pattern="[0-9]{10}" 
                required 
                placeholder="Phone Number" 
                maxLength={10} 
                className="contact-form-input"
                value={formData.phone}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                className="contact-form-input" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
              <textarea 
                placeholder="Your Message" 
                name="message" 
                rows={5}
                className="contact-form-textarea" 
                required 
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="contact-form-button">
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;