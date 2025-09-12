'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-inner-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <h4 className="footer-section-title">TechFlow Solutions</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Leading IT company providing innovative digital solutions, web development, 
                mobile apps, and cutting-edge technology services to transform your business.
              </p>
              <div className="footer-social-links">
                <a href="https://www.facebook.com/" className="footer-social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/" className="footer-social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/" className="footer-social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/" className="footer-social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-section-title">Quick Links</h4>
              <div className="footer-links">
                <Link href="#" className="footer-link">
                  <i className="fas fa-chevron-right footer-link-icon"></i>
                  Home
                </Link>
                <Link href="#about" className="footer-link">
                  <i className="fas fa-chevron-right footer-link-icon"></i>
                  About Us
                </Link>
                <Link href="#service" className="footer-link">
                  <i className="fas fa-chevron-right footer-link-icon"></i>
                  Our Services
                </Link>
                <Link href="#portfolio" className="footer-link">
                  <i className="fas fa-chevron-right footer-link-icon"></i>
                  Portfolio
                </Link>
                <Link href="#team" className="footer-link">
                  <i className="fas fa-chevron-right footer-link-icon"></i>
                  Our Team
                </Link>
                <Link href="#contact" className="footer-link">
                  <i className="fas fa-chevron-right footer-link-icon"></i>
                  Contact
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-section-title">Our Services</h4>
              <div className="footer-links">
                <Link href="#service" className="footer-link">
                  <i className="fas fa-chevron-right footer-link-icon"></i>
                  Web Development
                </Link>
                <Link href="#service" className="footer-link">
                  <i className="fas fa-chevron-right footer-link-icon"></i>
                  Mobile Apps
                </Link>
                <Link href="#service" className="footer-link">
                  <i className="fas fa-chevron-right footer-link-icon"></i>
                  Digital Marketing
                </Link>
                <Link href="#service" className="footer-link">
                  <i className="fas fa-chevron-right footer-link-icon"></i>
                  Cloud Solutions
                </Link>
                <Link href="#service" className="footer-link">
                  <i className="fas fa-chevron-right footer-link-icon"></i>
                  Cybersecurity
                </Link>
                <Link href="#service" className="footer-link">
                  <i className="fas fa-chevron-right footer-link-icon"></i>
                  IT Consulting
                </Link>
              </div>
            </div>

            {/* Contact Info & Newsletter */}
            <div className="footer-section">
              <h4 className="footer-section-title">Get In Touch</h4>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <i className="fas fa-map-marker-alt footer-contact-icon"></i>
                  <div>
                    <p>123 Business Street</p>
                    <p>Tech City, TC 12345</p>
                    <p>United States</p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <i className="fas fa-phone footer-contact-icon"></i>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="footer-contact-item">
                  <i className="fas fa-envelope footer-contact-icon"></i>
                  <p>info@techflowsolutions.com</p>
                </div>
              </div>

              <div className="footer-newsletter">
                <h5 className="text-white font-semibold mb-3">Newsletter</h5>
                <p className="footer-newsletter-text">
                  Subscribe to get our latest updates and tech insights.
                </p>
                <form className="footer-newsletter-form">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    className="footer-newsletter-input"
                    required
                  />
                  <button type="submit" className="footer-newsletter-button">
                    <i className="fas fa-paper-plane mr-2"></i>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-inner-container">
          <div className="footer-copyright">
            <p>&copy; 2024 TechFlow Solutions. All Rights Reserved. | 
              <Link href="#" className="text-gray-300 hover:text-white ml-1">Privacy Policy</Link> | 
              <Link href="#" className="text-gray-300 hover:text-white ml-1">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;