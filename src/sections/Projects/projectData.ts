import chefsDen from '../../assets/projects/chefsden.jpg';
import hangman from '../../assets/projects/hangman.jpg';
import knockout from '../../assets/projects/knockout.jpg';
import peachCo from '../../assets/projects/peachco.gif';
import rps from '../../assets/projects/rps.jpg';
import trivia from '../../assets/projects/trivia.png';

export const projects = [
  {
    name: 'Trivia Game',
    img: trivia,
    projectLink: 'https://bagglerock.github.io/Trivia-React/',
    githubLink: 'https://github.com/bagglerock/Trivia-React',
    description:
      'This is a trivia game written with React using typescript.  It calls upon the Open Trivia DB API for its questions.  It will randomize the questions and answers.  It is still a WIP at the moment but is playable.  More features to come with time.',
    technologies: 'Node.js, React, Typescript, Bootstrap 4+, CSS with Sass',
  },
  {
    name: "Chef's Den",
    img: chefsDen,
    projectLink: 'https://immense-plateau-63304.herokuapp.com/',
    githubLink: 'https://github.com/bagglerock/Chefs-Den',
    description:
      'An application dedicated to your food needs.  This uses Yummly API to get the recipes and displays them using a combination of JQuery and Handlebars.  It uses MySQL to save your favorites and login information.',
    technologies: 'Node.js, Express.js, Handlebars, bcrypt, MySQL, Sequelize, Javascript, jQuery, HTML, CSS',
  },
  {
    name: 'Knockout Fitness',
    img: knockout,
    projectLink: 'http://knockoutfitnessmuaythai.com',
    githubLink: 'https://github.com/bagglerock/knockout-fitness',
    description: 'This is a website built for Knockout Fitness Muay Thai in Brick NJ.',
    technologies: 'HTML, CSS, jQuery',
  },
  {
    name: 'Hangman',
    img: hangman,
    projectLink: 'https://bagglerock.github.io/Hangman-Game',
    githubLink: 'https://github.com/bagglerock/Hangman-Game',
    description:
      'Hangman game for the browser.  Musicians are the subject and spotify comes up on correct guess. Written using HTML, CSS and Javascript',
    technologies: 'Javascript, HTML, CSS, Bootstrap',
  },
  {
    name: 'Rock Paper Scissors',
    img: rps,
    projectLink: 'https://bagglerock.github.io/RPS-Multiplayer',
    githubLink: 'https://github.com/bagglerock/RPS-Multiplayer',
    description: 'Multiplayer Rock, Paper, Scissors with chat.  Written using HTML, CSS, Bootstrap, and the Firebase API',
    technologies: 'Javascript, jQuery, Firebase, HTML, CSS',
  },
  {
    name: 'PeachCo Lister 3.0',
    img: peachCo,
    projectLink: 'https://limitless-reaches-23686.herokuapp.com',
    githubLink: 'https://github.com/bagglerock/peachco-react',
    description:
      'A browser based application that holds product information and lists products onto Ebay. At the moment the repo is private.  It was originally written using HTML, CSS, Javascript and PHP, but I wanted to make a Single Page version that would be optimized for the tablet.  This one uses React with a Node Backend.  Products are stored in a MySQL database, and sent to Ebay using the npm-package called ebay-api.  Images are sent to another server using the npm package jsftp.',
    technologies: 'ReactJS, MySQL, NodeJS, Express, jsftp, node-ebay-api, multer',
  },
];
