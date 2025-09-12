'use client';

import { useState } from 'react';

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of IT services including web development, mobile app development, digital marketing, cloud solutions, cybersecurity, and IT consulting. Our team is equipped to handle projects of various sizes and complexities."
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      id: 3,
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to large enterprises. We understand that small businesses have unique needs and budget considerations, and we tailor our solutions accordingly to provide maximum value."
    },
    {
      id: 4,
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on the scope, complexity, and timeline. We offer flexible payment options including milestone-based payments. We provide detailed quotes after understanding your requirements and are transparent about all costs upfront."
    },
    {
      id: 5,
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support and maintenance services for all our projects. This includes bug fixes, updates, security patches, and feature enhancements. We have different support packages to suit your needs and budget."
    },
    {
      id: 6,
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, AWS, and more. Our team stays updated with the latest trends and chooses the best technology stack for each project to ensure optimal performance and scalability."
    }
  ];

  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="faq-container" id="faq">
      <div className="faq-inner-container">
        {/* Header Section */}
        <div className="faq-header">
          <h1 className="section-heading">frequently asked questions</h1>
          <p className="faq-description">
            Find answers to common questions about our services, processes, and policies. 
            If you don't see your question here, feel free to contact us directly.
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="faq-grid">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleAccordion(faq.id)}
              >
                <h3 className="faq-question-text">{faq.question}</h3>
                <div className={`faq-icon ${activeAccordion === faq.id ? 'faq-icon-open' : ''}`}>
                  <i className={`fas ${activeAccordion === faq.id ? 'fa-minus' : 'fa-plus'}`}></i>
                </div>
              </div>
              {activeAccordion === faq.id && (
                <div className="faq-answer">
                  <p className="faq-answer-content">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;