import baseballLogo from '../images/projects/Baseball/baseballjunkies.jpeg';
import rideEasyLogo from '../images/projects/RideEasy/RideEasy.jpeg';
import handImage from '../images/projects/MoCap/hand.png';
import countriesLogo from '../images/projects/COUNTRIESOW/countries_main.png';
import homsLogo from '../images/projects/HOMS/homs-logo.jpg';
import bloodGram from '../images/projects/BLOOD/BloodGram.png';
import omniLogo from '../images/projects/OMNI/omni-logo.png';
import carLogo from '../images/projects/RideEasy/Car.png';

const projects = [
  {
    id: 1,
    imgs: baseballLogo,
    name: 'Baseball Junkies',
    description:
      'Baseball Junkies is a dynamic web platform that enables seamless registration for baseball tournaments and events. It delivers a smooth and engaging user experience with real-time data, interactive content, and an efficient registration system that automatically assigns participants to teams.',
    langs: [
      { lang: 'TypeScript', color: 'Purple' },
      { lang: 'HTML', color: '#777' },
      { lang: 'Tailwind CSS', color: '#38B2AC' },
      // { lang: 'CSS', color: '#555' },
      { lang: 'Java', color: '#b07219' },

      // { lang: 'AWS Elastic Beanstalk', color: '#FF9900' },
      { lang: 'REST API', color: '#E535AB' },
    ],

    tools: [
      { tool: 'NextJS', color: 'indigo' },
      { tool: 'Spring Boot', color: '#6DB33F' },
      { tool: 'PostgreSQL', color: '#336791' },
      { tool: 'AWS', color: '#FF9900' },
    ],
    details: 'Based on tournament registration and game logs',
    detailsdesc:
      'Baseball Junkies is a full-stack web application built with Next.js and Spring Boot, designed for baseball enthusiasts to explore detailed team and player statistics, stay updated on game insights, and register for tournaments and events. The platform offers a smooth user experience with dynamic content, real-time data, and a streamlined registration system that automatically assigns participants to teams, making it ideal for players looking to engage more deeply with the sport.',
    site: 'https://baseballjunkies.vercel.app/',
  },
  {
    id: 2,
    imgs: rideEasyLogo,
    name: 'RideEasyy (Taxi Management System)',
    description:
      'RideEasy is a taxi management system designed for seamless booking, fare calculation, and tracking for both drivers and passengers. It incorporates features like real-time GPS tracking, secure payments, and user-friendly mobile apps for both drivers and riders.',
    langs: [
      { lang: 'JavaScript', color: 'green' },
      { lang: 'HTML', color: '#777' },
      { lang: 'CSS', color: '#555' },
    ],
    tools: [{ tool: 'ReactJs', color: 'indigo' }],
    details: 'Based on taxi booking and management.',
    site: 'https://rideeasy.netlify.app/',
    video: 'https://youtu.be/58NdRPFSPJc?si=UywMmwNjQ2yURDNH',
    videoId: '58NdRPFSPJc',
  },
  {
    id: 3,
    imgs: handImage,
    name: 'Motion Capture Hand Postures',
    description:
      'Capturing of motion in hand postures with a camera and training a machine learning models based of the inputs of 14 users. Here worked with many machine learning models and finally the best outcome is given by deep learning models with a good accuracy.',
    langs: [
      { lang: 'python', color: 'orange' },
      { lang: 'numpy', color: '#840B23' },
      { lang: 'pandas', color: 'green' },
      { lang: 'SQL', color: 'purple' },
    ],
    tools: [
      { tool: 'Machine Learning', color: 'blue' },
      { tool: 'Data Science', color: 'black' },
      { tool: 'Jupyter', color: 'green' },
    ],
    details: 'From MCHP',
  },
  {
    id: 4,
    imgs: countriesLogo,
    name: 'Countries of the World',
    description:
      'Using Tableau to analyze and visualize key global indicators, including economic growth, health, migration, climate impact on agriculture, and the role of technology in education and economy.',
    langs: [
      { lang: 'python', color: 'orange' },
      { lang: 'numpy', color: '#840B23' },
      { lang: 'pandas', color: 'green' },
    ],
    tools: [{ tool: 'Tableau', color: 'grey' }],
    details: 'From MCHP',
  },
  {
    id: 5,
    imgs: homsLogo,
    name: 'Hostel Outing Management System',
    description:
      'Developed three applications for student, warden and watchman and a form for a parent. Applications are developed with high security and easy access to the user with friendly user interface. Automated unique QR for every transaction.',
    langs: [
      { lang: 'Java', color: 'blue' },
      { lang: 'SQL', color: 'purple' },
      { lang: 'XML', color: 'violet' },
    ],
    tools: [
      { tool: 'Android Studio', color: 'green' },
      { tool: 'phpMyAdmin', color: 'gray' },
    ],
    details: 'From HOMS',
  },
  {
    id: 6,
    imgs: bloodGram,
    name: 'BloodGram',
    description:
      'Bloodgram is a platform which is doing extremely noble deed in getting blood to the needy.',
    langs: [
      { lang: 'JavaScript', color: 'green' },
      { lang: 'HTML', color: '#777' },
      { lang: 'CSS', color: '#555' },
    ],
    tools: [{ tool: 'ReactJs', color: 'indigo' }],
    details: 'Based on Blood Donation',
  },
  {
    id: 7,
    imgs: omniLogo,
    name: 'Omnifood',
    description:
      'Omnifood is about the food ordering it has some meal plans with healthy food and nutritionous. The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.',
    langs: [
      { lang: 'JavaScript', color: 'green' },
      { lang: 'HTML', color: '#777' },
      { lang: 'CSS', color: '#555' },
    ],
    tools: [],
    details:
      'Based on food ordering. To get a healthy meal delivered to the door, every single day',
  },
  {
    id: 8,
    imgs: carLogo,
    name: 'Cars(in progress)',
    description: 'will be added',
    langs: [
      { lang: 'JavaScript', color: 'green' },
      { lang: 'HTML', color: '#777' },
      { lang: 'CSS', color: '#555' },
    ],
    tools: [{ tool: 'ReactJs', color: 'indigo' }],
    details: 'Based on cars.',
  },
];

export default projects;
