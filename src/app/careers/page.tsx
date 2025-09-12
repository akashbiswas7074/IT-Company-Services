'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    status: 'Web Designer',
    experience: '',
    details: '',
    file: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('status', formData.status);
    formDataToSend.append('experience', formData.experience);
    formDataToSend.append('details', formData.details);
    if (formData.file) {
      formDataToSend.append('file', formData.file);
    }

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (response.ok) {
        alert('Thanks! We will contact you soon.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          status: 'Web Designer',
          experience: '',
          details: '',
          file: null
        });
      } else {
        alert('Error sending application! Please try again.');
      }
    } catch (error) {
      alert('Error sending application! Please try again.');
    }
  };

  return (
    <main>
      <Header />
      <section id="home" className="home" style={{ minHeight: '70vh', backgroundImage: "url('/images/img3.jpg')" }}>
      <h2>Home / Careers</h2>
      {/* Hero Section */}
      
        <div className="careers-hero-content">
          <p className="careers-breadcrumb">Home / Careers</p>
          </div>
      </section>

      {/* Careers Form Section */}
      <section className="careers-container">
        <div className="careers-inner-container">
          <div className="careers-header">
            <h1 className="section-heading">career opportunities</h1>
          
          </div>
          
          <div className="careers-form-container">
            <form onSubmit={handleSubmit} className="careers-form">
              {/* Personal Information */}
              <div className="careers-form-row">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  className="careers-form-input" 
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
                  className="careers-form-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                className="careers-form-input" 
                required 
                value={formData.email}
                onChange={handleChange}
              />

              {/* Position Selection */}
              <div className="careers-radio-group">
                <h3 className="careers-radio-group-title">Apply For Which Position?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <label className="careers-radio-item">
                    <input 
                      type="radio" 
                      name="status" 
                      value="Web Designer"
                      checked={formData.status === 'Web Designer'}
                      onChange={handleChange}
                      className="careers-radio-input"
                    />
                    <span className="careers-radio-label">Web Designer</span>
                  </label>
                  <label className="careers-radio-item">
                    <input 
                      type="radio" 
                      name="status" 
                      value="Web Developer"
                      checked={formData.status === 'Web Developer'}
                      onChange={handleChange}
                      className="careers-radio-input"
                    />
                    <span className="careers-radio-label">Web Developer</span>
                  </label>
                  <label className="careers-radio-item">
                    <input 
                      type="radio" 
                      name="status" 
                      value="Mobile App Designer"
                      checked={formData.status === 'Mobile App Designer'}
                      onChange={handleChange}
                      className="careers-radio-input"
                    />
                    <span className="careers-radio-label">Mobile App Designer</span>
                  </label>
                  <label className="careers-radio-item">
                    <input 
                      type="radio" 
                      name="status" 
                      value="Mobile App Developer"
                      checked={formData.status === 'Mobile App Developer'}
                      onChange={handleChange}
                      className="careers-radio-input"
                    />
                    <span className="careers-radio-label">Mobile App Developer</span>
                  </label>
                  <label className="careers-radio-item">
                    <input 
                      type="radio" 
                      name="status" 
                      value="Digital Marketer"
                      checked={formData.status === 'Digital Marketer'}
                      onChange={handleChange}
                      className="careers-radio-input"
                    />
                    <span className="careers-radio-label">Digital Marketer</span>
                  </label>
                  <label className="careers-radio-item">
                    <input 
                      type="radio" 
                      name="status" 
                      value="UI/UX Designer"
                      checked={formData.status === 'UI/UX Designer'}
                      onChange={handleChange}
                      className="careers-radio-input"
                    />
                    <span className="careers-radio-label">UI/UX Designer</span>
                  </label>
                </div>
              </div>

              <input 
                type="number" 
                name="experience" 
                required 
                placeholder="Years of Experience" 
                className="careers-form-input"
                value={formData.experience}
                onChange={handleChange}
                min="0"
                max="50"
              />
              
              <textarea 
                placeholder="Tell us about yourself, your skills, and why you want to join our team..." 
                name="details" 
                rows={5}
                className="careers-form-textarea" 
                required 
                value={formData.details}
                onChange={handleChange}
              ></textarea>

              {/* File Upload */}
              <div className="careers-file-upload">
                <h3 className="careers-file-upload-title">
                  <i className="fas fa-upload mr-2"></i>
                  Upload Your Resume
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Please upload your resume in PDF, DOC, or DOCX format (Max 5MB)
                </p>
                <input 
                  type="file" 
                  name="fileToUpload" 
                  accept=".doc,.docx,.pdf"
                  onChange={handleFileChange}
                  className="careers-file-input"
                />
                {formData.file && (
                  <p className="text-green-600 text-sm mt-2">
                    <i className="fas fa-check mr-1"></i>
                    File selected: {formData.file.name}
                  </p>
                )}
              </div>

              <button type="submit" className="careers-submit-button">
                <i className="fas fa-paper-plane mr-2"></i>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
};

export default CareersPage;