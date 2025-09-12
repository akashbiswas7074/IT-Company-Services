'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Clients = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple carousel implementation for clients
    const carousel = carouselRef.current;
    if (!carousel) return;

    let currentIndex = 0;
    const items = carousel.children;
    const totalItems = items.length;

    const showItems = (startIndex: number) => {
      Array.from(items).forEach((item, i) => {
        (item as HTMLElement).style.display = 
          i >= startIndex && i < startIndex + 6 ? 'inline-block' : 'none';
      });
    };

    const nextItems = () => {
      currentIndex = (currentIndex + 1) % totalItems;
      showItems(currentIndex);
    };

    // Show first 6 items initially
    showItems(0);

    // Auto-advance every 3 seconds
    const interval = setInterval(nextItems, 3000);

    return () => clearInterval(interval);
  }, []);

  const clientLogos = [
    { name: "TechCorp", logo: "/images/image.png" },
    { name: "InnovateLab", logo: "/images/image.png" },
    { name: "DigitalFlow", logo: "/images/image.png" },
    { name: "CloudTech", logo: "/images/image.png" },
    { name: "DataSync", logo: "/images/image.png" },
    { name: "WebCraft", logo: "/images/image.png" },
    { name: "AppStudio", logo: "/images/image.png" },
    { name: "CodeForge", logo: "/images/image.png" },
    { name: "PixelPerfect", logo: "/images/image.png" },
    { name: "ByteWorks", logo: "/images/image.png" },
    { name: "DevMaster", logo: "/images/image.png" },
    { name: "TechFlow", logo: "/images/image.png" }
  ];

  return (
    <div className="clients-container">
      <div className="clients-inner-container">
        <div className="clients-header">
          <h1 className="section-heading">our clients</h1>
          <p className="clients-description">
            We're proud to work with industry leaders and innovative companies. 
            Our clients trust us to deliver exceptional digital solutions that drive their business forward.
          </p>
        </div>
        <div className="clients-grid">
          {clientLogos.map((client, index) => (
            <div key={index} className="client-logo-wrapper">
              <Image 
                src={client.logo} 
                alt={`${client.name} Logo`} 
                width={150} 
                height={100} 
                className="client-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;