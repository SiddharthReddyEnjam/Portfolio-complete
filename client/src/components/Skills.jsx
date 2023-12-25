import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiNodedotjs,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { RiReactjsFill } from 'react-icons/ri';

import '../styles/skills.css';
import '../styles/query.css';

const Skills = () => {
  return (
    <div className='skills-main'>
      <div className='skills-section'>
        <h2>Skills</h2>
        <div className='skills'>
          <div className='languages-component skill-component'>
            <p className='skill-title'>Programming Languages</p>
            <ul className='languages'>
              <li>
                <SiPython />
                <span className='lang-name'>python</span>
              </li>
              <li>
                <FaJava />
                <span className='lang-name'>Java</span>
              </li>
              <li>
                C<span className='lang-name'>C programming</span>
              </li>
              <li>
                <SiMysql />
                <span className='lang-name'>MYSQL</span>
              </li>
            </ul>
          </div>

          <div className='technologies-component skill-component'>
            <p className='skill-title'>Data and AI</p>
            <ul className='technologies'>
              <li className='lang-name'>Machine Learning</li>
              <div className=''>
                {/* <img
                className='ml-img'
                src='src/images/logos/ML.jpg'
                alt='machine learning'
              /> */}
              </div>
              <li className='lang-name'>Data Science</li>
            </ul>
          </div>

          <div className='web-component skill-component'>
            <p className='skill-title'>Web Development</p>
            <ul className='web'>
              <li>
                <SiHtml5 />
                <span className='lang-name'>HTML</span>
              </li>
              <li>
                <SiCss3 />
                <span className='lang-name'>CSS</span>
              </li>
              <li>
                <SiJavascript />
                <span className='lang-name'>JavaScript</span>
              </li>
              <li>
                <RiReactjsFill />
                <span className='lang-name'>ReactJs</span>
              </li>
              <li>
                <SiNodedotjs />
                <span className='lang-name'>NodeJs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
