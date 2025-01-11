import { useEffect, useRef, useState } from 'react';
import projects from '../data/projects';
import { useNavigate } from 'react-router-dom';
import Loading from '../animations/Loading';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

import '../styles/projectshome.css';
import { gsap } from 'gsap';

// const ProjectsHome = () => {
//   const [loading, setLoading] = useState(true);
//   const [myprojects, setMyprojects] = useState([]);
//   const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAllProjects = async () => {
//       try {
//         const res = await projects;
//         setLoading(false);
//         setMyprojects(res);
//       } catch (err) {
//         setLoading(false);
//         console.log(err);
//       }
//     };
//     fetchAllProjects();
//   }, []);

//   if (loading) {
//     return (
//       <div className='projecthome-main'>
//         <div className='projecthome-component'>
//           <h2>Projects</h2>
//           <Loading />
//         </div>
//       </div>
//     );
//   }

//   const handleExplore = (project) => {
//     navigate(`/projectdetails/` + project.id, { state: { project } });
//   };

//   const handleProjectP = () => {
//     // Go to the previous project
//     setCurrentProjectIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : prevIndex
//     );
//   };

//   const handleProjectN = () => {
//     setCurrentProjectIndex((prevIndex) =>
//       prevIndex < myprojects.length - 1 ? prevIndex + 1 : prevIndex
//     );
//   };

//   const currentProject = myprojects[currentProjectIndex];
//   // const stool = currentProject.tools.split(',').map((item) => item.trim());
//   // const slang = currentProject.lang.split(',').map((item) => item.trim());

//   return (
//     <div className='projecthome-main'>
//       <div className='projecthome-component'>
//         <h2>Projects</h2>
//         <div className='projecthome'>
//           <div className='projecthome-splitbtn'>
//             <div className='projecthome-img'>
//               <img src={currentProject.imgs} alt='project image' />
//             </div>
//             <div className='projecthome-overview'>
//               <div className='projecthome-info'>
//                 <h1 className='projecthome-name'>{currentProject.name}</h1>
//               </div>
//               <div className='projecthome-desc'>
//                 <ul className='projecthome-lang'>
//                   {currentProject.langs.map((item, index) => {
//                     return (
//                       <li
//                         key={index}
//                         className='phome-lang'
//                         style={{ backgroundColor: item.color }}
//                       >
//                         {item.lang}
//                       </li>
//                     );
//                   })}
//                 </ul>
//                 <ul className='projecthome-tools'>
//                   {currentProject.tools.map((item, index) => {
//                     return (
//                       <li
//                         key={index}
//                         className='phome-tool'
//                         style={{ backgroundColor: item.color }}
//                       >
//                         {item.tool}
//                       </li>
//                     );
//                   })}
//                 </ul>
//                 <p>{currentProject.description}</p>
//               </div>
//             </div>
//           </div>
//           <div className='projecthome-details'>
//             <button
//               className='detailshome-btn btn'
//               onClick={() => handleExplore(currentProject)}
//             >
//               Details
//             </button>
//           </div>
//         </div>
//         <div className='reviewhome'>
//           <button className='no-btn'>
//             <BsFillArrowLeftCircleFill
//               className={`
//             ${currentProjectIndex === 0 ? 'disable' : 'pn-btn'}`}
//               onClick={handleProjectP}
//               disabled={currentProjectIndex === 0}
//             />
//           </button>
//           <button className='no-btn'>
//             <BsFillArrowRightCircleFill
//               className={`
//             ${
//               currentProjectIndex === myprojects.length - 1
//                 ? 'disable'
//                 : 'pn-btn'
//             }`}
//               onClick={handleProjectN}
//               disabled={currentProjectIndex === myprojects.length - 1}
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const ProjectsHome = () => {
  const [loading, setLoading] = useState(true);
  const [myprojects, setMyprojects] = useState([]);
  const navigate = useNavigate();
  const projectContainerRef = useRef(null);

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const res = await projects;
        setLoading(false);
        setMyprojects(res);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchAllProjects();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.projecthome-header',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        ease: 'power2.out',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.projecthome-header',
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      }
    );

    gsap.fromTo(
      '.projecthome-elements',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        duration: 0.7,
        scrollTrigger: {
          trigger: '.projecthome-elements',
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      }
    );
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const container = projectContainerRef.current;

      if (container) {
        const scrollStep = container.clientWidth / 2;
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 2
        ) {
          container.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          container.scrollBy({
            left: scrollStep,
            behavior: 'smooth',
          });
        }
      }
    }, 5000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    projectContainerRef.current.scrollBy({
      left: -projectContainerRef.current.clientWidth / 2,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    projectContainerRef.current.scrollBy({
      left: projectContainerRef.current.clientWidth / 2,
      behavior: 'smooth',
    });
  };

  const handleExplore = (project) => {
    navigate(`/projectdetails/` + project.id, { state: { project } });
  };

  if (loading) {
    return (
      <div className='projecthome-main'>
        <div className='projecthome-component'>
          <h2 className='projecthome-header'>Projects</h2>
          <div className='projecthome-elements' ref={projectContainerRef}>
            <Loading />
          </div>
        </div>
      </div>
    );
  }

  const projectElements = myprojects.map((project) => {
    return (
      <div className='projecthome' key={project.id}>
        <div className='projecthome-splitbtn'>
          <div className='projecthome-img'>
            <img src={project.imgs} alt='project image' />
          </div>
          <div className='projecthome-overview'>
            <div className='projecthome-info'>
              <h1 className='projecthome-name'>{project.name}</h1>
            </div>
            <div className='projecthome-desc'>
              <ul className='projecthome-lang'>
                {project.langs.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className='phome-lang'
                      style={{ backgroundColor: item.color }}
                    >
                      {item.lang}
                    </li>
                  );
                })}
              </ul>
              <ul className='projecthome-tools'>
                {project.tools.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className='phome-tool'
                      style={{ backgroundColor: item.color }}
                    >
                      {item.tool}
                    </li>
                  );
                })}
              </ul>
              <p>{project.description}</p>
            </div>
          </div>
        </div>

        <div className='projecthome-details'>
          <button
            className='details-btn btn'
            onClick={() => handleExplore(project)}
          >
            Details
          </button>
        </div>
        {/* <Link to={`/projectdetails/${project.id}`} state={{ project }}>
          View project
        </Link> */}
      </div>
    );
  });

  return (
    <div className='projecthome-main'>
      <div className='projecthome-component'>
        <h2 className='projecthome-header'>Projects</h2>

        {/* Project Content */}
        <div className='projecthome-elements' ref={projectContainerRef}>
          {projectElements}
        </div>
        <div className='reviewhome'>
          <button className='no-btn' onClick={scrollLeft}>
            <BsFillArrowLeftCircleFill className='pn-btn pn-btn-left' />
          </button>
          <button className='no-btn' onClick={scrollRight}>
            <BsFillArrowRightCircleFill className='pn-btn pn-btn-right' />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectsHome;
