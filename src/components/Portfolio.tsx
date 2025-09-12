'use client';

const Portfolio = () => {
  const projects = [
    {
      icon: 'fas fa-database',
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and real-time analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application for iOS and Android with biometric authentication, real-time transactions, and advanced security features.',
      technologies: ['React Native', 'Firebase', 'Biometric Auth', 'REST API']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Analytics Dashboard',
      description: 'Real-time business intelligence dashboard with interactive charts, data visualization, and automated reporting capabilities for data-driven decision making.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL']
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Migration',
      description: 'Complete cloud infrastructure migration for enterprise client, reducing costs by 40% while improving scalability and performance.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security monitoring system with threat detection, vulnerability assessment, and automated incident response capabilities.',
      technologies: ['Python', 'Machine Learning', 'Elasticsearch', 'React']
    },
    {
      icon: 'fas fa-robot',
      title: 'AI Chatbot System',
      description: 'Intelligent customer service chatbot with natural language processing, multi-language support, and seamless integration with existing systems.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'WebSocket']
    }
  ];

  return (
    <div className="portfolio-container" id="portfolio">
      <div className="portfolio-inner-container">
        {/* Header Section */}
        <div className="portfolio-header">
          <h1 className="section-heading">our projects</h1>
          <p className="portfolio-description">
            Explore our portfolio of successful projects that showcase our expertise in delivering innovative solutions across various industries. 
            Each project represents our commitment to excellence and client satisfaction.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-icon">
                <i className={`${project.icon} portfolio-icon-i`}></i>
              </div>
              
              <h3 className="portfolio-card-title">
                {project.title}
              </h3>
              
              <p className="portfolio-card-description">
                {project.description}
              </p>
              
              <div className="mb-6">
                <div className="flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="portfolio-card-footer">
                <button className="portfolio-card-button">
                  View Details
                  <i className="fas fa-arrow-right portfolio-card-button-icon"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;