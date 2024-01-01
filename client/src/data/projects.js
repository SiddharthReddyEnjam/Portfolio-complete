const projects = [
  {
    id: 1,
    imgs: '/projects/MoCap/hand.png',
    name: 'Motion Capture Hand Postures',
    description:
      'Capturing of motion in hand postures with a camera and training a machine learning models based of the inputs of 14 users. Here worked with many machine learning models and finally the best outcome is given by deep learning models with a good accuracy.',
    langs: [
      { lang: 'python', color: 'orange' },
      { lang: 'numpy', color: 'red' },
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
    id: 2,
    imgs: '/images/projects/HOMS/homs-logo.jpg',
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
    id: 3,
    imgs: '/images/projects/BLOOD/BloodGram.png',
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
    id: 4,
    imgs: '/images/projects/OMNI/omni-logo.png',
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
];

export default projects;
