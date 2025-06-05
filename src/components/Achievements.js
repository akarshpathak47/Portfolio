import React from 'react';
import './Achievements.css';
import bluestockImg from './images/bluestock_certificate.jpg';

const certificates = [
  {
    type: 'image',
    title: 'SDE Internship - Bluestock Fintech',
    src: bluestockImg,
    description:
      'Completed a 2-month internship as a Software Development Engineer at Bluestock Fintech from March to April 2025, focusing on frontend engineering and product enhancement.'
  },
  {
    type: 'pdf',
    title: 'Deep Learning - IIT Ropar (NPTEL)',
    src: '/pdfs/Deep Learning - IIT Ropar (2).pdf',
    description:
      'Completed a 12-week NPTEL course on Deep Learning conducted by IIT Ropar. Scored 80/100 with excellent understanding of neural networks and deep learning architectures.'
  },
  {
    type: 'pdf',
    title: 'AINCAT 2025 - Naukri Campus',
    src: '/pdfs/naukri_campus_ai_ncat_participation_may_2025.pdf',
    description:
      'Participated in AINCAT 2025, India\'s largest career aptitude test conducted by Naukri Campus to assess analytical and problem-solving skills.'
  },
  {
    type: 'external',
    title: 'Smart India Hackathon Certificate',
    src: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/c300296d-d3e4-4bce-a331-dccb55e88c4c.pdf',
    description:
      'Participated in the Smart India Hackathon, solving real-life problems through innovative tech solutions in a national-level competition.'
  },
  {
    type: 'external',
    title: 'Unstop Certificate',
    src: 'https://unstop.com/certificate-preview/71d23dba-eb85-4f35-99ae-ec61015d5977',
    description:
      'Received a certificate of participation/completion from Unstop for actively engaging in a competitive or educational challenge.'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements & Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h4>{cert.title}</h4>
            <p className="description">{cert.description}</p>
            {cert.type === 'image' && (
              <img src={cert.src} alt={cert.title} className="certificate-img" />
            )}
            {cert.type === 'pdf' && (
              <a href={cert.src} target="_blank" rel="noopener noreferrer" className="pdf-link">
                View PDF
              </a>
            )}
            {cert.type === 'external' && (
              <a href={cert.src} target="_blank" rel="noopener noreferrer" className="pdf-link">
                Open Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
