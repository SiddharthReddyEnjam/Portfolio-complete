import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-main'>
      <div className='home'>
        <div className='intro-name'>
          <h1>Hi, My name is Siddharth</h1>
        </div>
        <div className='details'>
          <div className='intro'>
            <p>
              I am a creative and curious individual with a passion for
              technology. I am always looking for new ways to use technology to
              solve problems and create new experiences.I am also a skilled
              writer and communicator, and passionate about sharing my knowledge
              with others.
            </p>
          </div>
          <div className='education'>
            <h3>Education</h3>
            <p>
              I am dedicated and highly motivated graduate student at the
              University of Houston, pursuing a Master of Science in Engineering
              Data Science. With a strong academic background in Computer
              Science and Engineering, I obtained Bachelor of Technology degree
              from KL University, Vijayawada.
            </p>
          </div>
          <div className='skills'>
            <h3>Skills</h3>
            <p>
              During my academic journey, I developed a solid foundation in
              various programming languages such as Python, Java, C, and web
              development technologies including HTML, CSS, and JavaScript. He
              also possesses a good understanding of data structures,
              object-oriented programming, SQL, and has gained valuable
              knowledge in areas like Operating Systems, Database Management
              Systems, Data Science, and Machine Learning.
            </p>
          </div>
          <div className='home-projects'>
            <h3>Projects</h3>
            <p>
              I showcased my technical expertise through a range of academic and
              personal projects. One notable project is the Hostel Outing
              Management System, where I successfully developed applications for
              students, wardens, and watchmen, implementing high security and
              user-friendly interfaces. And also Motion Captures Hand Postures
              Capturing of motion in hand postures with a camera and training
              machine learning models based of the inputs of 14 users. Here
              worked with many machine learning models and finally the best
              outcome is given by deep learning models with a good accuracy.
              Additionally, I explored projects involving React front-end
              development and has experience working with MongoDB and SQL for
              handling CRUD operations. To see my projects
              <NavLink to='projects' className='clickable'>
                click here
              </NavLink>
            </p>
          </div>
          <div className='experience'>
            <h3>Experience</h3>
            <p>
              In terms of professional experience, I worked as a Bigdata
              Engineer at Cognizant Technology Solutions. I utilized
              technologies such as Python, SQL, and Java, and gained practical
              exposure to Hadoop, Hive, Putty, and HBase in a real-time
              environment.
            </p>
          </div>
          <div className='co-cu'>
            <h3>Leadership and Extra Curricular Activities </h3>
            <p>
              I actively engages in leadership, extracurricular, and volunteer
              activities. I served as a team leader in a hackathon, where I
              developed a project using React focused on blood donation,
              enabling individuals in need of blood to find donors in their
              vicinity. I also contributed to a startup called KISSS, where I
              trained interns in coding, front-end, and back-end development for
              an online e-commerce marketing venture related to clothing.
            </p>
          </div>
          <div className='certifications'>
            <h3>Certifications</h3>
            <p>
              I was stronly comitted towards continuous learning and is evident
              through my certifications, including Google Cloud Certified
              Associate Cloud Engineer, ServiceNow Certified System
              Administrator, and Mulesoft Developer Level - 1.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
