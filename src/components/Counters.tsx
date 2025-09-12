'use client';

import { useEffect, useRef } from 'react';

const Counters = () => {
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const counters = counterRefs.current;
    const speed = 120;

    const updateCount = (counter: HTMLDivElement, target: number) => {
      const count = parseInt(counter.innerText);
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc).toString();
        setTimeout(() => updateCount(counter, target), 1);
      } else {
        counter.innerText = target.toString();
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target') || '0');
          updateCount(entry.target as HTMLDivElement, target);
          observer.unobserve(entry.target);
        }
      });
    });

    counters.forEach((counter) => {
      if (counter) {
        observer.observe(counter);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="counters">
      <div className="container">
        <div>
          <i className="far fa-clock fa-4x">⏰</i>
          <div 
            className="counter" 
            data-target="13500" 
            ref={(el) => (counterRefs.current[0] = el)}
          >
            0
          </div>
          <h3>Working Hours</h3>
        </div>
        <div>
          <i className="fas fa-gift fa-4x">🎁</i>
          <div 
            className="counter" 
            data-target="720" 
            ref={(el) => (counterRefs.current[1] = el)}
          >
            0
          </div>
          <h3>Completed Projects</h3>
        </div>
        <div>
          <i className="fas fa-users fa-4x">👥</i>
          <div 
            className="counter" 
            data-target="480" 
            ref={(el) => (counterRefs.current[2] = el)}
          >
            0
          </div>
          <h3>Happy Clients</h3>
        </div>
        <div>
          <i className="fas fa-award fa-4x">🏆</i>
          <div 
            className="counter" 
            data-target="120" 
            ref={(el) => (counterRefs.current[3] = el)}
          >
            0
          </div>
          <h3>Awards Received</h3>
        </div>
      </div>
    </section>
  );
};

export default Counters;