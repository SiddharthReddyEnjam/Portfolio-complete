import { useState, useEffect, useMemo } from 'react';
import Skills from './Skills';
import ProjectsHome from './ProjectsHome';
import AboutHome from './AboutHome';
import '../styles/home-animated.css';
import Social from './Social';
import linkedin from '../images/logos/Linked.svg';
import Githubmark from '../images/logos/github-mark.svg';
import Githublogo from '../images/logos/Github_Logo.png';

const HomeIntro = () => {
  const resume_link =
    'https://drive.google.com/file/d/1Vb2qvBBXPRLI0X4kqZz-Pf06R2qzTEHM/view?usp=sharing';
  const nameText = 'Siddharth';
  const speed = 200;
  const [index, setIndex] = useState(0);
  const displayText = useMemo(() => nameText.slice(0, index), [index]);

  useEffect(() => {
    if (index >= nameText.length) return;

    const timeoutId = setTimeout(() => {
      setIndex((i) => i + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, nameText, speed]);

  return (
    <div id='home-main'>
      <div className='home-component'>
        <div className='home-sub'>
          <div className='introduction'>
            <h1>Hi, My name is {displayText}</h1>
            <div className='profile-links'>
              <a
                href='https://www.linkedin.com/in/siddharth-enjam/'
                target='_blank'
                rel='noopener noreferrer'
                className='pr-linkedinic'
              >
                <img src={linkedin} className='pro-logo-linkedin' />
                {/* <ion-icon name='logo-linkedin'></ion-icon> */}
              </a>
              <a
                href='https://github.com/SiddharthReddyEnjam'
                target='_blank'
                rel='noopener noreferrer'
                className='pr-gitic'
              >
                <img src={Githublogo} className='pro-logo pr-namelogo' />
                <img src={Githubmark} className='pro-logo' />
              </a>

              <a
                href='mailto: siddharthenjam@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                className='pr-mailic'
              >
                {/* <img src={gmail} className='pro-logo' /> */}
                Mail<ion-icon name='mail'></ion-icon>
              </a>

              <a
                href={resume_link}
                target='_blank'
                rel='noopener noreferrer'
                className='pr-mailic'
              >
                Resume<ion-icon name='document-text-outline'></ion-icon>
              </a>
            </div>
          </div>

          <div className='intro-img'></div>
        </div>

        <div className='down-icon'>
          <a className='down-anim' href='#about'>
            <ion-icon name='chevron-down-outline'></ion-icon>
          </a>
        </div>
      </div>
      <AboutHome />
      <Skills />
      <ProjectsHome />
      <Social />
    </div>
  );
};

export default HomeIntro;
