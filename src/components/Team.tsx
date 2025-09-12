'use client';

import Image from 'next/image';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Lead Developer",
      image: "/images/pexels-andrea-piacquadio-845434.jpg",
      bio: "Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies.",
      social: {
        linkedin: "https://www.linkedin.com/",
        twitter: "https://twitter.com/",
        github: "https://github.com/"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "UI/UX Designer",
      image: "/images/pexels-vinicius-wiesehofer-1130624.jpg",
      bio: "Creative designer specializing in user experience and modern interface design with a focus on accessibility.",
      social: {
        linkedin: "https://www.linkedin.com/",
        dribbble: "https://dribbble.com/",
        behance: "https://www.behance.net/"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Project Manager",
      image: "/images/pexels-hussein-altameemi-2776353.jpg",
      bio: "Agile project manager with expertise in leading cross-functional teams and delivering complex projects on time.",
      social: {
        linkedin: "https://www.linkedin.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/"
      }
    },
    {
      id: 4,
      name: "David Kim",
      position: "DevOps Engineer",
      image: "/images/pexels-andrea-piacquadio-745136.jpg",
      bio: "DevOps specialist focused on automation, cloud infrastructure, and continuous integration/deployment.",
      social: {
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
        twitter: "https://twitter.com/"
      }
    }
  ];

  return (
    <section className="team-container" id="team">
      <div className="team-inner-container">
        {/* Header Section */}
        <div className="team-header">
          <h1 className="section-heading-white">our team</h1>
          <p className="team-description">
            Meet the talented professionals behind our success. Our diverse team brings together expertise from various domains to deliver exceptional results for our clients.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-container">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={128}
                  height={128}
                  className="team-image"
                />
              </div>
              
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
              
              <div className="team-social">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="team-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin team-social-icon"></i>
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className="team-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter team-social-icon"></i>
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="team-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github team-social-icon"></i>
                  </a>
                )}
                {member.social.dribbble && (
                  <a href={member.social.dribbble} className="team-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-dribbble team-social-icon"></i>
                  </a>
                )}
                {member.social.behance && (
                  <a href={member.social.behance} className="team-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-behance team-social-icon"></i>
                  </a>
                )}
                {member.social.instagram && (
                  <a href={member.social.instagram} className="team-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram team-social-icon"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;