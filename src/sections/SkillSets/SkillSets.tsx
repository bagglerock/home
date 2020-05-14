import React from 'react';

export const SkillSets: React.FC = () => {
  return (
    <div className="skills">
      <h3>Technical Skills</h3>

      {skills.map(skill => (
        <div key={skill.category}>
          <h3>{skill.category}</h3>
          <ul>
            {skill.techs.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const skills = [
  {
    category: 'Front End',
    techs: ['Typescript', 'Javascript', 'ReactJS', 'HTML', 'CSS', 'JQuery', 'BootStrap', 'BluprintJS', 'Ant Design'],
  },
  {
    category: 'Back End',
    techs: ['NodeJS', 'PHP', 'Zend', 'ExpressJS', 'MySQL', 'MSSQL', 'Sequelize'],
  },
  {
    category: 'API Implementations',
    techs: ["Ebay's API", 'Jira API', 'Bamboo', 'Firebase', 'Yummly'],
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
  },
];
