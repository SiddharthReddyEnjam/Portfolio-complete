import { useEffect } from 'react';
import Skills from './Skills';
import ProjectsHome from './ProjectsHome';
import AboutHome from './AboutHome';
import '../styles/home-animated.css';
import '../animations/styles/parallax.css';
// import Social from './Social';
import linkedin from '../images/logos/Linked.svg';
import Githubmark from '../images/logos/github-mark.svg';
import Gitlogo from '../images/logos/git_logo.png';
import { resume_link } from '../actions/resume_link';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const HomeIntro = () => {
  const nameText = 'Siddharth';

  useEffect(() => {
    // Animate "Hi, My name is" from the left
    const introText = document.querySelector('.intro-text');
    const nameSpans = document.querySelectorAll('.myname');
    const profileLinks = document.querySelector('.profile-links');

    const timeline = gsap.timeline();
    timeline
      .fromTo(
        introText,
        { x: '-100%', opacity: 0 }, // Start from off-screen left
        { x: '0%', opacity: 1, duration: 1, ease: 'power3.out' } // Slide into place
      )
      .fromTo(
        nameSpans,
        { y: -20, opacity: 0 }, // Initial state for letters
        {
          y: 0,
          opacity: 1,
          stagger: 0.1, // Animate each letter with a slight delay
          ease: 'power2.out',
          duration: 0.5,
        },
        '+=0.1' // Start this animation slightly after the first one finishes
      );

    gsap.fromTo(
      profileLinks,
      { x: '-100', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.intro-img',
      { x: '+50', opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, [nameText]);

  return (
    <div className='home-main '>
      <div className='home-component parallax'>
        <div className='home-sub'>
          <div className='introduction'>
            {/* <h1>Hi, My name is {displayText}</h1> */}
            <h1 className='intro-text'>
              Hi, My Name is{' '}
              <p>
                {nameText.split('').map((char, idx) => {
                  return (
                    <span key={idx} className={`myname`}>
                      {char}
                    </span>
                  );
                })}
              </p>
            </h1>
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
                <img src={Gitlogo} className='pro-logo pr-namelogo' />
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

          <motion.div
            initial={{ x: '+50%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          ></motion.div>
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
      {/* <Social /> */}
    </div>
  );
};

export default HomeIntro;
