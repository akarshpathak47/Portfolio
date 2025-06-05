import React from 'react';
import './Skills.css';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React JS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', image: 'https://unpkg.com/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg' }

    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node JS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
    ]
  },
  {
    category: 'Programming Languages',
    items: [
      { name: 'C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
    ]
  }
];

export default function Skills() {
  return (
    <div className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      {skills.map((section) => (
        <div key={section.category} className="skills-block">
          <h3 className="skills-category">{section.category}</h3>
          <div className="skills-grid">
            {section.items.map((skill) => (
              <div key={skill.name} className="skill-box">
                <img src={skill.image} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
