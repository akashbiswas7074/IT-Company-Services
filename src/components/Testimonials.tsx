'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp",
      text: "TechFlow Solutions transformed our digital presence completely. Their team delivered an exceptional website that not only looks amazing but also significantly improved our user engagement and conversion rates. The attention to detail and user experience is outstanding.",
      image: "/images/testimonial-1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder",
      company: "InnovateLab",
      text: "Working with TechFlow was a game-changer for our startup. They understood our vision and brought it to life with cutting-edge technology. The mobile app they developed has been downloaded over 100k times in just 6 months. Truly exceptional work!",
      image: "/images/testimonial-2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "DigitalFlow",
      text: "The digital marketing campaign they created for us exceeded all expectations. Our online visibility increased by 300% and we saw a 150% boost in qualified leads. Their expertise in SEO and social media is unmatched in the industry.",
      image: "/images/testimonial-3.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      position: "CTO",
      company: "CloudTech",
      text: "TechFlow's cloud migration services saved us thousands of dollars in infrastructure costs while improving our system performance by 40%. Their team is professional, knowledgeable, and always available when we need support.",
      image: "/images/testimonial-4.jpg",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Operations Manager",
      company: "DataSync",
      text: "From initial consultation to final delivery, TechFlow Solutions provided outstanding service. Their cybersecurity implementation gave us peace of mind, and their ongoing support has been invaluable to our business operations.",
      image: "/images/testimonial-5.jpg",
      rating: 5
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Product Manager",
      company: "AppStudio",
      text: "The e-commerce platform they built for us has revolutionized our business. Sales increased by 250% in the first quarter alone. Their technical expertise and business understanding make them the perfect technology partner.",
      image: "/images/testimonial-1.jpg",
      rating: 5
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-inner-container">
        <div className="testimonials-header">
          <h1 className="section-heading">testimonials</h1>
          <p className="testimonials-description">
            See what our clients have to say about working with us. 
            Their success stories inspire us to continue delivering exceptional results.
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonials-slide">
            <div className="testimonial-card-main">
              <div className="testimonial-content">
                <div className="testimonial-quote">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
              </div>
              
              <div className="testimonial-rating">
                <div className="testimonial-stars">
                  {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                    <i key={index} className="fas fa-star testimonial-star"></i>
                  ))}
                </div>
              </div>
              
              <div className="testimonial-author">
                <Image 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
                  <p className="testimonial-position">{testimonials[currentIndex].position}</p>
                  <p className="testimonial-company">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="testimonials-navigation">
            <button 
              className="testimonial-arrow" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="testimonial-arrow" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;