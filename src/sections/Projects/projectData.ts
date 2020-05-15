import triviaReact from '../../assets/trivia-react.png';
import chefsDen from '../../assets/chefsden.jpg';
import knockout from '../../assets/knockout.jpg';
import scrapoogle from '../../assets/scrapoogle.jpg';
import freightSys from '../../assets/freight-sys.jpg';
import hangman from '../../assets/hangman.jpg';
import rps from '../../assets/rps.jpg';
import trivia from '../../assets/trivia.jpg';
import clicky from '../../assets/clicky.jpg';
import peachCo from '../../assets/peachco.gif';
import binaryCalc from '../../assets/binary-calc.png';
import ajax from '../../assets/ajax.png';
import scrapooglePng from '../../assets/scrapoogle.png';

export const projects = [
  {
    name: 'Weird Trivia Fun - Using React',
    imgName: triviaReact,
    link: 'https://glacial-bastion-18712.herokuapp.com',
    github: 'https://github.com/bagglerock/Trivia-React',
    description:
      'This is a Trivia Game made up of nonsense questions and answers. It might not make any sense but there are correct answers. The questions and answers are shuffled so memorizing the placement of the answers will not help. Written using ReactJS, Bootstrap, and CSS grid. Bootstrap was just used to help quickly create each of the components. CSS grid was just used to help layout certain parts of the app.',
    technologies: 'Node.js, Express.js, React, Bootstrap 4+, css modules set to true, Javascript, HTML, CSS',
  },
  {
    name: "Chef's Den",
    imgName: chefsDen,
    link: 'https://immense-plateau-63304.herokuapp.com/',
    github: 'https://github.com/bagglerock/Chefs-Den',
    description:
      'An application dedicated to your food needs.  This uses Yummly API to get the recipes and displays them using a combination of JQuery and Handlebars.  It uses MySQL to save your favorites and login information.',
    technologies: 'Node.js, Express.js, Handlebars, bcrypt, MySQL, Sequelize, Javascript, jQuery, HTML, CSS',
  },
  {
    name: 'Knockout Fitness',
    imgName: knockout,
    link: 'http://knockoutfitnessmuaythai.com',
    github: 'https://github.com/bagglerock/knockout-fitness',
    description: 'This is a website built for Knockout Fitness Muay Thai in Brick NJ.',
    technologies: 'HTML, CSS, jQuery',
  },
  {
    name: 'Scrappy-Scraper',
    imgName: scrapoogle,
    link: 'https://agile-coast-42538.herokuapp.com/',
    github: 'https://github.com/bagglerock/Scrappy-Scraper',
    description:
      'This app is designed to pull articles from news.google.com with the headline, a brief summary and a link to the actual article.  When update is hit, it will give a list of all the articles that news.google.com provies at the time.  Anything highlighted with a background in green is an article that had previously been saved.  In the saved articles, you have the ability to store any new notes.',
    technologies: 'Node.js, Express.js, Handlebars, MongoDB, Mongoose, Axios, Cheerio, Javascript, jQuery, HTML, CSS',
  },
  {
    name: 'Freight Systems NJ',
    imgName: freightSys,
    link: 'https://bagglerock.github.io/freight-sys',
    github: 'https://github.com/bagglerock/freight-sys',
    description: 'Website for Freight Systems of NJ.  A Logistics company for your shipping needs.',
    technologies: 'HTML, CSS, jQuery',
  },
  {
    name: 'Hangman',
    imgName: hangman,
    link: 'https://bagglerock.github.io/Hangman-Game',
    github: 'https://github.com/bagglerock/Hangman-Game',
    description:
      'Hangman game for the browser.  Musicians are the subject and spotify comes up on correct guess. Written using HTML, CSS and Javascript',
    technologies: 'Javascript, HTML, CSS, Bootstrap',
  },
  {
    name: 'Rock Paper Scissors',
    imgName: rps,
    link: 'https://bagglerock.github.io/RPS-Multiplayer',
    github: 'https://github.com/bagglerock/RPS-Multiplayer',
    description: 'Multiplayer Rock, Paper, Scissors with chat.  Written using HTML, CSS, Bootstrap, and the Firebase API',
    technologies: 'Javascript, jQuery, Firebase, HTML, CSS',
  },
  {
    name: 'Trivia Game',
    imgName: trivia,
    link: 'https://bagglerock.github.io/TriviaGame/',
    github: 'https://github.com/bagglerock/TriviaGame',
    description:
      'This is a fun little take on Trivia.  I could not think of any questions or answers so I wanted to create a list of questions and answers that made absolutely no sense. This is written in basic HTML using some Bootstrap, a little CSS, Javascript and Jquery.  ',
    technologies: 'Javascript, jQuery, HTML, CSS, Bootstrap',
  },
  {
    name: 'Clicky Game',
    imgName: clicky,
    link: 'https://mysterious-stream-83031.herokuapp.com/',
    github: 'https://github.com/bagglerock/clicky-game',
    description:
      'Clicky Game is a small little game much like memory.  Try not to click on the same picture twice and build up your score.  This was my first React App that I had made.',
    technologies: 'MERN',
  },
  {
    name: 'PeachCo Lister 3.0',
    imgName: peachCo,
    link: 'https://limitless-reaches-23686.herokuapp.com',
    github: 'https://github.com/bagglerock/peachco-react',
    description:
      'A browser based application that holds product information and lists products onto Ebay. At the moment the repo is private.  It was originally written using HTML, CSS, Javascript and PHP, but I wanted to make a Single Page version that would be optimized for the tablet.  This one uses React with a Node Backend.  Products are stored in a MySQL database, and sent to Ebay using the npm-package called ebay-api.  Images are sent to another server using the npm package jsftp.',
    technologies: 'ReactJS, MySQL, NodeJS, Express, jsftp, node-ebay-api, multer',
  },
  {
    name: 'Binary Calculator',
    imgName: binaryCalc,
    link: 'https://bagglerock.github.io/Binary-Calculator/',
    github: 'https://github.com/bagglerock/Binary-Calculator',
    description: 'A binary calculator that is written in HTML, CSS, and Javascript',
    technologies: '',
  },
  {
    name: 'Ajax Event Base Class',
    imgName: ajax,
    link: 'https://bagglerock.github.io/ajax-event-base-class/',
    github: 'https://github.com/bagglerock/ajax-event-base-class',
    description:
      'A small practice project where I made ajax calls in pure Javascript.  It changes data using a click event in a small section of the page acting like a single page application',
    technologies: '',
  },
  {
    name: 'Scrapoogle',
    imgName: scrapooglePng,
    link: 'https://vast-taiga-79745.herokuapp.com',
    github: 'https://github.com/bagglerock/Scrapoogle',
    description:
      'This is a rewrite of the Scrappy Scraper site using ReactJS with Node backend.  CSS Modules are used in this one to maintain simplicity.',
    technologies: '',
  },
];
