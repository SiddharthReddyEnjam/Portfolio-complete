import Skills from './Skills';
import ProjectsHome from './ProjectsHome';
import AboutHome from './AboutHome';

import '../styles/home-animated.css';
import Social from './Social';

const HomeIntro = () => {
  return (
    <div id='home-main'>
      <div className='home-component'>
        <div className='home-sub'>
          <div className='introduction'>
            <h1>Hi, My name is Siddharth</h1>
            {/* <p>I am a Machine Learning Engineer and Full Stack Developer</p> */}
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
