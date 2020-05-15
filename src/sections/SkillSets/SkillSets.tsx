import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faHandshake, faServer, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const SkillSets: React.FC = () => {
  return (
    <div className="skills">
      <div className="skills-header">
        <h3>Technical Skills</h3>
        <FontAwesomeIcon className="skills-header-icon" icon={faToolbox} size="3x" />
      </div>

      <div className="skills-lists">
        {skills.map(skill => (
          <div key={skill.category}>
            <div className="skill-header">
              <h5>{skill.category}</h5>
              <FontAwesomeIcon className="skill-icon" icon={skill.icon} size="2x" />
            </div>
            <ul>
              {skill.techs.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const skills = [
  {
    category: 'Front End',
    techs: ['Typescript', 'Javascript', 'ReactJS', 'HTML', 'CSS', 'JQuery', 'BootStrap', 'BluprintJS', 'Ant Design'],
    icon: faChrome,
  },
  {
    category: 'Back End',
    techs: ['NodeJS', 'PHP', 'Zend', 'ExpressJS', 'MySQL', 'MSSQL', 'Sequelize'],
    icon: faServer,
  },
  {
    category: 'API Implementations',
    techs: ["Ebay's API", 'Jira API', 'Bamboo', 'Firebase', 'Yummly'],
    icon: faHandshake,
  },
  {
    category: 'Other',
    techs: [
      'VSCode',
      'PHP Storm',
      'Git',
      'Jira',
      'Github/Bitbucket',
      'Docker',
      'Heroku',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Procreate',
      'Vectornator',
    ],
    icon: faDesktop,
  },
];
