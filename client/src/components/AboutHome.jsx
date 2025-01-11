import { useEffect } from 'react';
import '../styles/abouthome.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutHome() {
  useEffect(() => {
    gsap.fromTo(
      '.abouthome-header',
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
          trigger: '.abouthome-header', // Element to trigger animation
          start: 'top 90%', // Trigger when the top of the element is 80% into the viewport
          toggleActions: 'play none none reset', // Play animation when entering viewport
        },
      }
    );
    gsap.fromTo(
      '.abouthome-desc',
      {
        opacity: 0,
        y: +30,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 1,
        ease: 'power2.out',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.abouthome-header', // Element to trigger animation
          start: 'top 90%', // Trigger when the top of the element is 80% into the viewport
          toggleActions: 'play none none reset', // Play animation when entering viewport
          // once: true,
        },
      }
    );
  }, []);
  return (
    <div className='abouthome-main' id='about'>
      <div className='abouthome-component'>
        <h2 className='abouthome-header'>About</h2>
        <div className='abouthome-desc'>
          <p>
            {`I am Siddharth Reddy Enjam, a recent graduate with a Master of Science in Engineering Data Science from the University of Houston. Throughout my academic journey, I have developed a deep passion for technology, Full-Stack development, and data-driven solutions, striving to innovate and deliver excellence in every project I undertake. My experiences have shaped me into a versatile problem-solver, eager to contribute to the ever-evolving field of data science and software development.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
