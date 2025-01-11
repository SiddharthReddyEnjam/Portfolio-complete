// import {
//   SiPython,
//   SiJavascript,
//   SiHtml5,
//   SiCss3,
//   SiMysql,
//   SiNodedotjs,
// } from 'react-icons/si';
// import { FaJava } from 'react-icons/fa';
// import { RiReactjsFill } from 'react-icons/ri';

// import '../styles/skills.css';
// import '../styles/query.css';

// const Skills = () => {
//   return (
//     <div className='skills-main'>
//       <div className='skills-section'>
//         <h2>Skills</h2>
//         <div className='skills'>
//           <div className='languages-component skill-component'>
//             <p className='skill-title'>Programming Languages</p>
//             <ul className='languages'>
//               <li>
//                 <SiPython />
//                 <span className='lang-name'>python</span>
//               </li>
//               <li>
//                 <FaJava />
//                 <span className='lang-name'>Java</span>
//               </li>
//               <li>
//                 C<span className='lang-name'>C programming</span>
//               </li>
//               <li>
//                 <SiMysql />
//                 <span className='lang-name'>MYSQL</span>
//               </li>
//             </ul>
//           </div>

//           <div className='technologies-component skill-component'>
//             <p className='skill-title'>Data and AI</p>
//             <ul className='technologies'>
//               <li className='lang-name'>Machine Learning</li>
//               <div className=''>
//                 {/* <img
//                 className='ml-img'
//                 src='src/images/logos/ML.jpg'
//                 alt='machine learning'
//               /> */}
//               </div>
//               <li className='lang-name'>Data Science</li>
//             </ul>
//           </div>

//           <div className='web-component skill-component'>
//             <p className='skill-title'>Web Development</p>
//             <ul className='web'>
//               <li>
//                 <SiHtml5 />
//                 <span className='lang-name'>HTML</span>
//               </li>
//               <li>
//                 <SiCss3 />
//                 <span className='lang-name'>CSS</span>
//               </li>
//               <li>
//                 <SiJavascript />
//                 <span className='lang-name'>JavaScript</span>
//               </li>
//               <li>
//                 <RiReactjsFill />
//                 <span className='lang-name'>ReactJs</span>
//               </li>
//               <li>
//                 <SiNodedotjs />
//                 <span className='lang-name'>NodeJs</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import skillsData from '../data/skillsData';
import '../styles/skills.css';
import '../styles/query.css';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    gsap.fromTo(
      '.skills-header',
      {
        opacity: 0,
        x: -100,
      },
      {
        x: 0,
        opacity: 1,
        ease: 'power2.out',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.skills-header',
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      }
    );

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 90%', // Start animation when the section enters the viewport
        end: 'center center', // Animation completes when the section is in the middle
        scrub: true, // Smooth animation based on scroll progress
      },
    });
    timeline
      .fromTo(
        '.skills .skill-component-0',
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }
      )
      .fromTo(
        '.skills .skill-component-1',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'power2.out' },
        '<' // Start this animation at the same time as the previous one
      )
      .fromTo(
        '.skills .skill-component-2',
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        '<' // Start this animation at the same time as the others
      );
  }, []);
  return (
    <div className='skills-main'>
      <div className='skills-section'>
        <h2 className='skills-header'>Skills</h2>
        <div className='skills'>
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`skill-component skill-component-${index} `}
            >
              <p className='skill-title'>{category.title}</p>
              <ul className='skills-list'>
                {category.skills.map((skill, idx) => (
                  <li key={idx}>
                    {skill.icon && skill.icon}
                    <span className='skill-name'>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
