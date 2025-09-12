'use client';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'We create responsive, scalable web applications using modern technologies like React, Next.js, and Node.js. Our custom solutions are designed to meet your specific business requirements.',
      gradient: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile App Development',
      description: 'Expert mobile app development for iOS and Android platforms using React Native, Flutter, and native technologies. We deliver high-performance apps that users love.',
      gradient: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including SEO, social media marketing, PPC campaigns, and content marketing to boost your online presence and drive growth.',
      gradient: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud. We help you leverage the power of cloud computing for your business.',
      gradient: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cybersecurity',
      description: 'Protect your business with our comprehensive cybersecurity services including vulnerability assessments, penetration testing, and security monitoring.',
      gradient: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    },
    {
      icon: 'fas fa-cogs',
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions. We provide expert guidance on digital transformation and technology roadmaps.',
      gradient: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    }
  ];

  return (
    <div className="services-container">
      <div className="services-inner-container">
        {/* Centered Header */}
        <div className="services-header">
          <h1 className="section-heading">our services</h1>
          <p className="services-description">
            We help you build high-quality digital solutions and products as well as deliver a wide range of related professional services. 
            We are providing world-class service to our clients with cutting-edge technology and innovative approaches.
          </p>
        </div>
        
        {/* Centered Services Grid */}
        <div className="services-grid-wrapper">
          <div className="services-grid-container">
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    <i className={`${service.icon} service-icon-i`}></i>
                  </div>
                  
                  <h3 className="service-title">
                    {service.title}
                  </h3>
                  
                  <p className="service-description">
                    {service.description}
                  </p>
                  
                  <div className="service-button-wrapper">
                    <button className="service-button">
                      Learn More
                      <i className="fas fa-arrow-right service-button-icon"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Centered CTA Section */}
        <div className="cta-section-wrapper">
          <div className="cta-section">
            <h3 className="cta-title">Ready to Get Started?</h3>
            <p className="cta-description">
              Let's discuss how our services can help transform your business and drive growth.
            </p>
            <div className="cta-buttons-wrapper">
              <button className="cta-button-primary">
                <i className="fas fa-phone cta-button-primary-icon"></i>
                Contact Us
              </button>
              <button className="cta-button-secondary">
                <i className="fas fa-calendar cta-button-secondary-icon"></i>
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;