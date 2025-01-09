import { useOutletContext } from 'react-router-dom';
import { resume_link } from '../actions/resume_link';
import '../styles/about.css';
import ResumePreview from './ResumePreview';

function About() {
  const { darkTheme } = useOutletContext();
  return (
    <div className={`about-main ${darkTheme && 'about-main-dark'}`}>
      <div className={`about-component ${darkTheme && 'about-component-dark'}`}>
        <h2>About</h2>
        <div className='about-desc'>
          <p>
            {`Hey there, I'm Siddharth Reddy Enjam, and I'm all about that tech life! I've got this insatiable curiosity and a creative streak that just won't quit. I'm always on the lookout for new ways to use technology to solve problems and create awesome new experiences for people.`}
          </p>
          <p>{`So, let me give you the lowdown on my academic journey. Right now, I'm a grad student at the University of Houston, working towards a Master of Science in Engineering Data Science. But it all started with a Bachelor of Technology degree from KL University in Vijayawada. That's where I got my feet wet in Computer Science and Engineering.`}</p>
          <p>
            {`Now, the fun stuff – my skills. I've got a solid foundation in various programming languages like Python, Java, C, and all those web development goodies like HTML, CSS, and JavaScript. I can tango with data structures, nail object-oriented programming, and rock SQL like a pro. And I've even delved into Operating Systems, Database Management Systems, and the magic of Data Science and Machine Learning.`}
          </p>
          <p>{`I'm not just about the theory, though. I've showcased my tech chops through a bunch of cool projects. One that I'm particularly proud of is the Hostel Outing Management System. I designed apps for students, wardens, and watchmen, with a big focus on security and user-friendliness. And then there's the Motion Captures Hand Postures project – I captured hand movements with a camera and trained some top-notch machine learning models. Deep learning models, in particular, turned out to be the winners with some impressive accuracy.`}</p>
          <p>
            {`I've also dabbled in React for front-end development and got my hands dirty with MongoDB and SQL for handling CRUD operations. You can check out more about my projects if you're interested.`}
          </p>
          <p>
            {`In the professional world, I've been a Bigdata Engineer at Cognizant Technology Solutions. That's where I put my Python, SQL, and Java skills to good use, and I even got to play with Hadoop, Hive, Putty, and HBase in a real-world setting.`}
          </p>
          <p>
            {`But hey, I'm not all about the tech grind. I like to give back and have some fun too. I've taken on leadership roles in hackathons, including one where we developed a React project for blood donation – it helps people find blood donors nearby. I've also chipped in at a startup called KISSS, where I trained interns in coding and the art of front-end and back-end development for an e-commerce marketing venture focused on clothing.`}
          </p>
          <p>
            {`And as for certifications, I'm all about that continuous learning. I've bagged some cool ones, including Google Cloud Certified Associate Cloud Engineer, ServiceNow Certified System Administrator, and Mulesoft Developer Level - 1.`}
          </p>
          <p>
            {`So that's me in a nutshell – a tech enthusiast with a knack for problem-solving, a love for creating unique experiences, and a passion for sharing knowledge with others. Let's dive into the tech world and make some awesome things happen together!`}
          </p>
        </div>
        <ResumePreview pdfUrl={resume_link} />
      </div>
    </div>
  );
}

export default About;
