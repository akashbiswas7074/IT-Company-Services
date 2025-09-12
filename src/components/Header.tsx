'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'service', 'portfolio', 'team', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#service', label: 'Services', id: 'service' },
    { href: '#portfolio', label: 'Portfolio', id: 'portfolio' },
    { href: '#team', label: 'Team', id: 'team' },
    { href: '/careers', label: 'Careers', id: 'careers' },
    { href: '#contact', label: 'Contact', id: 'contact' },
    { href: '#faq', label: 'FAQ', id: 'faq' }
  ];

  return (
    <header className={`navbar-container ${isScrolled ? 'navbar-container-scrolled' : 'navbar-container-transparent'}`}>
      <div className="navbar-inner">
        <div className="navbar-content">
          {/* Logo */}
          <Link href="#home" className="navbar-logo-link" onClick={closeMenu}>
            <Image 
              src="/images/image.png" 
              alt="TechFlow Solutions Logo" 
              width={180} 
              height={45} 
              className="navbar-logo" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="navbar-desktop-nav">
            {navigationItems.map((item) => (
              <Link 
                key={item.id}
                href={item.href} 
                className={`navbar-nav-link ${isScrolled ? 'navbar-nav-link-scrolled' : 'navbar-nav-link-transparent'} ${
                  activeSection === item.id ? 'text-blue-600' : ''
                }`}
              >
                {item.label}
                <span className={`navbar-nav-underline ${activeSection === item.id ? 'navbar-nav-underline-hover' : ''}`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="navbar-cta-desktop">
            <button className={`navbar-cta-button ${isScrolled ? 'navbar-cta-button-scrolled' : 'navbar-cta-button-transparent'}`}>
              <i className="fas fa-rocket mr-2"></i>
              Get Quote
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className={`navbar-mobile-button ${isScrolled ? 'navbar-mobile-button-scrolled' : 'navbar-mobile-button-transparent'}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className={`navbar-mobile-icon ${isMenuOpen ? 'navbar-mobile-icon-open' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`navbar-mobile-menu ${isMenuOpen ? 'navbar-mobile-menu-open' : 'navbar-mobile-menu-closed'}`}>
        <div className="navbar-mobile-content">
          <div className="navbar-mobile-links">
            {navigationItems.map((item) => (
              <Link 
                key={item.id}
                href={item.href} 
                className={`navbar-mobile-link ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="navbar-mobile-cta">
              <button className="navbar-mobile-cta-button">
                <i className="fas fa-rocket mr-2"></i>
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;